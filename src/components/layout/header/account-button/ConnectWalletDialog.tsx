"use client";

import ReactDOM from "react-dom";
import { FC, Fragment, useMemo, useState } from "react";

import { CommonButton, CommonDialog } from "@/components/common";
import { useWallet, Wallet } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useTranslations } from "next-intl";

import Connecting from "./Connecting";
import useAuth from "@/hooks/auth-hooks/useAuth";

const ConnectWalletDialog: FC<ConnectWalletDialogProps> = ({
  open,
  onClose,
}) => {
  const t = useTranslations("Common");

  const { handleLogout } = useAuth();
  const { wallets, select } = useWallet();

  const [isConnecting, setIsConnecting] = useState(false);
  const [wallet, setWallet] = useState<Wallet | undefined>();

  const [listedWallets, collapsedWallets] = useMemo(() => {
    const installed: Wallet[] = [];
    const notInstalled: Wallet[] = [];

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet);
      } else {
        notInstalled.push(wallet);
      }
    }

    return installed.length ? [installed, notInstalled] : [notInstalled, []];
  }, [wallets]);

  const handleConnect = async (wallet: Wallet) => {
    if (wallet.readyState !== WalletReadyState.Installed) {
      window.open(wallet.adapter.url, "_blank");
      return;
    }

    if (isConnecting) return;

    setIsConnecting(true);

    await select(wallet.adapter.name);

    await wallet.adapter.connect();

    setWallet(wallet);
  };

  return (
    <CommonDialog
      isOpen={open}
      onClose={onClose}
      isPreventCloseOutside
      dialogTitle={<h2>{t("lConnectWallet")}</h2>}
    >
      <div className="mt-4 flex w-full flex-col gap-y-2">
        {listedWallets.map(wallet => (
          <CommonButton
            key={wallet.adapter.name}
            onClick={() => handleConnect(wallet)}
            className="space-between-root bg-white/3 hover:bg-white/10"
          >
            <div className="center-root gap-x-2">
              <img
                src={wallet.adapter.icon}
                alt={`${wallet.adapter.name} icon`}
                className="h-10 w-10 rounded-md"
              />
              <p>{wallet.adapter.name}</p>
            </div>
          </CommonButton>
        ))}

        {collapsedWallets.map(wallet => (
          <CommonButton
            key={wallet.adapter.name}
            onClick={() => handleConnect(wallet)}
            className="space-between-root bg-white/3 hover:bg-white/10"
          >
            <div className="center-root gap-x-2">
              <img
                src={wallet.adapter.icon}
                alt={`${wallet.adapter.name} icon`}
                className="h-10 w-10 rounded-md"
              />
              <p>{wallet.adapter.name}</p>
            </div>
          </CommonButton>
        ))}
      </div>

      {isConnecting && wallet ? (
        <>
          {ReactDOM.createPortal(
            <Connecting
              onClose={onClose}
              onLogout={handleLogout}
              selectedWallet={wallet}
              setIsConnecting={setIsConnecting}
            />,
            document.body
          )}
        </>
      ) : (
        <Fragment />
      )}
    </CommonDialog>
  );
};

export default ConnectWalletDialog;

interface ConnectWalletDialogProps {
  open: boolean;
  onClose: () => void;
}
