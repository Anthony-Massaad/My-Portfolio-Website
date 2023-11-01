"use client";

import { FC } from "react";
import Container from "./Container";
import FadeUp from "@/motions/FadeUp";

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <FadeUp>
          <p>&copy; 2023 Anthony Massaad. All rights reserved.</p>
        </FadeUp>
      </Container>
    </footer>
  );
};

export default Footer;
