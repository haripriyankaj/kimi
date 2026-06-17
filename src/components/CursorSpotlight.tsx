import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const onMouseMove = (e: MouseEvent) => {
      spotlight.style.left = `${e.clientX - 200}px`;
      spotlight.style.top = `${e.clientY - 200}px`;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed z-50 hidden lg:block"
      style={{
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 62, 139, 0.15) 0%, transparent 70%)',
        transform: 'translate(0, 0)',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  );
}
