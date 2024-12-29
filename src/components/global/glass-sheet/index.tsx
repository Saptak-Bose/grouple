import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: Readonly<ReactNode>;
  trigger: ReactNode;
  className?: string;
  triggerClass?: string;
};

export default function GlassSheet({
  children,
  trigger,
  className,
  triggerClass,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger className={cn(triggerClass)} asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent
        className={cn(
          "bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray",
          className,
        )}
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
