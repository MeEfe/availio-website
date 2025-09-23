import * as React from "react";
import { cn } from "@/lib/utils";
import { BarChart3, Eye, Zap, Users, TrendingUp } from "lucide-react";

interface KeyInfoItem {
  icon?: React.ReactNode;
  title: string;
  description: string;
  value?: string;
}

interface KeyInfoProps {
  className?: string;
}

function KeyInfo({ className }: KeyInfoProps) {
  const items: KeyInfoItem[] = [
    {
      icon: <BarChart3 size={32} />,
      title: "Utilization",
      description: "Optimize equipment usage and space allocation"
    },
    {
      icon: <Eye size={32} />,
      title: "Clarity",
      description: "Clear insights into gym operations and performance"
    },
    {
      icon: <Zap size={32} />,
      title: "Efficiency",
      description: "Streamlined processes and reduced wait times"
    },
    {
      icon: <Users size={32} />,
      title: "Happy Gym Visitors",
      description: "Enhanced member experience and satisfaction"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Analytic Decision Making",
      description: "Data-driven insights for better gym management"
    }
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-6",
        className
      )}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-card text-card-foreground rounded-lg border p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center gap-3 mb-4">
            {item.icon && (
              <div className="text-foreground">
                {item.icon}
              </div>
            )}
            <h3 className="font-semibold text-lg">{item.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export { KeyInfo };