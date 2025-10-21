import type { Variants } from "framer-motion";
import { motion, useAnimation, useInView } from "framer-motion";
import type { FC, ReactNode} from "react";
import { useEffect, useMemo, useRef } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  direction: "fade-left" | "fade-right";
}

const HoriztonalFade: FC<Props> = ({ children, delay = 0.175, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variants = useMemo((): Variants => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "fade-left" ? 100 : -100,
        visibility: "hidden",
      },
      visible: { opacity: 1, x: 0, visibility: "visible" },
    };
  }, [direction]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={variants}
      ref={ref}
      initial="hidden"
      style={{ position: "relative", width: "auto", overflow: "hidden" }}
      animate={mainControls}
      transition={{ delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default HoriztonalFade;
