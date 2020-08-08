window.AudioContext = window.AudioContext || window.webkitAudioContext;
if (typeof AudioContext === "undefined")
  alert('audio api not supported');

//data constants
const 
  //octave correspondance
  //see https://en.wikipedia.org/wiki/Audio_frequency
  octaves = {
    "-1":8.18 //C-1 :Lowest organ note 	N/A (fundamental frequency inaudible)
    , "0":16.35 //C0 : Lowest note for tuba, large pipe organs, Bösendorfer Imperial Grand Piano 	N/A (fundamental frequency inaudible)
    , "1":32.70 //C1 : Lowest C on a standard 88-key piano. 	
    , "2":65.41 //C2 : Lowest note for cello 	
    , "3":130.81 //C3 : Lowest note for viola, mandola 	
    , "4":261.63 //C4 : Middle C 	
    , "5":523.25 //C5 : C in middle of treble clef 	
    , "6":1046.50 //C6 : Approximately the highest note reproducible by the average female human voice. 	
    , "7":2093 //C7 : Highest note for a flute. 	
    , "8":4186 //C8 : Highest note on a standard 88-key piano. 	
    , "9":8372 //C9 : 	
    , "10":16744 //C10 : Approximately the tone that a typical CRT television emits while running.
  },
  //Arbitrary starting notes
  notes = {
    'C': 0,
    'C#': 1,
    'D': 2,
    'D#': 3,
    'E': 4,
    'F': 5,
    'F#': 6,
    'G': 7,
    'G#': 8,
    'A': 9,
    'A#': 10,
    'B': 11
  },
  //scales, number of semitones from the tonic.
  // https://en.wikipedia.org/wiki/Diatonic_scale
  scales = {
    ionian: [0, 2, 4, 5, 7, 9, 11],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10],
    locrian: [0, 1, 3, 5, 6, 8, 10]
  },
  //svg icon path for the wave form.
  oscillatorTypes = [{
    name: 'sine',
    iconPath: 'M 0,4 C 0,4 0,1 2,1 4,1 4,7 6,7 8,7 8,4 8,4'
  }, {
    name: 'square',
    iconPath: 'M 0,1 0,7 4,7 4,1 8,1 8,7'
  }, {
    name: 'triangle',
    iconPath: 'M 0,4 2,8 6,0 8,4'
  }]
;
//store config + main model
class KaossModel {
  constructor() {
    //web audio api nodes
    this.context = new AudioContext();
    this.oscillatorNode = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    //connect
    this.oscillatorNode.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    //do that later or the sound starts
    //our custom model vars
    this.bpm = 120;
    //current selected octave index
    this.octave = 2;
    //selected scale
    this.type = 'sine';
    this.volume = 0;
    this.frequency = this.getFrequency();
  this.initializeScales();
    this.scale = scales['none'];
    //Start silent
    this.gainNode.gain.value =0;
    this.oscillatorNode.start();
    
  }
  initializeScales(){
    scales['none'] = [];
    for(let i =0;i<100;i++){
      scales['none'].push(i);
    }
    scales['semitone'] = [];
    for(let i =0;i<11;i++){
      scales['semitone'].push(i);
    }
  }
  setType(type) {
    this.oscillatorNode.type = type;
  }
  setTonic(ton) {
    //todo selected index
    this.tonic = notes[ton];
  }
  setVolume(vol) {
    //transform volume from range 0/1 to 
    this.volume = ((2 - vol)/2);
    if(this.isPlaying){
    this.gainNode.gain.value = this.volume;
    }
  }
  setOctave(oct) {
    this.octave = octaves[oct];
  }
  setMode(modeKey) {
    this.scale = scales[modeKey];
  }
  //receive a pitch from -1 to 1 depending on where user touched
  setFrequency(pitch) {
    this.currentPitch = (pitch+1)/2;
    this.currentOffset = this.scale[ Math.floor(this.currentPitch * this.scale.length +1)]; this.oscillatorNode.frequency.value = this.getFrequency();
  }
  getFrequency(){
    
   let freq = this.octave + this.currentPitch*500;
    return freq;
  }
  start() {
    this.isPlaying = true;
    this.gainNode.gain.value = this.volume;
    console.log(this);
    //this.oscillatorNode.start();
  }
  stop() {
    this.isPlaying = false;
    //this.oscillatorNode.stop();
    this.gainNode.gain.value = 0;
  }
}
//bind mouse events to the model and draw stuff on canvas
class TouchPadView {
  constructor(model, element) {
    this.model = model;
    this.element = element;
    //see $kaossWidth & kaossHeight vars
    this.element.height = 210.567;
    this.element.width = 416.633;
    this.context = element.getContext('2d');
    this.circles = [];
    this.frameCount = 0;
  }
  onClick(event) {
    //nothing on click
    //console.log('(', event.offsetX + ',' + event.offsetY + ')');
  }

