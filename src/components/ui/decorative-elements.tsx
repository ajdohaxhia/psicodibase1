"use client";

import { motion } from "framer-motion";

// Subtle organic shape for visual interest
export function OrganicShape({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "accent" | "muted";
}) {
  const colors = {
    default: "bg-accent/5",
    accent: "bg-accent/10",
    muted: "bg-muted/30",
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl ${colors[variant]} ${className}`}
      aria-hidden="true"
    />
  );
}

// Subtle dot pattern for backgrounds
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        opacity: 0.03,
      }}
      aria-hidden="true"
    />
  );
}

// Animated gradient background
export function GradientBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="absolute -inset-[10%] bg-gradient-to-br from-accent/5 via-transparent to-accent/3"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />
    </div>
  );
}

// Section divider - elegant wave
export function SectionDivider() {
  return (
    <div className="relative h-16 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute bottom-0 w-full h-16 text-secondary/50"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

// Floating elements for hero/background
export function FloatingElement({
  children,
  delay = 0,
  duration = 6,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
