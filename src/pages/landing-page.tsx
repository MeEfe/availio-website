import * as React from "react";
import { motion, type Transition } from "framer-motion";
import "./landing-page.css";
import { KeyInfo } from "@/components/ui/key-info";

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
    <>
    <div className="flex items-center flex-col p-6 content-container">
      <div className=" w-[90%] flex gap-[10%] flex-1 justify-center items-center">
        <div className="p-3 w-1/4 content-end h-[80%]">
          <motion.h1
            className="uppercase mb-4 font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white relative group cursor-pointer"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.2' }}
            whileHover="hover"
            initial="initial"
            variants={{
              initial: {},
              hover: {}
            }}
          >
            <motion.div
              className="absolute bottom-0 left-0 h-2 bg-accent rounded-full"
              variants={{
                initial: { width: "0%" },
                hover: { width: "100%" }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            Let's{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-accent dark:decoration-blue-600">
              improve
            </span>{" "}
            your gym experience
          </motion.h1>
        </div>
        <div className="w-full h-[80%] box-container">
          <motion.div
            className="box bg-primary"
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
            className="box"
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
    </div>
    <KeyInfo />
    </>
  );
}
