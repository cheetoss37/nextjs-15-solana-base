"use client";

import { useEffect } from "react";

import { cn } from "@/utils/common.utils";

import useAppStore from "@/stores/useAppStore";

const SplashScreen = () => {
  const { isShowSplash, setIsShowSplash } = useAppStore();

  useEffect(() => {
    if (!isShowSplash) return;

    const toggleTimeout = setTimeout(() => setIsShowSplash(false), 2000);

    return () => clearTimeout(toggleTimeout);
  }, [isShowSplash, setIsShowSplash]);

  return (
    <>
      {isShowSplash && (
        <div
          className={cn(
            "fixed z-70",
            "center-root",
            "bg-black/80",
            "h-screen w-screen",
            "top-0 right-0 bottom-0 left-0"
          )}
        >
          <div
            className={cn(
              "bg-success",
              "h-0.5 w-1/2",
              "absolute top-0",
              "animate-top-sliding"
            )}
          />
        </div>
      )}
    </>
  );
};

export default SplashScreen;
