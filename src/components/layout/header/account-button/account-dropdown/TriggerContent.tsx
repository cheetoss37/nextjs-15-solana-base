"use client";

import { ComponentPropsWithoutRef, FC } from "react";

import { cn } from "@/utils/common.utils";
import { SolanaLogo } from "public/images";
import { useTranslations } from "next-intl";
import { ChevronIcon } from "@/components/icons";
import { formatNumber } from "@/utils/format.utils";

import Image from "next/image";
import useAppStore from "@/stores/useAppStore";

const TriggerContent: FC<TriggerContentProps> = ({
  isOpen,
  className,
  ...otherProps
}) => {
  const t = useTranslations("Common");

  const { balance } = useAppStore();

  return (
    <div
      className={cn("cursor-pointer", "flex items-center gap-x-2", className)}
      {...otherProps}
    >
      <div
        className={cn(
          "rounded-md",
          "relative p-2 md:px-3",
          "flex items-center gap-x-2",
          "bg-[linear-gradient(90deg,rgba(153,69,255,0.15)_0%,rgba(153,69,255,0.105)_100%)]"
        )}
      >
        <Image
          src={SolanaLogo}
          alt="Solana logo"
          className="rounded-full border border-white/30"
        />
        <div className="flex flex-col items-start">
          <span className="text-start text-xs text-white/50">
            {t("lBalance")}
          </span>
          <span className="text-sm font-bold">
            {formatNumber(balance, 4, 3)} SOL
          </span>
        </div>

        <ChevronIcon
          className={cn(
            "flex sm:hidden",
            "text-white/30 hover:text-white",
            "transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </div>

      <ChevronIcon
        className={cn(
          "hidden sm:flex",
          "text-white/30 hover:text-white",
          "transition-transform duration-300",
          isOpen && "rotate-180"
        )}
      />
    </div>
  );
};

export default TriggerContent;

interface TriggerContentProps extends ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
}
