"use client";

import { useRef, useEffect } from "react";

export default function Matrix({
  fontSize = 24,
  characters = "0123456789[]@#$%^&*()+-=~",
}: {
  fontSize?: number;
  characters?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const charList = characters.split("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    // Characters to be used
    let columns = canvas.width / fontSize;
    let colHeights = new Array(Math.floor(columns)).fill(
      canvas.height / fontSize + fontSize,
    );

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      columns = canvas.width / fontSize;

      colHeights = new Array(Math.floor(columns)).fill(
        canvas.height / fontSize + fontSize,
      );
    });

    setInterval(() => {
      for (let i = 0; i < colHeights.length; i++) {
        // clear the character at the current position
        ctx.fillStyle = getComputedStyle(
          document.documentElement,
        ).backgroundColor;
        ctx.fillRect(
          i * fontSize,
          colHeights[i] * fontSize,
          fontSize,
          fontSize,
        );

        // draw a new character at the current position
        let text = charList[Math.floor(Math.random() * charList.length)];
        ctx.fillStyle = getComputedStyle(document.documentElement).color;
        ctx.fillText(text, i * fontSize, colHeights[i] * fontSize);

        // delete characters above a certain height randomly
        ctx.fillStyle = getComputedStyle(
          document.documentElement,
        ).backgroundColor;
        ctx.fillRect(
          i * fontSize,
          (colHeights[i] - 20) * fontSize,
          fontSize,
          fontSize,
        );

        colHeights[i]++;

        if (colHeights[i] * fontSize > canvas.height && Math.random() > 0.95) {
          colHeights[i] = 0;
        }
      }
    }, 33);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none opacity-30">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
