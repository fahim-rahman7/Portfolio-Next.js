"use client";
import { useEffect, useRef } from "react";

export default function FallingStarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle window resizing
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Check if the screen is a mobile device to reduce particle density
    const isMobile = width < 768;

    // 1. Falling math and coding signs
    const symbols = [
      "()", "{}", "0", "1", "+", "[]", "</>", "=", "||", "?", "=>", "&&", "!=", "//","*"
    ];
    const fallingParticles = [];
    const fallingCount = isMobile ? 40 : 110; // 👈 Fewer particles on mobile

    for (let i = 0; i < fallingCount; i++) {
      const initialSpeed = Math.random() * 1 + 0.8;
      fallingParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        fontSize: Math.floor(Math.random() * 14) + 10,
        speedY: initialSpeed,
        originalSpeedY: initialSpeed, // Store initial speed for reset
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.7 + 0.2,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        isSlowed: false, // Track if it has slowed down
      });
    }

    // 2. Floating ambient shapes (stars, diamonds, pentagons, squares - do NOT fall)
    const floatingShapeTypes = ["star", "diamond", "pentagon", "square"];
    const floatingParticles = [];
    const floatingCount = isMobile ? 25 : 80; // 👈 Fewer shapes on mobile

    for (let i = 0; i < floatingCount; i++) {
      floatingParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.6 + 0.2,
        shape: floatingShapeTypes[Math.floor(Math.random() * floatingShapeTypes.length)],
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & Update Falling Symbols
      fallingParticles.forEach((p) => {
        // Slow down speed by a bit once past halfway down the screen
        if (p.y >= height / 2 && !p.isSlowed) {
          p.speedY *= 0.6; // Reduce speed factor
          p.isSlowed = true;
        }

        p.y += p.speedY;
        p.x += p.speedX;

        p.opacity += p.twinkleSpeed * p.twinkleDir;
        if (p.opacity > 0.8 || p.opacity < 0.2) {
          p.twinkleDir *= -1;
        }

        // Reset particle to top if it falls past the screen
        if (p.y > height) {
          p.y = -20;
          p.x = Math.random() * width;
          p.speedY = p.originalSpeedY; // Reset to original top speed
          p.isSlowed = false;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#c084fc";
        ctx.font = `${p.fontSize}px monospace`;
        ctx.fillText(p.symbol, p.x, p.y);
        ctx.restore();
      });

      // Render & Update Floating Ambient Shapes (Non-falling)
      floatingParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        p.opacity += p.twinkleSpeed * p.twinkleDir;
        if (p.opacity > 0.8 || p.opacity < 0.2) {
          p.twinkleDir *= -1;
        }

        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;
        if (p.y > height + 10) p.y = -10;
        if (p.y < -10) p.y = height + 10;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#c084fc";

        if (p.shape === "star") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "diamond") {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.size * 1.5);
          ctx.lineTo(p.x + p.size, p.y);
          ctx.lineTo(p.x, p.y + p.size * 1.5);
          ctx.lineTo(p.x - p.size, p.y);
          ctx.closePath();
          ctx.fill();
        } else if (p.shape === "pentagon") {
          ctx.beginPath();
          for (let j = 0; j < 5; j++) {
            const angle = (j * 2 * Math.PI) / 5 - Math.PI / 2;
            const px = p.x + p.size * 1.2 * Math.cos(angle);
            const py = p.y + p.size * 1.2 * Math.sin(angle);
            if (j === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.fill();
        } else if (p.shape === "square") {
          ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}