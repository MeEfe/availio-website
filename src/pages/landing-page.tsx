import * as React from "react";
import { motion, type Transition } from "framer-motion";
import "./landing-page.css";
import { KeyInfo } from "@/components/ui/key-info";
import dashboardImage from "../assets/dashboard.png";
import mobileImage from "../assets/mobile.png";

type HoverSide = "left" | "right" | null;

export default function LandingPage() {
  const [hover, setHover] = React.useState<HoverSide>(null);

  const baseTop = 70;
  const baseBottom = 30;
  const delta = 65;

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
            className="box bg-primary flex items-center p-8 pl-12"
            onHoverStart={() => setHover("left")}
            onHoverEnd={() => setHover(null)}
            animate={{ clipPath: leftPoly }}
            transition={transition}
            style={{
              clipPath: leftPoly,
            }}
          >
            <div className="flex items-center gap-8 w-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#0F2F50] mb-3">
                  Transform Your Gym
                </h3>
                <p className="text-[#0F2F50]/80 mb-6 text-sm leading-relaxed">
                  Streamline operations, engage members, and boost revenue with our comprehensive gym management platform.
                </p>
                <motion.button
                  className="bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Demo
                </motion.button>
              </div>
           <div className="mockup-browser border-base-300 border w-[55%]">
  <div className="mockup-browser-toolbar">
  </div>
  <div className="flex justify-center border-t border-base-300 h-80">
    <img
      src={dashboardImage}
      alt="Dashboard view"
      className="w-full h-full object-cover"
      style={{ objectPosition: 'center 0px' }}
    />
  </div>
</div>
            </div>
          </motion.div>

          <motion.div
            className="box bg-white flex items-center p-8 pr-12"
            onHoverStart={() => setHover("right")}
            onHoverEnd={() => setHover(null)}
            animate={{ clipPath: rightPoly }}
            transition={transition}
            style={{
              clipPath: rightPoly,
            }}
          >
            <div className="flex items-center gap-22 w-full">
              <div>
                <h3 className="text-2xl font-bold text-[#0F2F50] mb-3">
                  Your Fitness Companion
                </h3>
                <p className="text-[#0F2F50]/80 mb-6 text-sm leading-relaxed">
                  Track workouts, book classes, and connect with your gym community. Download now and start your journey.
                </p>
                <div className="flex gap-3">
                  <motion.button
                    className="bg-black text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    App Store
                  </motion.button>
                  <motion.button
                    className="bg-accent text-black font-semibold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Play Store
                  </motion.button>
                </div>
              </div>
          <div className="mockup-phone scale-75 bg-white">
  <div className="mockup-phone-camera"></div>
  <div className="mockup-phone-display">
    <img
      src={mobileImage}
      alt="Mobile app"
      className="w-full h-full object-cover"
      style={{ objectPosition: 'center 30px' }}
    />
  </div>
</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <KeyInfo />
    </>
  );
}
