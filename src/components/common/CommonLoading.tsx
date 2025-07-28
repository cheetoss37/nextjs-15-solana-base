import React, { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/utils/common.utils";

const CommonLoading: FC<ComponentPropsWithoutRef<"span">> = ({
  className,
  ...otherProps
}) => {
  return (
    <span
      className={cn(
        "h-5 w-5",
        "animate-rotate",
        "box-border inline-block",
        "rounded-full border-[2px] border-white/50 border-b-white",
        className
      )}
      {...otherProps}
    ></span>
  );
};

export default CommonLoading;
