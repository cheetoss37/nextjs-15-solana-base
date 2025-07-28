import { Root, TabsProps } from "@radix-ui/react-tabs";
import { cn } from "@/utils/common.utils";

const TabsRoot: React.FC<TabsProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Root className={cn("flex flex-col", className)} {...otherProps}>
      {children}
    </Root>
  );
};

export default TabsRoot;
