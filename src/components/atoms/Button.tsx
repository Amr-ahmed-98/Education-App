import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed capitalize",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:opacity-90 focus-visible:ring-primary cursor-pointer",
        secondary:
          "bg-secondary text-white hover:opacity-90 focus-visible:ring-secondary cursor-pointer",
        outline1:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary cursor-pointer",
        outline2:
          "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus-visible:ring-secondary cursor-pointer",
        ghost:
          "text-primary hover:bg-primary/10 focus-visible:ring-primary cursor-pointer",
        white:
          "bg-white text-text dark:text-black hover:opacity-90 focus-visible:ring-white cursor-pointer",
      },
      size: {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-sm rounded-lg",
        lg: "px-6 py-3 text-lg rounded-lg",
        xl: "px-8 py-4 text-xl rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  path?: string;
  center?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      loading = false,
      disabled = false,
      type = "button",
      path,
      center = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const buttonContent = (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </Comp>
    );

    const wrappedContent = path ? (
      <Link to={path}>{buttonContent}</Link>
    ) : (
      buttonContent
    );

    return center ? (
      <div className="flex justify-center">{wrappedContent}</div>
    ) : (
      wrappedContent
    );
  }
);

Button.displayName = "Button";

export  { Button, buttonVariants };
