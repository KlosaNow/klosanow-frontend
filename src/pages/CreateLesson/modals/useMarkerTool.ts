import { useEffect, useRef } from "react";

export const useMarkerTool = (
  enabled: boolean,
  containerId: string,
  hoverToErase = false
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hoverToEraseRef = useRef(hoverToErase);

  useEffect(() => {
    hoverToEraseRef.current = hoverToErase;
  }, [hoverToErase]);

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
      canvas.style.border = "none";
      canvas.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
      canvas.style.width = "100%";
      canvas.style.height = `${container.scrollHeight}px`;

      canvas.width = container.clientWidth;
      canvas.height = container.scrollHeight;

      container.appendChild(canvas);
    } else {
      canvas.style.display = "block";
      canvas.width = container.clientWidth;
      canvas.height = container.scrollHeight;
      canvas.style.height = `${container.scrollHeight}px`;
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
      const rect = container.getBoundingClientRect();
      return {
        x: e.clientX - rect.left + container.scrollLeft,
        y: e.clientY - rect.top + container.scrollTop,
      };
    };

    const getTouchOffset = (e: TouchEvent) => {
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      return {
        x: touch.clientX - rect.left + container.scrollLeft,
        y: touch.clientY - rect.top + container.scrollTop,
      };
    };

    const startDrawing = (e: MouseEvent) => {
      drawing = true;
      if (hoverToEraseRef.current) {
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
      const { x, y } = getOffset(e);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const stopDrawing = () => {
      drawing = false;
      ctx.closePath();
    };

    const hoverErase = (e: MouseEvent) => {
      const { x, y } = getOffset(e);
      const radius = 40;
      ctx.clearRect(x - radius / 2, y - radius / 2, radius, radius);
    };

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      if (hoverToEraseRef.current) {
        hoverErase(e);
      } else {
        draw(e);
      }
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    // Touch support
    const startTouchDrawing = (e: TouchEvent) => {
      drawing = true;
      e.preventDefault();

      if (hoverToEraseRef.current) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 20;
      } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 3;
      }

      const { x, y } = getTouchOffset(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const drawTouch = (e: TouchEvent) => {
      if (!drawing) return;
      e.preventDefault();
      const { x, y } = getTouchOffset(e);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const stopTouchDrawing = (e: TouchEvent) => {
      drawing = false;
      e.preventDefault();
      ctx.closePath();
    };

    // Touch events
    canvas.addEventListener("touchstart", startTouchDrawing, {
      passive: false,
    });
    canvas.addEventListener("touchmove", drawTouch, { passive: false });
    canvas.addEventListener("touchend", stopTouchDrawing);
    canvas.addEventListener("touchcancel", stopTouchDrawing);

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.scrollHeight;
      canvas.style.height = `${container.scrollHeight}px`;
    };

    window.addEventListener("resize", resizeCanvas);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);

      canvas.removeEventListener("touchstart", startTouchDrawing);
      canvas.removeEventListener("touchmove", drawTouch);
      canvas.removeEventListener("touchend", stopTouchDrawing);
      canvas.removeEventListener("touchcancel", stopTouchDrawing);

      window.removeEventListener("resize", resizeCanvas);
    };
  }, [enabled, containerId]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return { clearCanvas };
};
