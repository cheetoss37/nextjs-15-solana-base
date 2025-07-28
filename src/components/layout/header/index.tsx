import { cn } from "@/utils/common.utils";
import { ROOT } from "@/constants/path.const";

import Link from "next/link";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <div
      className={cn(
        "h-27 sm:h-18",
        "space-between-root",
        "flex flex-col gap-y-2",
        "bg-background w-screen",
        "fixed top-0 left-0 z-60"
      )}
    >
      <div
        className={cn(
          "px-2",
          "space-between-root",
          "h-16 w-full sm:h-full",
          "border-b border-white/10"
        )}
      >
        <Link href={ROOT} className="center-root h-full">
          Logo
        </Link>
        <HeaderContent />
      </div>
    </div>
  );
};

export default Header;
