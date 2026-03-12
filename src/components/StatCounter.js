"use client";

import { useEffect, useRef, useState } from "react";

function formatValue(value) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

export default function StatCounter({ value, prefix = "", suffix = "", label, duration = 1400 }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      return undefined;
    }

    let startTime;
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [duration, hasStarted, value]);

  return (
    <div ref={ref} className="glass reveal rounded-3xl p-5">
      <p className="display-font text-3xl font-semibold text-white">
        {prefix}
        {formatValue(displayValue)}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-slate-300">{label}</p>
    </div>
  );
}
