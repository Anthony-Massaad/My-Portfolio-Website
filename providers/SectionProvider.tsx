"use client";

import type { SectionName } from "@/types/types";
import type {
  FC,
  ReactNode,
  Dispatch,
  SetStateAction} from "react";
import React, {
  useState,
  createContext
} from "react";

type Props = {
  children: ReactNode;
};

type SectionProviderContextInterface = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const SectionProviderContext =
  createContext<SectionProviderContextInterface>(
    {} as SectionProviderContextInterface
  );

const SectionProvider: FC<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <SectionProviderContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </SectionProviderContext.Provider>
  );
};

export default SectionProvider;
