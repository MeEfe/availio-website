import * as React from "react";
import { motion, type Transition } from "framer-motion";
import "./landing-page.css";

type HoverSide = "left" | "right" | null;

export default function LandingPage() {
  const [hover, setHover] = React.useState<HoverSide>(null);

  const baseTop = 70;
  const baseBottom = 30;
  const delta = 30;

  const { leftPoly, rightPoly } = React.useMemo(() => {
    let top = baseTop;
    let bottom = baseBottom;
    if (hover === "left") {
      top += delta;
      bottom += delta;
    } else if (hover === "right") {
      top -= delta;
      bottom -= delta;
    }
    return {
      leftPoly: `polygon(0% 0%, ${top}% 0%, ${bottom}% 100%, 0% 100%)`,
      rightPoly: `polygon(${top}% 0%, 100% 0%, 100% 100%, ${bottom}% 100%)`,
    };
  }, [hover]);

  const transition: Transition = {
    type: "spring",
    stiffness: 220,
    damping: 26,
  };

  return (
    <div className="flex justify-center p-6 content-container">
      <div className="box-container">
        <motion.div
          className="box left-box"
          onHoverStart={() => setHover("left")}
          onHoverEnd={() => setHover(null)}
          animate={{ clipPath: leftPoly }}
          transition={transition}
          style={{
            clipPath: leftPoly,
          }}
        >
          Left content
        </motion.div>

        <motion.div
          className="box right-box"
          onHoverStart={() => setHover("right")}
          onHoverEnd={() => setHover(null)}
          animate={{ clipPath: rightPoly }}
          transition={transition}
          style={{
            clipPath: rightPoly,
          }}
        >
          Right content
        </motion.div>
      </div>
    </div>
  );
}
