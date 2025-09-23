import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  href: string;
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
      { label: "Pricing", href: "#" },
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
  companyName = "Acme Inc.",
  tagline = "Build faster. Ship better.",
  columns = defaultColumns,
  showLanguage = true,
  languages = defaultLanguages,
}: FooterProps) {
  const [email, setEmail] = React.useState("");
  const [submitState, setSubmitState] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [language, setLanguage] = React.useState(languages[0]?.code ?? "en");

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
    } catch (err) {
      setSubmitState("error");
    }
  }

  return (
    <footer
      role="contentinfo"
      aria-labelledby="footer-heading"
      className="border-t bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Middle: Link columns */}
        <nav aria-label="Footer navigation" className="flex justify-between">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-foreground/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 ease-out relative inline-block"
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
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <Separator className="my-10" />

        {/* Bottom: meta row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Contact mini-block */}
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Market Street, San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+1234567890" className="hover:text-foreground">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:support@acme.com"
                className="hover:text-foreground"
              >
                support@acme.com
              </a>
            </div>
          </div>

          {/* Social + Legal */}
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6 w-full md:w-auto">
            <TooltipProvider>
              <div className="flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="GitHub"
                      className="rounded-full"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Twitter"
                      className="rounded-full"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Twitter / X</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="LinkedIn"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            <div className="hidden md:block">
              <Separator orientation="vertical" className="h-6" />
            </div>

            {/* Newsletter */}
            <form
              aria-label="Newsletter subscription"
              onSubmit={handleSubscribe}
              className="w-full max-w-md"
            >
              <div className="grid gap-2">
                <Label htmlFor="email" className="sr-only">
                  Email address
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
                    className="flex-1"
                    autoComplete="email"
                    aria-invalid={submitState === "error"}
                    aria-describedby="subscribe-hint"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button type="submit" className="shrink-0">
                      <Send className="mr-2 h-4 w-4" />
                      Subscribe
                    </Button>
                  </motion.div>
                </div>
                <p
                  id="subscribe-hint"
                  className="text-xs text-muted-foreground"
                >
                  Join our monthly newsletter. No spam. Unsubscribe anytime.
                </p>
                <div className="text-sm" aria-live="polite" aria-atomic="true">
                  {submitState === "success" && (
                    <span className="text-green-600 dark:text-green-500">
                      You\'re in! Please check your inbox to confirm.
                    </span>
                  )}
                  {submitState === "error" && (
                    <span className="text-red-600 dark:text-red-500">
                      Please enter a valid email address.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-start justify-between gap-2 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
