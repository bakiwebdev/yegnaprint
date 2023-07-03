import useCanvas from "@/hooks/useCanvas";
import * as fabric from "fabric";
import React, { forwardRef, Ref } from "react";

interface CanvasProps {
  onLoad: (canvas: fabric.Canvas) => any;
  saveState?: boolean;
}

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ onLoad, saveState }: CanvasProps, ref: Ref<HTMLCanvasElement>) => {
    const [canvasRef, setCanvasElRef] = useCanvas(ref, onLoad, saveState);

    return <canvas ref={setCanvasElRef} />;
  }
);

Canvas.displayName = "Canvas";

export default Canvas;
