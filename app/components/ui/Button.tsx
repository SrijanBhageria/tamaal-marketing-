"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-primary)] 
    text-white 
    hover:bg-[var(--color-primary-soft)] 
    focus:ring-[var(--color-primary)]
  `,
  secondary: `
    bg-[var(--color-secondary)] 
    text-white 
    hover:opacity-90 
    focus:ring-[var(--color-secondary)]
  `,
  outline: `
    bg-transparent 
    border-2 
    border-[var(--color-primary)] 
    text-[var(--color-primary)] 
    hover:bg-[var(--color-primary)] 
    hover:text-white 
    focus:ring-[var(--color-primary)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        inline-flex 
        items-center 
        justify-center 
        font-medium 
        rounded-lg 
        transition-colors 
        duration-200 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