  onMouseUp(event) {
    this.model.stop();
  }
  onMouseMove(event) {
    //Store the touch coords for drawing
    this.currentTouch = {
      x: event.offsetX,
      y: event.offsetY
    };
    //transform for sound generation
    let pressed = this.convertCoordinates(event.offsetX, event.offsetY, this.element.width, this.element.height);
    this.model.setVolume(pressed.volume);
    this.model.setFrequency(pressed.pitch);
  }
  onMouseDown(event) {
    this.model.start();
  }
  drawCircle(event) {
    if(this.currentTouch){
      this.context.beginPath();
      this.context.fillStyle = 'white';
      this.context.arc(
        this.currentTouch.x,
        this.currentTouch.y,
        3,
        0,
        2 * Math.PI
      );
      this.context.closePath();
      this.context.fill();
    }
  }
  drawCross() {
      if (this.currentTouch) {
        this.context.beginPath();
        this.context.strokeStyle = 'rgba(255,255,255,0.5)';
        //vertical line
        this.context.moveTo(this.currentTouch.x, 0);
        this.context.lineTo(this.currentTouch.x, this.element.height);
        //horizontal line
        this.context.moveTo(0, this.currentTouch.y);
        this.context.lineTo(this.element.width, this.currentTouch.y);
        
        this.context.closePath();
        this.context.stroke();
      }
    }
  drawCircles() {
    this.circles.forEach((circle)=>{
      //this.context.clearRect(0, 0, this.element.width, this.element.height);
      this.context.beginPath();
      this.context.strokeStyle = `rgba(255,255,255,${circle.a})`;
      this.context.arc(
        circle.x,
        circle.y,
        circle.r,
        0,
        2 * Math.PI
      );
      this.context.closePath();
      this.context.stroke();
    });
  }
  growCircles(){
    //if we are playing sound add a circle every x frames.
    if(this.model.isPlaying && this.frameCount % 5 ==0){
      this.circles.push({
        x:this.currentTouch.x,
        y:this.currentTouch.y,
        //starting radius
        r:5,
        a:1
      });
    }
    this.circles.forEach((circle)=>{
      circle.r += 0.5;
      circle.a -= 0.005;
      //remove circle if it is too big or transparent.
      if (circle.r > this.element.height || circle.a <=0){
        this.circles.splice(this.circles.indexOf(circle),1);
      }
    });
    
  }
    /**
     * Convert coordinates from pixels touched on the canvas to values between -1 and 1. 
     */
  convertCoordinates(x, y, w, h) {
    return {
      pitch: x / w * 2 - 1,
      volume: y / h * 2 /1
    };
  }
  animate() {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
    this.context.globalCompositeOperation = 'lighten';
    this.drawCircle();
    this.drawCircles();
    this.growCircles();
    this.drawCross();
    this.frameCount++;
    window.requestAnimationFrame((t) => {
      this.animate()
    });
  }
}
//overrides the display of select with prettier buttons. experimental, should be in  jade when done.
class SelectComponent{
  constructor(select){
    this.element = select;
   //add btn group to label
    this.element.parentElement.appendChild(this.render());
  }
  renderValue(option){
    let a = document.createElement('a');
    a.className = `btn ${(this.element.value == option.value) ?  'selected':''}`;
    a.setAttribute('onclick',`javascript:document.forms[0]['${this.element.id}'].value =  '${option.value}'`);
    a.appendChild( document.createTextNode(option.value));
  return a;
  }
  render(){
    let {id} = this.element;
    
    let bar = document.createElement('div');
                              bar.className="btn-group";
    for(let opt of this.element.children){
    bar.appendChild(this.renderValue(opt));
      }
    
    return bar;
  }
}
//manage form change event.
class OptionsView {
  constructor(model, element) {
    this.model = model;
    this.element = element;
    this.initialize(element);
  }
  initialize(element){
    element.addEventListener('change',(event)=>{
      let value=event.target.value;
      switch(event.target.id){
        case 'type':
        this.model.setType(event.target.value);
        break;
        case 'tonic': this.model.setTonic(event.target.value);break;
        case 'octave': this.model.setOctave(event.target.value);break;
        case 'mode': this.model.setMode(event.target.value);break;
      }
      console.log(event);
      console.log(this.model);
    });
    for(let option of element.getElementsByTagName('select')){new SelectComponent(option);}
  }
}
//runtime 
let model, touchpad, options;

window.addEventListener(
  'DOMContentLoaded',
  (event) => {
    console.log('domLoaded');
    const $canvas = document.getElementById('pad'),
      $options = document.getElementById('options');
      model = new KaossModel(),
      touchpad = new TouchPadView(model, $canvas),
      options = new OptionsView(model, $options);
/*
    $canvas.addEventListener('mousedown', (e) => {
      touchpad.onClick(e);
    });*/
    $canvas.addEventListener('mousedown', (e) => {
      touchpad.onMouseDown(e);
    });
    $canvas.addEventListener('mousemove', (e) => {
      touchpad.onMouseMove(e);
    });
    $canvas.addEventListener('mouseup', (e) => {
      touchpad.onMouseUp(e);
    });
    touchpad.animate();
  }
);
window.model = model;