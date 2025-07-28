import { KEY_TOKEN } from "@/constants/app.const";
import { useWallet, Wallet } from "@solana/wallet-adapter-react";

import useAppStore from "@/stores/useAppStore";
import Cookies from "js-cookie";

const useAuth = () => {
  const { disconnect } = useWallet();
  const { setBalance, setAccountInfo } = useAppStore();

  const handleLogout = async () => {
    if (disconnect) {
      await disconnect();
    }

    setBalance(0);
    setAccountInfo(undefined);
    Cookies.remove(KEY_TOKEN);
  };

  const handleGetSolanaAddress = async (wallet: Wallet) => {
    try {
      const account = await wallet?.adapter.publicKey;

      return account?.toString() || "";
    } catch (error) {
      console.error("Error getting solana address:", error);
      return "";
    }
  };

  return { handleLogout, handleGetSolanaAddress };
};

export default useAuth;
