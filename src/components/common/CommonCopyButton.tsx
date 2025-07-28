"use client";

import { ComponentPropsWithoutRef, FC, useState } from "react";

import { CopyIcon } from "../icons";
import { cn } from "@/utils/common.utils";
import { useTranslations } from "next-intl";

const CommonCopyButton: FC<CommonCopyButtonProps> = ({
  copyValue,
  className,
  callbackFn,
  iconClassName,
  copyClassName,
  ...otherProps
}) => {
  const t = useTranslations("Common");

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    if (!copyValue) return;

    navigator.clipboard.writeText(copyValue);
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);

    if (callbackFn instanceof Function) {
      callbackFn();
    }
  };

  return (
    <button
      className={cn("relative", "cursor-pointer", className)}
      onClick={handleCopy}
      {...otherProps}
    >
      <CopyIcon className={iconClassName} />
      {copySuccess && (
        <span
          className={cn(
            "text-[10px]",
            "absolute -right-10 -bottom-5",
            "rounded-sm bg-[#343434] p-1",
            copyClassName
          )}
        >
          {t("lCopied")}
        </span>
      )}
    </button>
  );
};

export default CommonCopyButton;

interface CommonCopyButtonProps extends ComponentPropsWithoutRef<"button"> {
  copyValue: string;
  iconClassName?: string;
  copyClassName?: string;
  callbackFn?: () => void;
}
