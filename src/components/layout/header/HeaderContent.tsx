import { cn } from "@/utils/common.utils";

import AccountButton from "./account-button";

const DesktopHeader = () => {
  return (
    <div className={cn("space-between-root gap-x-2 md:gap-x-10")}>
      <AccountButton />
    </div>
  );
};

export default DesktopHeader;
