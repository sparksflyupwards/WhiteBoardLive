import React, { FC } from "react";
import { useEffect, useState } from "react";

interface Props {
  width: string;
  height: string;
  strokes: any;
  setStrokes: React.Dispatch<
    React.SetStateAction<
      {
        xPos: number;
        yPos: number;
      }[]
    >
  >;
}

const Canvas: FC<Props> = ({
  width,
  height,
  strokes,
  setStrokes,
  ...props
}) => {
  let [isDrawing, setIsDrawing] = useState<Boolean>(true);

  const [point, setPoint] = useState<{ x: number; y: number }>({
    x: -1,
    y: -1,
  });

  const handleDrawing = () => {
    const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null;
    if (canvas != null) {
      ctx = canvas.getContext("2d");
    }

    // When true, moving the mouse draws on the canvas
    let isDrawing = false;
    let x = 0;
    let y = 0;

    // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

    // Add the event listeners for mousedown, mousemove, and mouseup
    canvas.addEventListener("mousedown", (e) => {
      x = e.offsetX;
      y = e.offsetY;
      isDrawing = true;
      setPoint({x:x, y:y})
      setIsDrawing(isDrawing)
    });

    canvas.addEventListener("mousemove", (e) => {
      if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
       setPoint({x:x, y:y})
      }
    });

    window.addEventListener("mouseup", (e) => {
      if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;

        isDrawing = false;

        setPoint({x:x, y:y})
        setIsDrawing(isDrawing)
      }
    });

    function drawLine(
      context: CanvasRenderingContext2D | null,
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) {
      if (context) {
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
      }
    }
  };
  useEffect(() => {
      handleDrawing();
  }, []);

  useEffect(() => {
    console.log(point);
  }, [point]);
  return (
    <div>
      <canvas
        className="canvas"
        id="myCanvas"
        width={width}
        height={height}
      ></canvas>
    </div>
  );
};

export default Canvas;
