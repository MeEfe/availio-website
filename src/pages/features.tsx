import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Monitor, Smartphone, Users, BarChart3, Clock, Shield, Zap, Heart, Trophy, Calendar, Bell, MapPin } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  dashboard?: boolean;
  mobile?: boolean;
}

const features: Feature[] = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Real-time Analytics",
    description: "Track equipment usage, member activity, and revenue streams with live data visualization",
    dashboard: true,
    mobile: false
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Member Management",
    description: "Complete member profiles, check-in history, and membership status tracking",
    dashboard: true,
    mobile: false
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Equipment Availability",
    description: "See which equipment is free in real-time and plan your workout accordingly",
    dashboard: false,
    mobile: true
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Class Booking",
    description: "Book fitness classes, view schedules, and get notifications for upcoming sessions",
    dashboard: false,
    mobile: true
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security & Access",
    description: "Manage gym access, security protocols, and member authentication systems",
    dashboard: true,
    mobile: false
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Workout Tracking",
    description: "Log exercises, track progress, and achieve your fitness goals with detailed insights",
    dashboard: false,
    mobile: true
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Smart Notifications",
    description: "Get alerts about equipment availability, class reminders, and gym updates",
    dashboard: true,
    mobile: true
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Health Monitoring",
    description: "Track vital health metrics and integrate with popular fitness devices",
    dashboard: false,
    mobile: true
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Revenue Tracking",
    description: "Monitor income streams, membership sales, and financial performance metrics",
    dashboard: true,
    mobile: false
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Gym Locator",
    description: "Find nearby partner gyms and access your membership across multiple locations",
    dashboard: false,
    mobile: true
  }
];

export default function Features() {
  const [activeView, setActiveView] = useState<'dashboard' | 'mobile' | 'both'>('both');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const filteredFeatures = features.filter(feature => {
    if (activeView === 'both') return true;
    if (activeView === 'dashboard') return feature.dashboard;
    if (activeView === 'mobile') return feature.mobile;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-20 pb-32"
        style={{ y: heroY }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-black tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-foreground">Powerful </span>
              <span className="text-accent">Features</span>
              <br />
              <span className="text-foreground">Two Platforms</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how our dashboard and mobile app work together to revolutionize gym management and member experience
            </motion.p>
          </motion.div>

          {/* Platform Toggle */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card border border-border rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {[
                  { key: 'dashboard', label: 'Dashboard', icon: <Monitor className="w-4 h-4" /> },
                  { key: 'both', label: 'All Features', icon: null },
                  { key: 'mobile', label: 'Mobile App', icon: <Smartphone className="w-4 h-4" /> }
                ].map((option) => (
                  <motion.button
                    key={option.key}
                    onClick={() => setActiveView(option.key as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                      activeView === option.key
                        ? 'bg-accent text-accent-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option.icon}
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredFeatures.map((feature, index) => (
              <FeatureCard
                key={`${feature.title}-${activeView}`}
                feature={feature}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Two Powerful <span className="text-accent">Platforms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dashboard and mobile app work together to create a seamless gym ecosystem for owners and members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dashboard Platform */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <Monitor className="w-8 h-8 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dashboard Platform</h3>
                    <p className="text-gray-600 text-sm">For Gym Owners & Staff</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 text-lg">
                  Complete gym management solution with powerful analytics and operational tools
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {features.filter(f => f.dashboard).map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="bg-white p-2 rounded-lg shadow-sm flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>

            {/* Mobile Platform */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <Smartphone className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Mobile App</h3>
                    <p className="text-gray-600 text-sm">For Gym Members</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-8 text-lg">
                  Your personal fitness companion with real-time gym insights and workout tracking
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {features.filter(f => f.mobile).map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      className="flex items-start gap-3 p-4 bg-secondary/10 rounded-xl"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="bg-white p-2 rounded-lg shadow-sm flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getPlatformBadges = () => {
    const badges = [];
    if (feature.dashboard) {
      badges.push(
        <span key="dashboard" className="bg-foreground text-background px-2 py-1 rounded-md text-xs font-medium">
          Dashboard
        </span>
      );
    }
    if (feature.mobile) {
      badges.push(
        <span key="mobile" className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
          Mobile
        </span>
      );
    }
    return badges;
  };

  return (
    <motion.div
      ref={ref}
      className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      layout
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-muted/50 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
            {feature.icon}
          </div>
          <div className="flex gap-1">
            {getPlatformBadges()}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors duration-300">
          {feature.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}