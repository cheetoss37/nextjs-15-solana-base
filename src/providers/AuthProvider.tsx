"use client";

import { FC, PropsWithChildren, useEffect } from "react";

import { useWallet } from "@solana/wallet-adapter-react";

import useAppStore from "@/stores/useAppStore";
import useAuth from "@/hooks/auth-hooks/useAuth";
import useSystem from "@/hooks/system-hooks/useSystem";
import useAccount from "@/hooks/account-hooks/useAccount";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { handleGetSolPrice } = useSystem();
  const { handleGetBalance } = useAccount();
  const { accountInfo } = useAppStore();
  const { handleLogout } = useAuth();
  const { publicKey } = useWallet();

  const handleDisconnect = () => {
    handleLogout();
  };

  useEffect(() => {
    handleGetSolPrice();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!accountInfo) return;

    handleGetBalance(accountInfo.wallet);
  }, [accountInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!accountInfo || !publicKey) return;

    if (accountInfo.wallet !== publicKey.toString()) {
      handleDisconnect();
    }
  }, [publicKey, accountInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

export default AuthProvider;
