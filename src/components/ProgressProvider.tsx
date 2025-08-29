"use client";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type ProgressContextValue = {
  progress: number; // 0..100
  stepIndex: number; // 0..4
  totalSteps: number; // 5
  goNext: () => void;
  reset: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export const useProgress = () => {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
};

const TOTAL_STEPS = 6; // Home, About, Services, Products, Contact, Finale

export default function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const goNext = useCallback(() => {
    setStepIndex((i) => (i + 1) % TOTAL_STEPS);
    setProgress((p) => {
      const next = p + 20;
      return next > 100 ? 0 : Math.min(100, next);
    });
  }, []);

  const reset = useCallback(() => {
    setStepIndex(0);
    setProgress(0);
  }, []);

  const value = useMemo(() => ({ progress, stepIndex, totalSteps: TOTAL_STEPS, goNext, reset }), [progress, stepIndex, goNext, reset]);
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}


