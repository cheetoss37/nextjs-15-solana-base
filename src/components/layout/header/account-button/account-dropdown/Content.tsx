import { ComponentPropsWithoutRef, FC } from "react";

import { cn } from "@/utils/common.utils";
import { useTranslations } from "next-intl";
import { LogoutIcon } from "@/components/icons";

import useAuth from "@/hooks/auth-hooks/useAuth";

const Content: FC<ContentProps> = ({ onClose, className, ...otherProps }) => {
  const t = useTranslations("Common");
  const { handleLogout } = useAuth();

  const handleClickLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <div
      className={cn("w-57 p-4", "flex flex-col gap-y-4", className)}
      {...otherProps}
    >
      <button
        className="text-error-100 flex w-full cursor-pointer items-center gap-x-1 py-3 text-sm font-bold"
        onClick={handleClickLogout}
      >
        <LogoutIcon />
        <p>{t("lLogout")}</p>
      </button>
    </div>
  );
};

export default Content;

interface ContentProps extends ComponentPropsWithoutRef<"div"> {
  onClose: () => void;
}
