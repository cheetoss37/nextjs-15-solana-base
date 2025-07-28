import { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/utils/common.utils";

const Skeleton: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...otherProps
}) => {
  return (
    <div
      className={cn(
        "animate-pulse",
        "bg-dark-green-200",
        "rounded-xl border border-white/10",
        className
      )}
      {...otherProps}
    />
  );
};

export default Skeleton;
