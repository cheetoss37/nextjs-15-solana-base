"use client";

import { ComponentPropsWithoutRef, FC } from "react";

import { ChevronIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/common.utils";

const CommonPagination: FC<CommonPaginationProps> = ({
  isLoading,
  className,
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
  buttonClassName,
  ...otherProps
}) => {
  const t = useTranslations("Profile");

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={cn("flex items-center gap-x-3", className)} {...otherProps}>
      <div className="flex items-center space-x-2">
        <ArrowButton
          onClick={handlePrevious}
          className={buttonClassName}
          disabled={currentPage === 1 || isLoading}
        >
          <ChevronIcon className="h-4 w-4 rotate-90" />
        </ArrowButton>
        <ArrowButton
          onClick={handleNext}
          className={buttonClassName}
          disabled={currentPage === totalPages || isLoading}
        >
          <ChevronIcon className="h-4 w-4 -rotate-90" />
        </ArrowButton>
      </div>

      <p className="text-sm text-white/30">
        {t("fmOfTransactions", { value: `${startItem} - ${endItem}` })}
      </p>
    </div>
  );
};

export default CommonPagination;

const ArrowButton: FC<ComponentPropsWithoutRef<"button">> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={cn(
        "rounded-sm",
        "cursor-pointer",
        "bg-white/5 p-2",
        "text-white/30 hover:text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

interface CommonPaginationProps extends ComponentPropsWithoutRef<"div"> {
  totalItems: number;
  isLoading?: boolean;
  currentPage: number;
  itemsPerPage: number;
  buttonClassName?: string;
  onPageChange: (page: number) => void;
}
