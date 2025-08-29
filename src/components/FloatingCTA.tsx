"use client";
import React from "react";
import { useProgress } from "@/components/ProgressProvider";

export default function FloatingCTA() {
  const { stepIndex, goNext } = useProgress();
  if (stepIndex === 0) return null;
  const labels = ["", "Next: Services", "Next: Products", "Next: Contact", "Next: Finale", "Restart Journey"] as const;
  return (
    <button className="floating-cta" data-cursor="magnet" onClick={goNext}>{labels[stepIndex] || "Continue"}</button>
  );
}


