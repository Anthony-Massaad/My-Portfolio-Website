"use client";

import Link from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  to: string;
  noText?: boolean;
  newTab?: boolean;
  alternateColor?: boolean;
  action?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button: FC<Props> = ({
  children,
  to,
  noText = false,
  newTab = false,
  alternateColor = false,
  className,
  action = undefined,
}) => {
  return (
    <Link
      onClick={
        action
          ? (e: React.MouseEvent<HTMLAnchorElement>) => {
              action(e);
            }
          : () => {}
      }
      href={to}
      className={`btn${noText ? " fully-rounded" : ""}${
        alternateColor ? " alternate-color" : ""
      }${className ? ` ${className}` : ""}`}
      target={newTab ? "_blank" : ""}
    >
      {children}
    </Link>
  );
};

export default Button;
