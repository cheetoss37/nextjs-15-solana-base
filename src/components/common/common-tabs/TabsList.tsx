import { List, TabsListProps } from "@radix-ui/react-tabs";
import { cn } from "@/utils/common.utils";

const TabsList: React.FC<TabsListProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <List className={cn("flex", className)} {...otherProps}>
      {children}
    </List>
  );
};

export default TabsList;
