import { useEffect, useRef } from "react";
import { fibonacciSphere } from "../../../../utils/fibonacci-sphere";

interface Options {
  count: number;
  size: number;
  radius: number;
  isVisible: boolean;
}

export const useSphereAnimation = ({ count, size, radius, isVisible }: Options) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const rotX = useRef(0.3);
  const rotY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0.004);
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const entryProgress = useRef<number[]>([]);
  const entryStartPositions = useRef<{ x: number; y: number }[]>([]);
  const hasAnimated = useRef(false);
  const delays = useRef<number[]>([]);

  const points = fibonacciSphere(count);

  const randomEdgePosition = (s: number): { x: number; y: number } => {
    const edge = Math.floor(Math.random() * 4);
    const spread = () => Math.random() * s;
    switch (edge) {
      case 0: return { x: spread(), y: -80 };
      case 1: return { x: s + 80, y: spread() };
      case 2: return { x: spread(), y: s + 80 };
      default: return { x: -80, y: spread() };
    }
  };

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    entryProgress.current = Array.from({ length: count }, () => 0);
    entryStartPositions.current = Array.from({ length: count }, () =>
      randomEdgePosition(size)
    );
    delays.current = Array.from({ length: count }, () => Math.random() * 50);
  }, [isVisible]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tags = Array.from(el.querySelectorAll<HTMLElement>(".tech-tag"));
    let frame = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const render = () => {
      frame++;
      const cosX = Math.cos(rotX.current), sinX = Math.sin(rotX.current);
      const cosY = Math.cos(rotY.current), sinY = Math.sin(rotY.current);

      const projected = tags.map((tag, i) => {
        const { x, y, z } = points[i];
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const targetX = size / 2 + x1 * radius;
        const targetY = size / 2 - y1 * radius;
        return { tag, targetX, targetY, z: z2, index: i };
      });

      projected
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach(({ tag }, i) => { tag.style.zIndex = String(i); });

      projected.forEach(({ tag, targetX, targetY, z, index }) => {
        const scale = ((z + 2) / 3) * 0.7 + 0.3;
        const opacity = Math.max(0.12, (z + 1.5) / 3);

        if (isVisible && entryProgress.current.length > 0) {
          const delayedFrame = frame - (delays.current[index] ?? 0);

          if (delayedFrame < 0) {
            const start = entryStartPositions.current[index];
            tag.style.transform = `translate(${start.x - 18}px, ${start.y - 22}px) scale(${scale * 0.6})`;
            tag.style.opacity = "0";
            return;
          }

          const t = Math.min(delayedFrame / 60, 1);
          const eased = easeOutCubic(t);
          entryProgress.current[index] = t;

          if (t < 1) {
            const start = entryStartPositions.current[index];
            const sx = start.x + (targetX - start.x) * eased;
            const sy = start.y + (targetY - start.y) * eased;
            tag.style.transform = `translate(${sx - 18}px, ${sy - 22}px) scale(${scale})`;
            tag.style.opacity = String(opacity * eased);
            return;
          }
        }

        tag.style.transform = `translate(${targetX - 18}px, ${targetY - 22}px) scale(${scale})`;
        tag.style.opacity = String(opacity);
      });

      if (!dragging.current) {
        rotY.current += velY.current;
        rotX.current += velX.current;
        velX.current *= 0.97;
        velY.current += (0.004 - velY.current) * 0.01;
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible]);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    velX.current = 0;
    velY.current = 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    velY.current = (e.clientX - lastMouse.current.x) * 0.005;
    velX.current = (e.clientY - lastMouse.current.y) * 0.005;
    rotY.current += velY.current;
    rotX.current += velX.current;
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => { dragging.current = false; };

  return { containerRef, onMouseDown, onMouseMove, onMouseUp };
};