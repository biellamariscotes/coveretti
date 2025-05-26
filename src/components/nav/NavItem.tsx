import { NavItemProps } from "@/interfaces/nav-item";

export default function NavItem({
  children,
  isActive = false,
  onClick,
}: NavItemProps) {
  return (
    <div className="col-span-2 flex items-center justify-center uppercase font-bold">
      <button
        onClick={onClick}
        className={`border-b-4 transition-colors duration-200 cursor-pointer uppercase ${
          isActive
            ? "border-[var(--color-primary)]"
            : "border-transparent hover:border-gray-400"
        }`}
      >
        {children}
      </button>
    </div>
  );
}
