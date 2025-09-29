import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PlanType = "gyms" | "members";

const features = {
  gyms: [
    "Analytics & Decision Making",
    "IoT Data to Track Devices",
    "Efficiency Monitoring",
    "Member Management System",
    "Revenue Optimization Tools",
    "Advanced Reporting Dashboard",
    "Custom Integrations",
    "24/7 Priority Support"
  ],
  members: {
    free: [
      "Basic Workout Tracking",
      "Class Booking",
      "Gym Check-in",
      "Basic Progress Reports"
    ],
    premium: [
      "Advanced Workout Analytics",
      "Personalized Training Plans",
      "Nutrition Tracking",
      "Premium Class Access",
      "AI-Powered Insights",
      "Social Features",
      "Priority Booking",
      "Offline Workout Access"
    ]
  }
};

export default function Pricing({ isOnLandingPage = false }: { isOnLandingPage?: boolean }) {
  const [activePlan, setActivePlan] = React.useState<PlanType>("gyms");
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className={`min-h-screen py-12 sm:py-16 lg:py-20 px-4 ${isOnLandingPage ? 'bg-foreground' : 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'}`} ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 ${isOnLandingPage ? 'text-background' : 'text-gray-900 dark:text-white'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Choose Your Plan
          </motion.h1>
          <motion.p
            className={`text-lg sm:text-xl max-w-3xl mx-auto px-4 ${isOnLandingPage ? 'text-background/80' : 'text-gray-600 dark:text-gray-300'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Whether you're running a gym or visiting one, we have the perfect solution for you
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <div className={`p-1.5 sm:p-2 rounded-xl shadow-lg ${isOnLandingPage ? 'bg-background border-background/20' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'}`}>
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={() => setActivePlan("gyms")}
                className={cn(
                  "px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap",
                  activePlan === "gyms"
                    ? "bg-foreground text-background shadow-md"
                    : isOnLandingPage
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                For Gyms
              </button>
              <button
                onClick={() => setActivePlan("members")}
                className={cn(
                  "px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap mt-1 sm:mt-0",
                  activePlan === "members"
                    ? "bg-foreground text-background shadow-md"
                    : isOnLandingPage
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                For Gym Members
              </button>
            </div>
          </div>
        </motion.div>

        {/* Plans Content */}
        <div className="relative overflow-hidden">
          {/* Gym Plans */}
          <motion.div
            className={cn(
              "transition-all duration-500",
              activePlan === "gyms" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute inset-0"
            )}
          >
            <div className="flex justify-center px-4">
              <Card className={`max-w-2xl w-full border-2 ${isOnLandingPage ? 'bg-background/95 border-background/20' : 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-foreground/20'}`}>
                <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
                  <div className="mb-4">
                    <span className="bg-foreground text-background px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
                      Enterprise
                    </span>
                  </div>
                  <CardTitle className={`text-2xl sm:text-3xl font-bold ${isOnLandingPage ? 'text-foreground' : 'text-gray-900 dark:text-white'}`}>
                    Gym Management Platform
                  </CardTitle>
                  <CardDescription className={`text-base sm:text-lg mt-3 sm:mt-4 ${isOnLandingPage ? 'text-foreground/70' : 'text-gray-600 dark:text-gray-300'}`}>
                    Complete solution for modern gym operations
                  </CardDescription>
                  <div className="mt-4 sm:mt-6">
                    <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isOnLandingPage ? 'text-foreground' : 'text-gray-900 dark:text-white'}`}>Custom</span>
                    <span className={`text-lg sm:text-xl ml-2 ${isOnLandingPage ? 'text-foreground/70' : 'text-gray-600 dark:text-gray-300'}`}>pricing</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 px-4 sm:px-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {features.gyms.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-foreground rounded-full flex-shrink-0"></div>
                        <span className={`text-sm sm:text-base ${isOnLandingPage ? 'text-foreground/80' : 'text-gray-700 dark:text-gray-300'}`}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-4 sm:py-6 text-base sm:text-lg">
                      Contact Sales
                    </Button>
                  </motion.div>
                  <p className={`text-center text-xs sm:text-sm mt-3 sm:mt-4 ${isOnLandingPage ? 'text-foreground/60' : 'text-gray-500 dark:text-gray-400'}`}>
                    Get a custom quote based on your gym's needs
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Member Plans */}
          <motion.div
            className={cn(
              "transition-all duration-500",
              activePlan === "members" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute inset-0"
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 pt-6 sm:pt-8">
              {/* Free Plan */}
              <Card className={`h-full flex flex-col ${isOnLandingPage ? 'bg-background/95' : 'bg-white dark:bg-gray-800'}`}>
                <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6 pt-6 sm:pt-8">
                  <CardTitle className={`text-xl sm:text-2xl font-bold ${isOnLandingPage ? 'text-foreground' : 'text-gray-900 dark:text-white'}`}>
                    Free
                  </CardTitle>
                  <CardDescription className={`mt-2 ${isOnLandingPage ? 'text-foreground/70' : 'text-gray-600 dark:text-gray-300'}`}>
                    Perfect for getting started
                  </CardDescription>
                  <div className="mt-4 sm:mt-6">
                    <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isOnLandingPage ? 'text-foreground' : 'text-gray-900 dark:text-white'}`}>$0</span>
                    <span className={`text-lg sm:text-xl ${isOnLandingPage ? 'text-foreground/70' : 'text-gray-600 dark:text-gray-300'}`}>/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 px-4 sm:px-6 flex-1 flex flex-col">
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                    {features.members.free.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isOnLandingPage ? 'bg-foreground/60' : 'bg-gray-400'}`}></div>
                        <span className={`text-sm sm:text-base ${isOnLandingPage ? 'text-foreground/80' : 'text-gray-700 dark:text-gray-300'}`}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full py-4 sm:py-6 text-base sm:text-lg font-semibold border-foreground text-foreground hover:bg-foreground/5 hover:border-foreground/70">
                    Download Free
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <div className="relative">
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-foreground text-background px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
                <Card className={`border-2 h-full flex flex-col ${isOnLandingPage ? 'bg-background/95 border-background/30' : 'bg-gradient-to-br from-foreground/5 to-foreground/10 border-foreground/20'}`}>
                  <CardHeader className="text-center pb-6 sm:pb-8 pt-8 sm:pt-12 px-4 sm:px-6">
                    <CardTitle className={`text-xl sm:text-2xl font-bold ${isOnLandingPage ? 'text-foreground' : 'text-gray-900 dark:text-white'}`}>
                      Premium
                    </CardTitle>
                    <CardDescription className={`mt-2 ${isOnLandingPage ? 'text-foreground/70' : 'text-gray-600 dark:text-gray-300'}`}>
                      Unlock your full potential
                    </CardDescription>
                    <div className="mt-4 sm:mt-6">
                      <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${isOnLandingPage ? 'text-foreground' : 'text-gray-900 dark:text-white'}`}>$9.99</span>
                      <span className={`text-lg sm:text-xl ${isOnLandingPage ? 'text-foreground/70' : 'text-gray-600 dark:text-gray-300'}`}>/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 px-4 sm:px-6 flex-1 flex flex-col">
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                      {features.members.premium.map((feature, index) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-foreground rounded-full flex-shrink-0"></div>
                          <span className={`text-sm sm:text-base ${isOnLandingPage ? 'text-foreground/80' : 'text-gray-700 dark:text-gray-300'}`}>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-4 sm:py-6 text-base sm:text-lg">
                        Start Premium
                      </Button>
                    </motion.div>
                    <p className={`text-center text-xs sm:text-sm mt-3 sm:mt-4 ${isOnLandingPage ? 'text-foreground/60' : 'text-gray-500 dark:text-gray-400'}`}>
                      7-day free trial included
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}