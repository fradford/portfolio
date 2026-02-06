"use client";

import { useRef, useEffect } from "react";

export default function Matrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    ctx.font = "16px monospace";

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to be used
    const letterList =
      "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤャユュヨョラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    let drops = new Array(Math.floor(columns)).fill(1);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = canvas.width / fontSize;
      drops = new Array(Math.floor(columns)).fill(1);
    });

    setInterval(() => {
      ctx.fillStyle = getComputedStyle(document.documentElement)
        .backgroundColor.replace(")", ", 0.25)")
        .replace("rgb", "rgba");
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        let text = letterList[Math.floor(Math.random() * letterList.length)];
        ctx.fillStyle = getComputedStyle(document.documentElement).color;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }, 33);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none opacity-50">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
