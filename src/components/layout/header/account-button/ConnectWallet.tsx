"use client";

import { ComponentPropsWithoutRef, FC } from "react";

import { cn } from "@/utils/common.utils";
import { useTranslations } from "next-intl";
import { CommonButton } from "@/components/common";

import ConnectWalletDialog from "./ConnectWalletDialog";
import useAppStore from "@/stores/useAppStore";

import "./custom-dialog.css";

const ConnectWallet: FC<ComponentPropsWithoutRef<"button">> = ({
  className,
  ...otherProps
}) => {
  const { isOpenConnectDialog, setIsOpenConnectDialog } = useAppStore();

  const t = useTranslations("Common");

  return (
    <>
      <CommonButton
        variant="linear-yellow"
        className={cn(
          "center-root",
          "p-2 md:px-7 md:py-4",
          "text-sm font-bold md:text-base",
          "rounded-xl border border-white/40",
          "text-shadow-[0px_1px_0px_0px_#00000080]",
          className
        )}
        onClick={() => setIsOpenConnectDialog(true)}
        {...otherProps}
      >
        {t("lConnectWallet")}
      </CommonButton>

      <ConnectWalletDialog
        open={isOpenConnectDialog}
        onClose={() => setIsOpenConnectDialog(false)}
      />
    </>
  );
};

export default ConnectWallet;
