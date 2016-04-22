
window.AudioContext = window.AudioContext || window.webkitAudioContext;
if (typeof AudioContext === "undefined")
    alert('audio api not supported');

var Kaoss = {
    context: new AudioContext(),
    bpm: 120,
    //current selected octave index
    octave: 2,
    //octave correspondance
    //see https://en.wikipedia.org/wiki/Audio_frequency
    octaves: [
        8.18 //C-1 :Lowest organ note 	N/A (fundamental frequency inaudible)
        , 16.35 //C0 : Lowest note for tuba, large pipe organs, Bösendorfer Imperial Grand Piano 	N/A (fundamental frequency inaudible)
        , 32.70 //C1 : Lowest C on a standard 88-key piano.
        , 65.41 //C2 : Lowest note for cello
        , 130.81 //C3 : Lowest note for viola, mandola
        , 261.63 //C4 : Middle C
        , 523.25 //C5 : C in middle of treble clef
        , 1046.50 //C6 : Approximately the highest note reproducible by the average female human voice.
        , 2093 //C7 : Highest note for a flute.
        , 4186 //C8 : Highest note on a standard 88-key piano.
        , 8372 //C9 :
        , 16744 //C10 : Approximately the tone that a typical CRT television emits while running.
    ],
    //Notes in an octave
    notes: {
        C: 0,
        D: 1,
        E: 2,
        F: 3,
        G: 4,
        A: 5,
        B: 6
    },
    scales: {
        MAJOR: 0,
        MINOR: 1,
        PENTATONIC: 2,
        IONIC: 3,
        DORIAN: 4
    },
    //TODO : custom PeriodicWave
    bank: {
        triangle: function() {

        },
        square: function() {

        },
        sine: function() {

        }
    },
    loop: false,
    onClick: function(event) {
        console.log('(', event.offsetX + ',' + event.offsetY + ')');
    },
    drawCircle: {

    },
    setScale: function() {

    },
    playSound: function() {

    },
    stopSound:function(){

    },
    /**
     * Convert coordinates from pixels touched on the canvas to values between -1 and 1.
     */
    convertCoordinates(x,y,w,h){

    },
    requestAnimationFrame: function() {
        window.requestAnimationFrame(Kaoss.requestAnimationFrame);
    },
    documentLoaded: function(event) {

        console.log('domLoaded');
        var canvas = document.getElementById('pad');
        canvas.addEventListener('mousedown', Kaoss.onClick);
        Kaoss.drawingContext = canvas.getContext('2d');
    },
    initialize: function() {
        console.log('init KAOSS');
        window.addEventListener('DOMContentLoaded', this.documentLoaded);
    }
};

Kaoss.initialize();