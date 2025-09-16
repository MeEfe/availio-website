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
    <div className="flex items-center flex-col p-6 content-container">
      <div>
        <h1 className="uppercase mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Let's{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-accent dark:decoration-blue-600">
            improve
          </span>{" "}
          your gym experience
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          <span className="font-bold">Availio</span> uses smart IoT tracking to
          monitor gym equipment in real time. Our dashboard helps gyms make
          better decisions, while our app gives members a seamless, data-driven
          workout experience.
        </p>
      </div>
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
