import { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/common.utils";
import { Toaster } from "react-hot-toast";

import Header from "../header";
import ContentWrapper from "./ContentWrapper";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="font-inria-sans relative w-screen font-normal">
      <div className={cn("h-[363px] w-screen", "absolute top-0 -z-10")} />
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Toaster />
    </div>
  );
};

export default MainLayout;
