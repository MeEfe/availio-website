import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ReactLogo from "../../assets/logo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      role="banner"
      aria-label="Site header"
    >
      <div className="h-[var(--app-header-height)] w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div
          className="mx-auto flex h-full max-w-full items-center justify-between
  px-4 md:px-20 lg:px-40 xl:px-60"
        >
          {/* Left: Icon slot + (optional) brand */}
          <Link to="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <div
              className="flex h-24 w-24 items-center justify-center"
              aria-label="Brand icon placeholder"
            >
              {/* Replace this placeholder with your SVG */}
              {/* <YourLogo className="h-6 w-6" /> */}
              <img src={ReactLogo} />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Availio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="px-3 py-2">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/features" className="px-3 py-2">
                      Features
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/pricing" className="px-3 py-2">
                      Pricing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className="px-3 py-2">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur">
            <nav className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
