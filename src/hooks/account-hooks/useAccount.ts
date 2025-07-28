import { getSolanaRpcEndpoint } from "@/utils/blockchain.utils";

import useAppStore from "@/stores/useAppStore";
import useBalances from "../blockchain-hooks/useBalance";

const useAccount = () => {
  const { setBalance } = useAppStore();
  const { handleGetSvmNativeBalanceToken } = useBalances();

  const handleGetBalance = async (walletAddress: string) => {
    if (!walletAddress) return;

    const rpc = getSolanaRpcEndpoint();
    const nativeBalance = await handleGetSvmNativeBalanceToken(
      walletAddress,
      rpc
    );

    setBalance(nativeBalance);
  };

  return {
    handleGetBalance,
  };
};

export default useAccount;
