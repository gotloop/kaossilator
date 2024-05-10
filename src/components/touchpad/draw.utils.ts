import { Position, Size } from "@gotloop/kaossillator/core/state";
interface Circle {
  x: number;
  y: number;
  r: number;
  a: number;
}

const circles: Circle[] = [];

export function drawCircle(
  context: CanvasRenderingContext2D,
  position: Position,
) {
  context.beginPath();
  context.fillStyle = "white";
  context.arc(position.x, position.y, 3, 0, 2 * Math.PI);
  context.closePath();
  context.fill();
}
export function drawCross(
  context: CanvasRenderingContext2D,
  currentTouch: Position,
  element: HTMLCanvasElement,
) {
  context.beginPath();
  context.strokeStyle = "rgba(255,255,255,0.5)";
  //vertical line
  context.moveTo(currentTouch.x, 0);
  context.lineTo(currentTouch.x, element.height);
  //horizontal line
  context.moveTo(0, currentTouch.y);
  context.lineTo(element.width, currentTouch.y);

  context.closePath();
  context.stroke();
}

export function drawCircles(context: CanvasRenderingContext2D) {
  circles.forEach((circle) => {
    //context.clearRect(0, 0, element.width, element.height);
    context.beginPath();
    context.strokeStyle = `rgba(255,255,255,${circle.a})`;
    context.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
  });
}
export function growCircles(
  position: Position,
  size: Size,
  frameCount: number,
) {
  //if we are playing sound add a circle every x frames.
  if (frameCount % 5 === 0) {
    circles.push({
      x: position.x,
      y: position.y,
      //starting radius
      r: 5,
      a: 1,
    });
  }
  circles.forEach((circle) => {
    circle.r += 0.5;
    circle.a -= 0.005;
    //remove circle if it is too big or transparent.
    if (circle.r > size.height || circle.a <= 0) {
      circles.splice(circles.indexOf(circle), 1);
    }
  });
}
