import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const founders = [
  {
    name: "Efdal Erter",
    bio: "Former fitness tech executive with 10+ years of experience in digital transformation.",
    linkedin: "https://www.linkedin.com/in/efdal-erter-394211227/",
    github: "https://github.com/MeEfe",
    email: "efdal.erter@students.fhv.at",
  },
  {
    name: "Patrick Jenny",
    bio: "IoT specialist and software architect passionate about connecting physical and digital spaces.",
    linkedin: "https://www.linkedin.com/in/patrick-jenny-778299206/",
    github: "https://github.com/Patinator01",
    email: "patrick.jenny@students.fhv.at",
  },
  {
    name: "Sedef Keser",
    bio: "Product designer with a background in fitness and wellness, focused on user-centric solutions.",
    linkedin: null,
    github: "https://github.com/sedef-keser",
    email: "sedef.keser@students.fhv.at",
  },
];

export default function About() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 lg:py-20 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            About Availio
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're building the future of fitness technology, connecting gyms and members through intelligent IoT solutions.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mb-16 sm:mb-20 lg:mb-24 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-br from-foreground/5 to-foreground/10 dark:from-foreground/10 dark:to-foreground/5 rounded-2xl p-8 sm:p-10 lg:p-12 border border-foreground/20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Empowering gyms with data-driven insights and providing members with seamless experiences. We believe in making fitness accessible, efficient, and enjoyable for everyone.
            </p>
          </div>
        </motion.div>

        {/* Founders Section */}
        <div className="mb-8 sm:mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Meet the Founders
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-accent dark:hover:border-accent transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-foreground/20 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {founder.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {founder.linkedin && (
                    <motion.a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  <motion.a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${founder.email}`}
                    className="p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
