import * as React from "react";
import { motion, type Transition } from "framer-motion";
import { Link } from "react-router-dom";
import "./landing-page.css";
import dashboardImage from "../assets/dashboard.png";
import mobileImage from "../assets/mobile.png";
import appStoreIcon from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import playStoreIcon from "../assets/GetItOnGooglePlay_Badge_Web_color_English.png";

type HoverSide = "left" | "right" | null;

export default function LandingPage() {
  const [hover, setHover] = React.useState<HoverSide>(() => {
    // Load from localStorage or default to "left" (dashboard)
    const saved = localStorage.getItem("landing-hover-preference");
    return (saved as HoverSide) || "left";
  });

  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = React.useRef(false);

  const handleHoverStart = (side: "left" | "right") => {
    userInteractedRef.current = true;
    setHover(side);
    localStorage.setItem("landing-hover-preference", side);

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
      setHover((current) => {
        const newSide = current === "left" ? "right" : "left";
        localStorage.setItem("landing-hover-preference", newSide);
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
    <div className="flex items-center flex-col p-4 sm:p-6 content-container">
      <div className="w-full lg:w-[90%] flex flex-col lg:flex-row lg:gap-[10%] flex-1 justify-center items-center">
        <div className="p-3 w-full lg:w-1/4 content-end lg:h-[80%] mb-6 lg:mb-0">
          <motion.h1
            className="uppercase mb-4 font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white relative group cursor-pointer text-center lg:text-left"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 4.5rem)",
              lineHeight: "1.2",
            }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                },
              },
              hover: {
                scale: 1.02,
                transition: { duration: 0.3 },
              },
            }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-blue-600/20 to-accent/20 rounded-2xl blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.7, 0.4],
                scale: [0.8, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                times: [0, 0.6, 1],
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-2 bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{
                duration: 1.5,
                delay: 1.5,
                ease: "easeOut",
              }}
            />
            {[
              "Let's",
              " ",
              "improve",
              " ",
              "your",
              " ",
              "gym",
              " ",
              "experience",
            ].map((word, index) => (
              <motion.span
                key={index}
                className={
                  word === "improve"
                    ? "underline underline-offset-3 decoration-8 decoration-accent dark:decoration-blue-600"
                    : ""
                }
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    scale: 0.5,
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
                      duration: 0.8,
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="w-full lg:flex-1 lg:h-[80%] flex flex-col">
          {/* Product Navigation Indicators - Hidden on mobile */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 px-4">
            <motion.button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                hover === "left"
                  ? "bg-[#0F2F50] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => handleHoverStart("left")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-2 h-2 rounded-full bg-current"></div>
              For Gym Owners
            </motion.button>

            <div className="w-8 h-px bg-gray-300"></div>

            <motion.button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                hover === "right"
                  ? "bg-accent text-black shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => handleHoverStart("right")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-2 h-2 rounded-full bg-current"></div>
              For Gym Members
            </motion.button>
          </div>

          <div className="flex-1 box-container">
            <motion.div
              className={`box bg-gradient-to-br from-primary to-primary/90 flex items-center p-8 pl-12 border-l-4 lg:border-l-0 border-[#0F2F50] ${
                hover === "left" ? "lg:border-l-4 lg:border-[#0F2F50]" : ""
              }`}
              onHoverStart={() => handleHoverStart("left")}
              onHoverEnd={handleHoverEnd}
              animate={{ clipPath: leftPoly }}
              transition={transition}
              style={{
                clipPath: leftPoly,
              }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#0F2F50] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      DASHBOARD
                    </span>
                    <span className="text-[#0F2F50]/60 text-sm font-medium hidden sm:inline">
                      For Gym Owners
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2F50] mb-3">
                    Gym Management Dashboard
                  </h3>
                  <p className="text-[#0F2F50]/80 mb-6 text-sm leading-relaxed">
                    Streamline operations, manage equipment, track member
                    activity, and boost revenue with our comprehensive gym
                    management platform.
                  </p>
                  <Link to="/contact">
                    <motion.button
                      className="bg-[#0F2F50] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0F2F50]/90 transition-colors text-sm shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Request Demo
                    </motion.button>
                  </Link>
                </div>
                <div className="mockup-browser border-base-300 border w-full lg:w-[55%] hidden lg:block">
                  <div className="mockup-browser-toolbar"></div>
                  <div className="flex justify-center border-t border-base-300 h-80">
                    <img
                      src={dashboardImage}
                      alt="Dashboard view"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 0px" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`box bg-gradient-to-bl from-white to-gray-50 flex items-center p-8 pr-12 border-l-4 lg:border-l-0 lg:border-r-0 border-accent ${
                hover === "right" ? "lg:border-r-4 lg:border-accent" : ""
              }`}
              onHoverStart={() => handleHoverStart("right")}
              onHoverEnd={handleHoverEnd}
              animate={{ clipPath: rightPoly }}
              transition={transition}
              style={{
                clipPath: rightPoly,
              }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-22 w-full">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-accent text-black px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      MOBILE APP
                    </span>
                    <span className="text-[#0F2F50]/60 text-sm font-medium hidden sm:inline">
                      For Gym Members
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2F50] mb-3">
                    Availio Fitness App
                  </h3>
                  <p className="text-[#0F2F50]/80 mb-6 text-sm leading-relaxed">
                    Check equipment availability, track workouts, book classes,
                    and connect with your gym community. Download now and start
                    your journey.
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
                        className="h-8 sm:h-10"
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
                        className="h-8 sm:h-10"
                      />
                    </motion.button>
                  </div>
                </div>
                <div className="mockup-phone scale-30 lg:scale-40 xl:scale-50 2xl:scale-55 bg-white hidden lg:block">
                  <div className="mockup-phone-camera"></div>
                  <div className="mockup-phone-display">
                    <img
                      src={mobileImage}
                      alt="Mobile app"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 30px" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
