import { useEffect, useRef, useCallback } from 'react';

/**
 * Full-screen canvas with floating food-emoji orbs that drift upward
 * and gently repel from the user's cursor.
 */
export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const particles = useRef([]);
  const raf = useRef(null);

  /* ── Particle factory ─────────────────────────────────── */
  const emojis = ['🍔', '🍕', '🍣', '🌮', '🍩', '🧁', '🍜', '🥗', '🍗', '🍰', '🥑', '🍟'];

  const createParticle = useCallback((w, h) => {
    const size = 14 + Math.random() * 16;            // 14-30 px
    return {
      x: Math.random() * w,
      y: h + size + Math.random() * h * 0.3,         // start below viewport
      size,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(0.25 + Math.random() * 0.45),        // drift up
      opacity: 0.12 + Math.random() * 0.18,          // subtle
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.4,
    };
  }, []);

  /* ── Main loop ─────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Seed particles
    const count = Math.min(Math.floor(window.innerWidth / 45), 35);
    particles.current = Array.from({ length: count }, () =>
      createParticle(canvas.width, canvas.height)
    );
    // Spread initial Y across full height so they aren't all below
    particles.current.forEach((p) => {
      p.y = Math.random() * canvas.height;
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        /* Mouse repulsion */
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;
        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius * 2;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        /* Movement */
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        /* Wrap */
        if (p.y < -p.size) {
          p.y = canvas.height + p.size;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;

        /* Draw emoji */
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.emoji, 0, 0);
        ctx.restore();
      });

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
    };
  }, [createParticle]);

  /* ── Mouse tracking (throttled via pointermove) ────────── */
  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      mouse.current = { x: -1000, y: -1000 };
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerleave', handleLeave);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
