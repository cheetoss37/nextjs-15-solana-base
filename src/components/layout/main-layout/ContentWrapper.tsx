import { FC, PropsWithChildren } from "react";
import { cn } from "@/utils/common.utils";

const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={cn("relative z-40 w-full pt-27 pb-17 sm:pt-18 md:pb-0")}>
      <div className="px-2">{children}</div>
    </main>
  );
};

export default ContentWrapper;
