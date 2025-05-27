"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      icon: Icon,
      iconPosition = "left",
      children,
      className,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-primary-600 hover:bg-accent text-white",
      secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
      danger: "bg-red-600 hover:bg-red-700 text-white",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          className
        )}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon size={16} />}
        {children}
        {Icon && iconPosition === "right" && <Icon size={16} />}
      </button>
    );
  }
);

Button.displayName = "Button";
