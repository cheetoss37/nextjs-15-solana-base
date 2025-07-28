import { cn } from "@/utils/common.utils";
import { Item, DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";

const DropdownItem: React.FC<DropdownMenuItemProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <Item
      className={cn(
        "p-4",
        "cursor-pointer",
        "first:border-t-transparent",
        "border-t-neutral7 border-t",
        "focus-visible:outline-none",
        "text-neutral1 font-semibold",
        "hover:bg-characterBackground3",
        "first:rounded-t-lg last:rounded-b-lg",
        className
      )}
      {...otherProps}
    >
      {children}
    </Item>
  );
};

export default DropdownItem;
