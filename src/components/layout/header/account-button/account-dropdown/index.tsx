"use client";

import { useState } from "react";

import {
  DropdownRoot,
  DropdownContent,
  DropdownTrigger,
} from "@/components/common";

import Content from "./Content";
import TriggerContent from "./TriggerContent";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownRoot open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DropdownTrigger>
        <TriggerContent isOpen={isOpen} />
      </DropdownTrigger>
      <DropdownContent>
        <Content onClose={() => setIsOpen(false)} />
      </DropdownContent>
    </DropdownRoot>
  );
};

export default AccountDropdown;
