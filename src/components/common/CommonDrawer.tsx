"use client";

import { ComponentPropsWithoutRef, FC, useEffect, useRef } from "react";

import { cn } from "@/utils/common.utils";
import { CollapseIcon } from "../icons";

const CommonDrawer: FC<CommonDrawerProps> = ({
  open,
  onClose,
  children,
  className,
  contentClassName,
  showCloseIcon = true,
  ...otherProps
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <>
      <div
        className={cn(
          "bg-transparent",
          "fixed top-0 z-60",
          open ? "left-0" : "-left-full",
          "h-screen w-screen overflow-hidden",
          !open && "transition-[left_.2s_cubic-bezier(0.820,0.085,0.395,0.895)]"
        )}
      >
        <div
          className={cn(
            "h-full w-full bg-black/80",
            open ? "left-0" : "-left-full",
            className
          )}
          {...otherProps}
        >
          <div
            ref={ref}
            className={cn(
              "relative",
              "h-full w-[236px]",
              "bg-dark-green-100",
              open ? "left-0" : "-left-full",
              "transition-[left_.2s_cubic-bezier(0.820,0.085,0.395,0.895)]",
              contentClassName
            )}
          >
            {children}
            {showCloseIcon && (
              <button
                onClick={onClose}
                className={cn(
                  "cursor-pointer",
                  "bg-dark-green-100 p-3",
                  "absolute top-20 left-[252px]",
                  "rounded-sm border border-white/10 text-white/70"
                )}
              >
                <CollapseIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonDrawer;

interface CommonDrawerProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: () => void;
  showCloseIcon?: boolean;

  contentClassName?: string;
}
