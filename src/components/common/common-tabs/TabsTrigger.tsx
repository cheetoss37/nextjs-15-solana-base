import { Trigger, TabsTriggerProps } from "@radix-ui/react-tabs";
import { cn } from "@/utils/common.utils";

const TabsTrigger: React.FC<TabsTriggerProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Trigger
      className={cn("px-2 py-1", "center-root", "cursor-pointer", className)}
      {...otherProps}
    >
      {children}
    </Trigger>
  );
};

export default TabsTrigger;
