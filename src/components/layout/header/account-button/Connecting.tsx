"use client";

import {
  FC,
  Dispatch,
  useEffect,
  SetStateAction,
  ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/utils/common.utils";
import { Wallet, useWallet } from "@solana/wallet-adapter-react";
import { COOKIE_EXPIRED_DATE, KEY_TOKEN } from "@/constants/app.const";

import useAuth from "@/hooks/auth-hooks/useAuth";
import useAppStore from "@/stores/useAppStore";
import Cookies from "js-cookie";

const Connecting: FC<ConnectingProps> = ({
  className,
  selectedWallet,

  onClose,
  onLogout,
  setIsConnecting,
  ...otherProps
}) => {
  const { wallet } = useWallet();
  const { accountInfo, setAccountInfo } = useAppStore();
  const { handleLogout, handleGetSolanaAddress } = useAuth();

  const handleLogin = async () => {
    try {
      const address = await handleGetSolanaAddress(selectedWallet);

      if (address) {
        setAccountInfo({ wallet: address });
        Cookies.set(KEY_TOKEN, address, { expires: COOKIE_EXPIRED_DATE });

        setIsConnecting(false);
        onClose();
      } else {
        handleLogout();
      }
    } catch (error: any) {
      console.log("Error while connecting to dApp", error);
      onLogout();
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    if (
      accountInfo ||
      !wallet ||
      !selectedWallet ||
      selectedWallet.adapter.publicKey?.toString() !==
        wallet.adapter.publicKey?.toString()
    )
      return;

    handleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedWallet, accountInfo, wallet]);

  return (
    <div
      className={cn(
        "z-[2000]",
        "h-screen w-screen",
        "fixed top-0 left-0",
        "bg-black opacity-75",
        "flex flex-col items-center justify-center gap-y-3",
        className
      )}
      {...otherProps}
    >
      <div className="flex items-end font-medium">
        <span>Connecting</span>
        <span className="mb-[6px] ml-1 flex space-x-1">
          <span className="h-1 w-1 animate-bounce rounded-full bg-current"></span>
          <span className="h-1 w-1 animate-bounce rounded-full bg-current [animation-delay:0.2s]"></span>
          <span className="h-1 w-1 animate-bounce rounded-full bg-current [animation-delay:0.4s]"></span>
        </span>
      </div>
    </div>
  );
};

export default Connecting;

interface ConnectingProps extends ComponentPropsWithoutRef<"div"> {
  selectedWallet: Wallet;
  onClose: () => void;
  onLogout: () => void;
  setIsConnecting: Dispatch<SetStateAction<boolean>>;
}
