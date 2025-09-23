import { cn } from "@/lib/utils";

interface KeyInfoItem {
  number: string;
  title: string;
  description: string;
}

interface KeyInfoProps {
  className?: string;
}

function KeyInfo({ className }: KeyInfoProps) {
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
    <div className={cn("bg-foreground w-full py-20", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[200px]",
              index % 2 === 0 ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[1fr_280px]"
            )}>
              {/* Number and Title Section */}
              <div className={cn(
                "relative flex flex-col justify-center",
                index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
              )}>
                {/* Background Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12rem] lg:text-[15rem] font-black text-primary/5 select-none leading-none">
                    {item.number}
                  </span>
                </div>

                {/* Foreground Content */}
                <div className={cn(
                  "relative z-10 space-y-4",
                  index % 2 === 0 ? "text-left" : "lg:text-right"
                )}>
                  <div className={cn(
                    "flex items-center gap-3",
                    index % 2 === 0 ? "justify-start" : "lg:justify-end"
                  )}>
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="text-sm font-semibold text-primary tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-bold text-background leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className={cn(
                "relative flex items-center",
                index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"
              )}>
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl leading-relaxed text-background/80 max-w-none">
                    {item.description}
                  </p>

                  {/* Subtle accent line */}
                  <div className={cn(
                    "w-24 h-[1px] bg-gradient-to-r from-primary to-transparent",
                    index % 2 === 0 ? "" : "lg:ml-auto"
                  )}></div>
                </div>
              </div>
            </div>

            {/* Connecting line between sections (except last) */}
            {index < items.length - 1 && (
              <div className="absolute left-1/2 bottom-[-3rem] w-[1px] h-12 bg-gradient-to-b from-primary/20 to-transparent transform -translate-x-1/2"></div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export { KeyInfo };