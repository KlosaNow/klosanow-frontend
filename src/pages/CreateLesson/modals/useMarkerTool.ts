import { useEffect, useRef } from "react";

export const useMarkerTool = (
  enabled: boolean,
  containerId: string,
  hoverToErase = false
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let canvas = container.querySelector("#marker-layer") as HTMLCanvasElement;

    if (!enabled) {
      if (canvas) canvas.style.display = "none";
      return;
    }

    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "marker-layer";
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.zIndex = "999";
      canvas.style.pointerEvents = "auto";
      canvas.style.display = "block";
      canvas.style.border = "4px solid green";
      canvas.style.backgroundColor = "white"; // transparent white

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      container.appendChild(canvas);
    } else {
      canvas.style.display = "block";
    }

    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    let drawing = false;

    const getOffset = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const startDrawing = (e: MouseEvent) => {
      drawing = true;
      console.log("Start drawing");

      if (hoverToErase) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 20;
      } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 3;
      }

      const { x, y } = getOffset(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const draw = (e: MouseEvent) => {
      if (!drawing) return;
      console.log("Drawing...");

      const { x, y } = getOffset(e);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const stopDrawing = () => {
      drawing = false;
      console.log("Stop drawing");
      ctx.closePath();
    };

    const hoverErase = (e: MouseEvent) => {
      if (!hoverToErase) return;
      const { x, y } = getOffset(e);
      const radius = 30;
      ctx.clearRect(x - radius / 2, y - radius / 2, radius, radius);
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    if (hoverToErase) {
      canvas.addEventListener("mousemove", hoverErase);
    }

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
      if (hoverToErase) {
        canvas.removeEventListener("mousemove", hoverErase);
      }
    };
  }, [enabled, containerId, hoverToErase]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return { clearCanvas };
};
