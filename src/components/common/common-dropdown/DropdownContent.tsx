import {
  Content,
  DropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/common.utils";

const DropdownContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Content
      className={cn(
        "z-40",
        "mt-3",
        "rounded-lg",
        "bg-dark-green-100",
        "border border-white/20",
        className
      )}
      {...otherProps}
    >
      {children}
    </Content>
  );
};

export default DropdownContent;
