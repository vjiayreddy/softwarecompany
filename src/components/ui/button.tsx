'use client'

import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-medium transition-[color,background-color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-none hover:bg-primary-deep active:bg-primary-deep',
        destructive: 'bg-destructive text-destructive-foreground shadow-none hover:bg-destructive/90',
        outline:
          'border border-zf-hairline-strong bg-background text-foreground shadow-none hover:bg-secondary',
        secondary: 'bg-secondary text-secondary-foreground shadow-none hover:bg-zf-hairline-cool',
        ghost: 'hover:bg-secondary hover:text-foreground',
        link: 'text-foreground underline-offset-4 hover:underline rounded-none',
      },
      size: {
        clear: '',
        default: 'h-9 px-4 py-2 has-[>svg]:px-3 type-button-md',
        sm: 'h-8 rounded-[6px] px-3 has-[>svg]:px-2.5 type-button-md',
        lg: 'h-10 rounded-[6px] px-6 has-[>svg]:px-4 type-button-md',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({ asChild = false, className, size, variant, ...props }) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
