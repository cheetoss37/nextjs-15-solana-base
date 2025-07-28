import { shallow } from "zustand/shallow";
import { persist } from "zustand/middleware";
import { AccountInterface } from "@/types/app.type";
import { createWithEqualityFn } from "zustand/traditional";

interface AppStore {
  solPrice: number;
  setSolPrice: (value: number) => void;

  isShowSplash: boolean;
  setIsShowSplash: (value: boolean) => void;

  isOpenConnectDialog: boolean;
  setIsOpenConnectDialog: (value: boolean) => void;

  accountInfo?: AccountInterface;
  setAccountInfo: (value: AccountInterface | undefined) => void;

  balance: number;
  setBalance: (value: number) => void;
}

const useAppStore = createWithEqualityFn<AppStore>()(
  persist(
    set => ({
      solPrice: 0,
      setSolPrice: (value: number) => set({ solPrice: value }),

      isShowSplash: true,
      setIsShowSplash: value => set({ isShowSplash: value }),

      isOpenConnectDialog: false,
      setIsOpenConnectDialog: (value: boolean) =>
        set({ isOpenConnectDialog: value }),

      accountInfo: undefined,
      setAccountInfo: (value: AccountInterface | undefined) =>
        set({ accountInfo: value }),

      balance: 0,
      setBalance: (value: number) => set({ balance: value }),
    }),
    {
      name: "app-store",
      partialize: state => ({
        solPrice: state.solPrice,
      }),
    }
  ),
  shallow
);

export default useAppStore;
