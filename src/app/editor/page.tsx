"use client";

import * as fabric from "fabric";
import { useCallback } from "react";
import Canvas from "@/components/Canvas";

const Page = () => {
  const onLoad = useCallback(async (canvas: fabric.Canvas) => {
    canvas.setDimensions({
      width: 500,
      height: 500,
    });
    const textValue = "fabric.js sandbox";
    const text = new fabric.Textbox(textValue, {
      originX: "center",
      top: 20,
      textAlign: "center",
      styles: fabric.util.stylesFromArray(
        [
          {
            style: {
              fontWeight: "bold",
              fontSize: 64,
            },
            start: 0,
            end: 9,
          },
        ],
        textValue
      ),
    });
    canvas.add(text);
    canvas.centerObjectH(text);
  }, []);

  return (
    <div className="border-gray-800 border-2 w-[500px] mx-auto mt-52">
      <Canvas onLoad={onLoad} />
    </div>
  );
};

export default Page;
