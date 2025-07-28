import {
  Trigger,
  DropdownMenuTriggerProps,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/common.utils";

const DropdownTrigger: React.FC<DropdownMenuTriggerProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Trigger
      className={cn(
        "focus-visible:outline-none",
        "text-neutral1 text-sm font-semibold",
        className
      )}
      {...otherProps}
    >
      {children}
    </Trigger>
  );
};

export default DropdownTrigger;
