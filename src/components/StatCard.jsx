import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StatCard({ value, suffix = "", label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value);
    if (isNaN(num)) { setCount(value); return; }
    const duration = 1500;
    const steps = 40;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 lg:p-8"
    >
      {Icon && <Icon className="w-6 h-6 text-voltage mx-auto mb-3" />}
      <div className="font-heading text-4xl lg:text-5xl text-white mb-2">
        {count}{suffix}
      </div>
      <div className="font-mono text-xs tracking-widest uppercase text-silver">{label}</div>
    </motion.div>
  );
}