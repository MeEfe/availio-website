import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

interface KeyInfoItem {
  number: string;
  title: string;
  description: string;
}

interface KeyInfoProps {
  className?: string;
}

function KeyInfo({ className }: KeyInfoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const items: KeyInfoItem[] = [
    {
      number: "#01",
      title: "Utilization",
      description: "Transform your gym's efficiency with real-time equipment tracking and space optimization. Our intelligent monitoring system helps you identify peak usage times, optimize equipment placement, and ensure maximum facility utilization. Say goodbye to overcrowded areas and underused equipment."
    },
    {
      number: "#02",
      title: "Clarity",
      description: "Gain crystal-clear insights into every aspect of your gym operations. Our comprehensive dashboard provides detailed analytics on member activity, revenue streams, and operational performance. Make informed decisions with transparent, easy-to-understand visualizations that reveal what matters most to your business."
    },
    {
      number: "#03",
      title: "Efficiency",
      description: "Streamline your gym operations and eliminate bottlenecks that slow down your business. From automated check-ins to smart queue management, our platform reduces wait times and optimizes staff workflows. Experience seamless operations that keep both members and staff happy and productive."
    },
    {
      number: "#04",
      title: "Happy Gym Visitors",
      description: "Elevate member satisfaction with personalized experiences and seamless service delivery. Our platform enables you to track member preferences, provide tailored recommendations, and ensure every visit exceeds expectations. Build a community where members feel valued and motivated to achieve their fitness goals."
    },
    {
      number: "#05",
      title: "Analytic Decision Making",
      description: "Harness the power of data-driven insights to make strategic decisions that drive growth. Our advanced analytics engine provides predictive insights, trend analysis, and performance metrics that guide your business strategy. Turn data into actionable intelligence for sustainable gym management success."
    }
  ];

  return (
    <motion.div
      ref={containerRef}
      className={cn("bg-foreground w-full py-20", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24 pb-20">
        {items.map((item, index) => {
          const itemRef = useRef<HTMLDivElement>(null);
          const isInView = useInView(itemRef, {
            once: true,
            margin: "0px 0px -200px 0px"
          });

          const y = useTransform(
            scrollYProgress,
            [index / items.length, (index + 1) / items.length],
            [50, -50]
          );

          return (
            <motion.div
              key={index}
              ref={itemRef}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
            >
              <motion.div
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[200px]",
                  index % 2 === 0 ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[1fr_280px]"
                )}
                style={{ y }}
              >
                {/* Number and Title Section */}
                <motion.div
                  className={cn(
                    "relative flex flex-col justify-center",
                    index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  )}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                >
                  {/* Background Number */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <span className="text-[12rem] lg:text-[15rem] font-black text-primary/5 select-none leading-none">
                      {item.number}
                    </span>
                  </motion.div>

                  {/* Foreground Content */}
                  <div className={cn(
                    "relative z-10 space-y-4",
                    index % 2 === 0 ? "text-left" : "lg:text-right"
                  )}>
                    <motion.div
                      className={cn(
                        "flex items-center gap-3",
                        index % 2 === 0 ? "justify-start" : "lg:justify-end"
                      )}
                      initial={{ width: 0, opacity: 0 }}
                      animate={isInView ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4
                      }}
                    >
                      <motion.div
                        className="w-12 h-[2px] bg-primary"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5
                        }}
                        style={{
                          transformOrigin: index % 2 === 0 ? "left" : "right"
                        }}
                      />
                      <span className="text-sm font-semibold text-primary tracking-wider">
                        {item.number}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-4xl lg:text-5xl font-bold text-background leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6
                      }}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className={cn(
                    "relative flex items-center",
                    index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"
                  )}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                    ease: "easeOut"
                  }}
                >
                  <div className="space-y-6">
                    <motion.p
                      className="text-lg lg:text-xl leading-relaxed text-background/80 max-w-none"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4
                      }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Subtle accent line */}
                    <motion.div
                      className={cn(
                        "w-24 h-[1px] bg-gradient-to-r from-primary to-transparent",
                        index % 2 === 0 ? "" : "lg:ml-auto"
                      )}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7
                      }}
                      style={{
                        transformOrigin: index % 2 === 0 ? "left" : "right"
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Connecting line between sections (except last) */}
              {index < items.length - 1 && (
                <motion.div
                  className="absolute left-1/2 bottom-[-3rem] w-[1px] h-12 bg-gradient-to-b from-primary/20 to-transparent transform -translate-x-1/2"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8
                  }}
                  style={{ transformOrigin: "top" }}
                />
              )}
            </motion.div>
          );
        })}
        </div>
      </div>
    </motion.div>
  );
}

export { KeyInfo };