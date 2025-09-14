import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import ReactLogo from "../../assets/black_logo.svg";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      role="banner"
      aria-label="Site header"
    >
      <div className="h-[80px] w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div
          className="mx-auto flex h-full max-w-full items-center justify-between 
  px-4 md:px-20 lg:px-40 xl:px-60"
        >
          {/* Left: Icon slot + (optional) brand */}
          <div className="flex items-center gap-1">
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
          </div>

          <nav aria-label="Primary" className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-3 py-2">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-3 py-2">
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-3 py-2">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="px-3 py-2">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}
