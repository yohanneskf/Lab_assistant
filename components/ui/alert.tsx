import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-xl border px-5 py-4 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*5)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-4 gap-y-1 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 transition-all duration-300 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        destructive:
          "text-destructive bg-destructive/5 border-destructive/20 [&>svg]:text-destructive *:data-[slot=alert-description]:text-destructive/80",
        success:
          "text-emerald-600 bg-emerald-500/5 border-emerald-500/20 [&>svg]:text-emerald-500 *:data-[slot=alert-description]:text-emerald-600/80",
        warning:
          "text-orange-600 bg-orange-500/5 border-orange-500/20 [&>svg]:text-orange-500 *:data-[slot=alert-description]:text-orange-600/80",
        info: "text-blue-600 bg-blue-500/5 border-blue-500/20 [&>svg]:text-blue-500 *:data-[slot=alert-description]:text-blue-600/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-bold tracking-tight text-base",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm font-medium [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
