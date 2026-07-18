import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import logoGromche from "@/assets/logo-gromche-header.png";
import { navGroups, zapisItem } from "@/data/nav";
import { CtaButton } from "@/components/CtaButton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="inline-block shrink-0">
          <img src={logoGromche} alt="Хор «Громче»" className="h-10 w-auto" />
        </Link>

        <nav className="max-md:hidden flex items-center gap-2">
          {navGroups.map((group) => (
            <DropdownMenu key={group.label}>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary focus:outline-none">
                {group.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {group.items.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    onSelect={() => navigate(item.href)}
                    className="cursor-pointer text-foreground focus:bg-transparent focus:text-primary"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
          <CtaButton size="sm" className="ml-2" asChild>
            <Link to={zapisItem.href}>{zapisItem.label}</Link>
          </CtaButton>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Открыть меню">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>Меню</SheetTitle>
            <Accordion type="multiple" className="mt-6">
              {navGroups.map((group) => (
                <AccordionItem key={group.label} value={group.label}>
                  <AccordionTrigger className="text-base font-medium">
                    {group.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-4 pl-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="text-base text-foreground transition-colors hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Link
              to={zapisItem.href}
              className="block mt-4 text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {zapisItem.label}
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
