import { Content, TabsContentProps } from "@radix-ui/react-tabs";
import { cn } from "@/utils/common.utils";

const TabsContent: React.FC<TabsContentProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Content className={cn("", className)} {...otherProps}>
      {children}
    </Content>
  );
};

export default TabsContent;
