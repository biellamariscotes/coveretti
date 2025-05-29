// components/nav/NavItem.tsx
import Link from "next/link";
import { NavItemProps } from "@/interfaces/nav-item";
import { cn } from "@/utils/classnames";

export default function NavItem({
  children,
  isActive = false,
  href,
}: NavItemProps) {
  return (
    <div className="col-span-1 flex items-center justify-center uppercase font-bold">
      <Link
        href={href}
        className={cn(
          "tracking-wide border-b-4 transition-colors duration-200 cursor-pointer uppercase",
          isActive
            ? "border-[var(--color-primary)]"
            : "border-transparent hover:border-gray-400"
        )}
      >
        {children}
      </Link>
    </div>
  );
}
