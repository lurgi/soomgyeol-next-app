import { useState, useCallback } from "react";

type FunnelStep<T extends string> = {
  step: T;
  setStep: (step: T) => void;
  isCurrentStep: (step: T) => boolean;
};

export function useFunnel<T extends string>(steps: T[], initialStep: T): FunnelStep<T> {
  const [currentStep, setCurrentStep] = useState<T>(initialStep);

  const setStep = useCallback(
    (step: T) => {
      if (steps.includes(step)) {
        setCurrentStep(step);
      } else {
        console.warn(`Step "${step}" is not part of defined funnel steps.`);
      }
    },
    [steps]
  );

  const isCurrentStep = useCallback((step: T) => currentStep === step, [currentStep]);

  return { step: currentStep, setStep, isCurrentStep };
}
