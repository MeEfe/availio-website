import * as React from "react";
import { motion, type Transition } from "framer-motion";
import "./landing-page.css";
import { KeyInfo } from "@/components/ui/key-info";
import dashboardImage from "../assets/dashboard.png";
import mobileImage from "../assets/mobile.png";
import appStoreIcon from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import playStoreIcon from "../assets/GetItOnGooglePlay_Badge_Web_color_English.png";

type HoverSide = "left" | "right" | null;

export default function LandingPage() {
  const [hover, setHover] = React.useState<HoverSide>(() => {
    // Load from localStorage or default to "left" (dashboard)
    const saved = localStorage.getItem('landing-hover-preference');
    return (saved as HoverSide) || "left";
  });

  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = React.useRef(false);

  const handleHoverStart = (side: "left" | "right") => {
    userInteractedRef.current = true;
    setHover(side);
    localStorage.setItem('landing-hover-preference', side);

    // Clear existing timer and restart it
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startAutoTimer();
  };

  const handleHoverEnd = () => {
    // Keep the last hovered state instead of resetting to null
    // The state will remain on the last hovered item
  };

  const startAutoTimer = () => {
    timerRef.current = setInterval(() => {
      setHover(current => {
        const newSide = current === "left" ? "right" : "left";
        localStorage.setItem('landing-hover-preference', newSide);
        return newSide;
      });
    }, 7000);
  };

  // Start auto timer on mount and cleanup on unmount
  React.useEffect(() => {
    startAutoTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

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
    damping: 60,
  };

  return (
    <div className="flex items-center flex-col p-6 content-container">
      <div className=" w-[90%] flex gap-[10%] flex-1 justify-center items-center">
        <div className="p-3 w-1/4 content-end h-[80%]">
          <motion.h1
            className="uppercase mb-4 font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white relative group cursor-pointer"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.2' }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2
                }
              },
              hover: {
                scale: 1.02,
                transition: { duration: 0.3 }
              }
            }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-blue-600/20 to-accent/20 rounded-2xl blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.7, 0.4],
                scale: [0.8, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                times: [0, 0.6, 1],
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-2 bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                delay: 1.5,
                ease: "easeOut"
              }}
            />
            {["Let's", " ", "improve", " ", "your", " ", "gym", " ", "experience"].map((word, index) => (
              <motion.span
                key={index}
                className={word === "improve" ? "underline underline-offset-3 decoration-8 decoration-accent dark:decoration-blue-600" : ""}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    scale: 0.5
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                      duration: 0.8
                    }
                  }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <div className="w-full h-[80%] box-container">
          <motion.div
            className="box bg-primary flex items-center p-8 pl-12"
            onHoverStart={() => handleHoverStart("left")}
            onHoverEnd={handleHoverEnd}
            animate={{ clipPath: leftPoly }}
            transition={transition}
            style={{
              clipPath: leftPoly,
            }}
          >
            <div className="flex items-center gap-8 w-full">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Transform Your Gym
                </h3>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
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
            className="box bg-background flex items-center p-8 pr-12"
            onHoverStart={() => handleHoverStart("right")}
            onHoverEnd={handleHoverEnd}
            animate={{ clipPath: rightPoly }}
            transition={transition}
            style={{
              clipPath: rightPoly,
            }}
          >
            <div className="flex items-center gap-22 w-full">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Your Fitness Companion
                </h3>
                <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                  Track workouts, book classes, and connect with your gym community. Download now and start your journey.
                </p>
                <div className="flex gap-3 mb-4">
                  <motion.button
                    className="cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={appStoreIcon}
                      alt="Download on the App Store"
                      className="h-10"
                    />
                  </motion.button>
                  <motion.button
                    className="cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={playStoreIcon}
                      alt="Get it on Google Play"
                      className="h-10"
                    />
                  </motion.button>
                </div>
              </div>
              <div className="mockup-phone scale-75 bg-background">
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
  );
}
