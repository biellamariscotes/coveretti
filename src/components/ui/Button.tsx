"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/interfaces/button";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      icon: Icon,
      iconPosition = "left",
      children,
      className,
      action,
      onModalOpen,
      onDrawerOpen,
      onClick,
      ...props
    },
    ref
  ) => {
    // Dynamic styles of the buttons
    const variants = {
      primary: "bg-primary-600 hover:bg-accent text-white",
      secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
      danger: "bg-red-600 hover:bg-red-700 text-white",
    };

    // Handle different action types
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Call the original onClick if provided
      if (onClick) {
        onClick(e);
      }

      if (action) {
        switch (action.type) {
          // Link Button
          case "link":
            if (action.href) {
              if (action.target === "_blank") {
                window.open(action.href, "_blank", "noopener,noreferrer");
              } else {
                window.location.href = action.href;
              }
            }
            break;

          // Modal Button
          case "modal":
            if (action.modalId && onModalOpen) {
              onModalOpen(action.modalId);
            }
            break;

          // Drawer Button
          case "drawer":
            if (action.drawerId && onDrawerOpen) {
              onDrawerOpen(action.drawerId);
            }
            break;

          // Custom Button
          case "custom":
            if (action.customAction) {
              action.customAction();
            }
            break;

          // Dropdown Button
          case "dropdown":
            // For dropdown, toggle a dropdown state
            // This would typically be handled by a parent component or state management
            console.log("Dropdown action triggered");
            break;

          default:
            break;
        }
      }
    };

    // Link action
    if (action?.type === "link" && action.href) {
      return (
        <a
          href={action.href}
          target={action.target}
          rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed no-underline",
            variants[variant],
            className
          )}
        >
          {Icon && iconPosition === "left" && <Icon size={16} />}
          {children}
          {Icon && iconPosition === "right" && <Icon size={16} />}
        </a>
      );
    }

    // Button
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          className
        )}
        onClick={handleClick}
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
