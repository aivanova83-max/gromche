import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Обёртка над Button из shadcn (см. CLAUDE.md: ui/ не редактируем вручную).
// Все CTA сайта используют скруглённую "таблетку" — это тот фактический
// стиль кнопок, который раньше дублировался через rounded-full на каждом вызове.
const CtaButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "hero", ...props }, ref) => (
    <Button ref={ref} variant={variant} className={cn("rounded-full", className)} {...props} />
  ),
);
CtaButton.displayName = "CtaButton";

export { CtaButton };
