import { ReactNode } from "react";

export interface NavItemProps {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
