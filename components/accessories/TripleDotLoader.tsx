"use client";

import type { Transition, Variants} from "framer-motion";
import { motion } from "framer-motion";
import type { FC} from "react";
import { useEffect, useState } from "react";

const ContainerVariants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants: Variants = {
  initial: {
    y: "-20%",
  },
  animate: {
    y: "90%",
  },
};

const DotTransition: Transition = {
  duration: 0.4,
  ease: "linear",
};

const TripleDotLoader: FC = () => {
  const [animationState, setAnimationState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(!animationState);
    }, 900);
    return () => { clearTimeout(timer); };
  }, [animationState]);

  return (
    <motion.div
      variants={ContainerVariants}
      initial="initial"
      animate={animationState ? "animate" : "initial"}
      className="triple-dot-loader-container"
    >
      <motion.span variants={DotVariants} transition={DotTransition} />
      <motion.span variants={DotVariants} transition={DotTransition} />
      <motion.span variants={DotVariants} transition={DotTransition} />
    </motion.div>
  );
};

export default TripleDotLoader;
