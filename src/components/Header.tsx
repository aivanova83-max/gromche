import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import logoGromche from "@/assets/logo-gromche-header.png";
import { navItems } from "@/data/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const isRouteLink = (href: string) => !href.includes("#");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="inline-block shrink-0">
          <img src={logoGromche} alt="Хор «Громче»" className="h-10 w-auto" />
        </Link>

        <nav className="max-md:hidden flex items-center gap-6">
          {navItems.map((item) =>
            isRouteLink(item.href) ? (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Открыть меню">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>Меню</SheetTitle>
            <nav className="mt-6 flex flex-col gap-4">
              {navItems.map((item) =>
                isRouteLink(item.href) ? (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
