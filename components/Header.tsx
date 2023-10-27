"use client";

import { FC, useContext, useEffect, useRef, useState } from "react";
import { map } from "lodash";
import Link from "next/link";
import { Variants, motion, useCycle } from "framer-motion";
import { headerData } from "@/data/headerData";
import HamburgerButton from "./accessories/mobileMenu/HamburgerButton";
import { SectionProviderContext } from "@/providers/SectionProvider";
import Navigation from "./accessories/mobileMenu/Navigation";
import { scrollToSection } from "@/utils/utilities";
import { SectionHref, SectionName } from "@/types/types";

const sidebarVarients: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
} as const;

const Header: FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isMobileHeader, setIsMobileHeader] = useState(false);
  const containerRef = useRef(null);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useContext(
    SectionProviderContext
  );

  const toggleHamburgerButton = (): void => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const linkClick = (e: any, href: SectionHref, name: SectionName): void => {
    scrollToSection(e, href);
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 600) {
        setIsMobileHeader(true);
        setIsHamburgerOpen(false);
      } else {
        setIsMobileHeader(false);
        setIsHamburgerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <>
      {isMobileHeader ? (
        <header className="mobile">
          <motion.div
            initial={{ x: -100, opacity: 0, visibility: "hidden" }}
            animate={{ x: 0, opacity: 1, visibility: "visible" }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
          >
            <motion.nav
              initial={false}
              animate={isHamburgerOpen ? "open" : "closed"}
              ref={containerRef}
              aria-label="hidden"
            >
              <motion.div className="background" variants={sidebarVarients} />
              <Navigation
                linkClick={linkClick}
                isHamburgerOpen={isHamburgerOpen}
              />
              <HamburgerButton toggleHamburgerButton={toggleHamburgerButton} />
            </motion.nav>
          </motion.div>
        </header>
      ) : (
        <header className="desktop">
          <motion.div
            initial={{ y: -100, opacity: 0, visibility: "hidden" }}
            animate={{ y: 0, opacity: 1, visibility: "visible" }}
            transition={{
              type: "spring",
              duration: 1,
            }}
          >
            <nav>
              <ul>
                {map(headerData, (link, idx) => (
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={idx}
                    animate={
                      activeSection === link.name
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                  >
                    <Link
                      href={link.hash}
                      className={`${
                        activeSection === link.name ? "active" : ""
                      }`}
                      onClick={(e: any): void =>
                        linkClick(e, link.hash, link.name)
                      }
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </header>
      )}
    </>
  );
};

export default Header;
