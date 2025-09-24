import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

const defaultLanguages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
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
      className="relative bg-gradient-to-br from-foreground via-foreground/90 to-foreground text-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] opacity-20"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Middle: Link columns */}
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-12 justify-center items-start text-center">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-background mb-4 tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <motion.div
                        className="text-background/80 hover:text-background transition-all duration-300 ease-out relative inline-block group text-sm"
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
                        className="text-background/80 hover:text-background transition-all duration-300 ease-out relative inline-block group text-sm"
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

        <div className="h-px bg-gradient-to-r from-transparent via-background/40 to-transparent my-12"></div>

        {/* Bottom: meta row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Contact mini-block */}
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group">
              <MapPin className="h-5 w-5 text-background/60 group-hover:text-background/80 transition-colors" />
              <span>123 Market Street, San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group">
              <Phone className="h-5 w-5 text-background/60 group-hover:text-background/80 transition-colors" />
              <a href="tel:+1234567890" className="hover:text-background transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group">
              <Mail className="h-5 w-5 text-background/60 group-hover:text-background/80 transition-colors" />
              <a
                href="mailto:support@availio.com"
                className="hover:text-background transition-colors"
              >
                support@availio.com
              </a>
            </div>
          </div>

          {/* Social + Legal */}
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6 w-full md:w-auto">
            <TooltipProvider>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="GitHub"
                        className="rounded-full bg-background/20 hover:bg-background/30 text-background/80 hover:text-background border border-background/30 hover:border-background/50 transition-all duration-300"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Twitter"
                        className="rounded-full bg-background/20 hover:bg-background/30 text-background/80 hover:text-background border border-background/30 hover:border-background/50 transition-all duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>Twitter / X</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="LinkedIn"
                        className="rounded-full bg-background/20 hover:bg-background/30 text-background/80 hover:text-background border border-background/30 hover:border-background/50 transition-all duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            <div className="hidden md:block">
              <div className="w-px h-8 bg-background/40"></div>
            </div>

            {/* Newsletter */}
            <form
              aria-label="Newsletter subscription"
              onSubmit={handleSubscribe}
              className="w-full max-w-md"
            >
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-background font-medium">
                  Stay updated with our newsletter
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (submitState !== "idle") setSubmitState("idle");
                    }}
                    className="flex-1 bg-background/20 border-background/30 text-background placeholder:text-background/60 focus:border-accent focus:ring-accent/20"
                    autoComplete="email"
                    aria-invalid={submitState === "error"}
                    aria-describedby="subscribe-hint"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button type="submit" className="shrink-0 bg-background/30 hover:bg-background/40 border border-background/40 hover:border-background/50 text-background text-sm px-3 py-2">
                      <Send className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
                <p
                  id="subscribe-hint"
                  className="text-xs text-background/60"
                >
                  Join our monthly newsletter. No spam. Unsubscribe anytime.
                </p>
                <div className="text-sm" aria-live="polite" aria-atomic="true">
                  {submitState === "success" && (
                    <span className="text-accent">
                      You\'re in! Please check your inbox to confirm.
                    </span>
                  )}
                  {submitState === "error" && (
                    <span className="text-destructive">
                      Please enter a valid email address.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-background/40 to-transparent my-8"></div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
