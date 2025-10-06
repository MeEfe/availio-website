import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Mail, Scale } from "lucide-react";

type ContentItem = {
  label: string;
  value: string;
  link?: string;
};

export default function Imprint() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const sections: { icon: React.ReactNode; title: string; content: ContentItem[] }[] = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Company Information",
      content: [
        { label: "Company Name", value: "Availio Inc." },
        { label: "Address", value: "Dornbirn, Austria" },
        { label: "Registration Number", value: "FN 123456 a" },
      ],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Details",
      content: [
        { label: "Email", value: "support@availio.com", link: "mailto:support@availio.com" },
        { label: "Phone", value: "+1 (234) 567-890", link: "tel:+1234567890" },
      ],
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal Representatives",
      content: [
        { label: "Managing Director", value: "John Doe" },
        { label: "Commercial Register", value: "Handelsgericht Wien" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 lg:py-20 px-4" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Imprint
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Legal information and contact details in accordance with legal requirements
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-foreground/10 rounded-lg text-foreground">
                  {section.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.content.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 sm:w-48 flex-shrink-0">
                      {item.label}
                    </span>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-base sm:text-lg text-foreground hover:text-accent transition-colors duration-200 font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base sm:text-lg text-gray-900 dark:text-white font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-12 sm:mt-16 bg-gradient-to-br from-foreground/5 to-foreground/10 dark:from-foreground/10 dark:to-foreground/5 rounded-2xl p-6 sm:p-8 border border-foreground/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Disclaimer
          </h3>
          <div className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              The content of this website has been compiled with meticulous care and to the best of our knowledge.
              However, we cannot assume any liability for the up-to-dateness, completeness or accuracy of any of the pages.
            </p>
            <p>
              Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele Media Act by German law), we as service
              providers are liable for our own content on these pages in accordance with general laws. However, pursuant to
              sections 8 to 10 of the TMG, we as service providers are not under obligation to monitor external information
              provided or stored on our website.
            </p>
            <p>
              All offers are non-binding and subject to change. We reserve the right to make changes, additions, or deletions
              to the information without prior notice.
            </p>
          </div>
        </motion.div>

        {/* Copyright Notice */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Availio Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
