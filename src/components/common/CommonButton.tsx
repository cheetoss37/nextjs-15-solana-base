import { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/utils/common.utils";

const CommonButton: FC<CommonButtonProps> = ({
  disabled,
  children,
  className,
  variant = "grey",
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "rounded-lg",
        "px-3 py-1.5",
        "hover:opacity-90",
        "center-root gap-x-1",
        "focus-visible:outline-none",
        "text-sm font-bold text-white",
        disabled ? "pointer-events-none" : "cursor-pointer",
        variant === "white" && "bg-white text-black",
        variant === "grey" && "bg-white/10 text-white",
        variant === "error" && "bg-error-200 text-error-100",
        variant === "warning" && "bg-warning-100/7 text-warning-100",
        variant === "linear-yellow" &&
          "border border-white/40 bg-[linear-gradient(97.49deg,#AD9116_7.64%,#C27C00_74.77%)]",
        variant === "linear-green" &&
          "border border-white/20 bg-[linear-gradient(95.03deg,#B7CA49_7.94%,#508031_83.02%)]",
        variant === "outlined" && "border border-white bg-transparent",
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CommonButton;

export interface CommonButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?:
    | "linear-yellow"
    | "linear-green"
    | "grey"
    | "warning"
    | "error"
    | "white"
    | "outlined";
}
