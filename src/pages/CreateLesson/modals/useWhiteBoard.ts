import { useEffect, useRef } from "react";

export const useWhiteBoard = (enabled: boolean) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.getElementById("whiteboard") as HTMLCanvasElement;
    if (!canvas || !enabled) return;

    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    let drawing = false;

    const startDrawing = (e: MouseEvent) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    };

    const draw = (e: MouseEvent) => {
      if (!drawing) return;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    const stopDrawing = () => {
      drawing = false;
      ctx.closePath();
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
    };
  }, [enabled]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return { clearCanvas };
};
