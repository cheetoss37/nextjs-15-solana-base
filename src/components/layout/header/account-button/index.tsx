"use client";

import AccountDropdown from "./account-dropdown";
import ConnectWallet from "./ConnectWallet";
import useAppStore from "@/stores/useAppStore";

const AccountButton = () => {
  const { accountInfo } = useAppStore();

  return <>{accountInfo ? <AccountDropdown /> : <ConnectWallet />}</>;
};

export default AccountButton;
