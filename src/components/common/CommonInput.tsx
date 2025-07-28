import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { cn } from "@/utils/common.utils";

const CommonInput: FC<CommonInputProps> = ({
  disabled,
  className,
  endAdornment,
  startAdornment,
  wrapperClassName,
  ...otherProps
}) => {
  return (
    <div
      className={cn(
        "bg-white/4",
        "w-full px-4 py-3",
        "flex items-center gap-x-1",
        "rounded-[10px] border-[2px] border-white/5",
        wrapperClassName
      )}
    >
      {startAdornment}
      <input
        className={cn(
          "w-full",
          "placeholder:text-white/40",
          "border-none focus-visible:outline-none",
          disabled && "text-white/40",
          className
        )}
        disabled={disabled}
        {...otherProps}
      />
      {endAdornment}
    </div>
  );
};

export default CommonInput;

interface CommonInputProps extends ComponentPropsWithoutRef<"input"> {
  wrapperClassName?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}
