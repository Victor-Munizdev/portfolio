import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonLink = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-bone text-canvas hover:bg-white",
        secondary: "border border-line-strong text-bone hover:border-bone hover:bg-surface-2",
      },
    },
    defaultVariants: { variant: "primary" },
  },
)

type ButtonLinkProps = ComponentProps<"a"> & VariantProps<typeof buttonLink>

export function ButtonLink({ className, variant, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonLink({ variant }), className)} {...props} />
}
