"use client";

import type { FC } from "react";
import Container from "./Container";
import FadeUp from "@/motions/FadeUp";

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <p>&copy; 2023 Anthony Massaad. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
