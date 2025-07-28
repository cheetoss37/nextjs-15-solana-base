"use client";

import { cn } from "@/utils/common.utils";
import { CloseIcon } from "@/components/icons";
import { Root, Portal, Overlay, Title, Content } from "@radix-ui/react-dialog";

const CommonDialog: React.FC<CommonDialogProps> = ({
  isOpen,
  onClose,
  children,
  dialogTitle,
  secondOverlay,

  titleClassName,
  overlayClassName,
  contentClassName,
  closeIconClassName,
  wrapperTitleClassName,

  isShowIconClose = true,
  isPreventCloseOutside = false,
}) => {
  return (
    <Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Overlay
          className={cn(
            "z-60",
            "fixed top-0 right-0 bottom-0 left-0",
            "place-items-center overflow-y-auto bg-black/80",
            overlayClassName
          )}
        />
        <Title className="hidden" />
        {secondOverlay}
        <Content
          onInteractOutside={e => {
            if (isPreventCloseOutside) {
              e.preventDefault();
            }
          }}
          className={cn(
            "animate-pop-up",
            "fixed z-70 p-4",

            "w-full sm:w-[450px]",
            "max-h-[85vh] overflow-y-auto",
            "max-w-[100vw] sm:max-w-[450px]",

            "left-0 sm:left-1/2",
            "top-auto sm:top-1/2",
            "bottom-0 sm:bottom-auto",
            "translate-x-0 sm:-translate-x-1/2",
            "translate-y-0 sm:-translate-y-1/2",

            "focus-visible:outline-none",
            "bg-dark-green-200 shadow-2xl",
            "rounded-2xl border-[2px] border-white/10",
            contentClassName
          )}
        >
          <div className={cn("relative", wrapperTitleClassName)}>
            {dialogTitle && (
              <div
                className={cn(
                  "text-white",
                  "text-base font-bold md:text-xl",
                  titleClassName
                )}
              >
                {dialogTitle}
              </div>
            )}
            {isShowIconClose && (
              <button
                className={cn(
                  "z-[100]",
                  "focus-visible:outline-none",
                  "text-[#6B7280] hover:text-white",
                  "absolute top-0 right-0 cursor-pointer",
                  closeIconClassName
                )}
                onClick={onClose}
              >
                <CloseIcon />
              </button>
            )}
          </div>

          {children}
        </Content>
      </Portal>
    </Root>
  );
};

export default CommonDialog;

export interface CommonDialogProps
  extends React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  onClose: () => void;

  titleClassName?: string;
  isShowIconClose?: boolean;
  dialogTitle?: React.ReactNode;
  secondOverlay?: React.ReactNode;
  isPreventCloseOutside?: boolean;

  overlayClassName?: string;
  contentClassName?: string;
  closeIconClassName?: string;
  wrapperTitleClassName?: string;
}
