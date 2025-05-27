import { LucideIcon } from "lucide-react";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export interface ButtonAction {
  type: "button" | "link" | "modal" | "drawer" | "dropdown" | "custom";
  href?: string; // for links
  target?: string; // for links (_blank, _self, etc.)
  modalId?: string; // for modals
  drawerId?: string; // for drawers
  dropdownItems?: Array<{
    label: string;
    onClick: () => void;
    icon?: LucideIcon;
  }>; // for dropdowns
  customAction?: () => void; // for custom actions
}

export interface ButtonProps extends BaseButtonProps {
  action?: ButtonAction;
  onModalOpen?: (modalId: string) => void;
  onDrawerOpen?: (drawerId: string) => void;
}
