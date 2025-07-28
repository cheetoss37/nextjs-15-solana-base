"use client";

import { ComponentPropsWithoutRef, FC, useEffect, useState } from "react";
import { formatNumber } from "@/utils/format.utils";
import { cn } from "@/utils/common.utils";

const IncreaseNumber: FC<IncreaseNumberProps> = ({
  start = 0,
  end = 0,
  onEnd,
  children,
  className,
  ...otherProps
}) => {
  const [currentNumber, setCurrentNumber] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentNumber(start);

    const startValue = start;
    const endValue = end;
    const duration = 1000;
    const intervalTime = 16;
    const totalSteps = duration / intervalTime;
    const increment = (endValue - startValue) / totalSteps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newValue = startValue + increment * currentStep;

      if (newValue >= endValue) {
        setCurrentNumber(endValue);
        clearInterval(interval);
        setIsAnimating(false);
        onEnd?.();
      } else {
        setCurrentNumber(newValue);
      }
    }, intervalTime);
  };

  useEffect(() => {
    if (end === 0 && start === 0) {
      setCurrentNumber(0);
    }

    if (end === start) {
      return;
    }

    startAnimation();
  }, [end, start]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <p
      className={cn(isAnimating && "animate-scale-up", className)}
      {...otherProps}
    >
      {formatNumber(currentNumber, 3, 3)}
      {children}
    </p>
  );
};

export default IncreaseNumber;

interface IncreaseNumberProps extends ComponentPropsWithoutRef<"p"> {
  start?: number;
  end?: number;
  onEnd?: () => void;
}
