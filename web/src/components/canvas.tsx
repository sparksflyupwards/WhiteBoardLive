import React, { FC } from "react";
import {useEffect, useState} from "react";



interface Props {
    width: string,
    height: string,
    strokes: any,
    setStrokes: React.Dispatch<React.SetStateAction<{
        xPos: number;
        yPos: number;
    }[]>>
}

const Canvas: FC<Props> = ({width, height, ...props})=>{

    useEffect(()=>{



        const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        if (canvas != null) {
            const ctx = canvas.getContext("2d");
        }
       
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);


    }, [])
    return(
        <div >
            <canvas className="canvas" id="myCanvas" width={width} height={height}>

            </canvas>
        </div>
    )
}

export default Canvas;

