"use client";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const SectionHeading: FC<Props> = ({ children }) => {
  return <h2 className="section-heading">{children}</h2>;
};

export default SectionHeading;
