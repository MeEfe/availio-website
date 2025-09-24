import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

// --- Types -----------------------------------------------------------------
export type FooterLink = {
  label: string;
  href?: string;
  to?: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterProps = {
  companyName?: string;
  tagline?: string;
  columns?: FooterColumn[];
  showLanguage?: boolean;
  languages?: { code: string; label: string }[];
};

// --- Defaults ---------------------------------------------------------------
const defaultColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", to: "/pricing" },
      { label: "Changelog", href: "#" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];


// --- Component --------------------------------------------------------------
export default function ElegantFooter({
  companyName = "Availio Inc.",
  columns = defaultColumns,
}: FooterProps) {
  const [email, setEmail] = React.useState("");
  const [submitState, setSubmitState] = React.useState<
    "idle" | "success" | "error"
  >("idle");

  function isValidEmail(value: string) {
    return /\S+@\S+\.\S+/.test(value);
  }

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    // Replace with your real subscription call.
    if (!isValidEmail(email)) {
      setSubmitState("error");
      return;
    }
    try {
      // await api.subscribe(email)
      await new Promise((r) => setTimeout(r, 450));
      setSubmitState("success");
      setEmail("");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <footer
      role="contentinfo"
      aria-labelledby="footer-heading"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] opacity-20"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Middle: Link columns */}
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-12 justify-center items-start text-center">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <motion.div
                        className="text-slate-300 hover:text-white transition-all duration-300 ease-out relative inline-block group text-sm"
                        whileHover="hover"
                        initial="initial"
                        variants={{
                          initial: {},
                          hover: {}
                        }}
                      >
                        <Link to={link.to} className="block">
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-accent rounded-full"
                            variants={{
                              initial: { width: "0%" },
                              hover: { width: "100%" }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                          {link.label}
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-slate-300 hover:text-white transition-all duration-300 ease-out relative inline-block group text-sm"
                        whileHover="hover"
                        initial="initial"
                        variants={{
                          initial: {},
                          hover: {}
                        }}
                      >
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-accent rounded-full"
                          variants={{
                            initial: { width: "0%" },
                            hover: { width: "100%" }
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                        {link.label}
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-12"></div>

        {/* Bottom: meta row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Contact mini-block */}
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
              <MapPin className="h-5 w-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              <span>123 Market Street, San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
              <Phone className="h-5 w-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
              <Mail className="h-5 w-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              <a
                href="mailto:support@availio.com"
                className="hover:text-white transition-colors"
              >
                support@availio.com
              </a>
            </div>
          </div>

          {/* Social + Legal */}
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    aria-label="GitHub"
                    className="btn btn-ghost btn-square tooltip rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all duration-300"
                    data-tip="GitHub"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    aria-label="Twitter"
                    className="btn btn-ghost btn-square tooltip rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all duration-300"
                    data-tip="Twitter / X"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    aria-label="LinkedIn"
                    className="btn btn-ghost btn-square tooltip rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all duration-300"
                    data-tip="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </button>
                </motion.div>
              </div>

            <div className="hidden md:block">
              <div className="w-px h-8 bg-slate-600"></div>
            </div>

            {/* Newsletter */}
            <form
              aria-label="Newsletter subscription"
              onSubmit={handleSubscribe}
              className="w-full max-w-md"
            >
              <div className="grid gap-3">
                <label htmlFor="email" className="text-white font-medium">
                  Stay updated with our newsletter
                </label>
                <div className="flex gap-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submitState !== "idle") setSubmitState("idle");
                    }}
                    className="input flex-1 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                    autoComplete="email"
                    aria-invalid={submitState === "error"}
                    aria-describedby="subscribe-hint"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <button type="submit" className="btn btn-primary shrink-0 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 text-white text-sm px-3 py-2">
                      <Send className="h-4 w-4" />
                    </button>
                  </motion.div>
                </div>
                <p
                  id="subscribe-hint"
                  className="text-xs text-slate-400"
                >
                  Join our monthly newsletter. No spam. Unsubscribe anytime.
                </p>
                <div className="text-sm" aria-live="polite" aria-atomic="true">
                  {submitState === "success" && (
                    <span className="text-green-400">
                      You\'re in! Please check your inbox to confirm.
                    </span>
                  )}
                  {submitState === "error" && (
                    <span className="text-red-400">
                      Please enter a valid email address.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-8"></div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
