"use client";

import type { FC, ReactNode} from "react";
import { useEffect } from "react";

type Props = {
  children: ReactNode;
}

const ScrollToTop: FC<Props> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{children}</>;
};

export default ScrollToTop;
