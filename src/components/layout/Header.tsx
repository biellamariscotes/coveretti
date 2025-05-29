// Header.tsx
"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavItem from "@/components/nav/NavItem";
import { getActiveNav } from "@/utils/nav";

export default function Header() {
  const pathname = usePathname();
  const activeNav = getActiveNav(pathname);

  console.log("Current route:", pathname);
  console.log("Active nav:", activeNav);
  console.log("Home is active:", activeNav === "home");

  return (
    <section>
      <div className="grid grid-cols-12 pt-6">
        <div className="col-start-3 col-span-8 grid grid-cols-5 items-center">
          <NavItem href="/" isActive={activeNav === "home"}>
            Home
          </NavItem>

          <NavItem href="/contact" isActive={activeNav === "contact"}>
            Contact
          </NavItem>

          <div className="flex items-center justify-center">
            <Image
              src="/brand/logo.png"
              alt="Description"
              width={80}
              height={80}
              className="rounded-full p-3 bg-white shadow-md"
            />
          </div>

          <NavItem href="/about" isActive={activeNav === "about"}>
            About
          </NavItem>

          <NavItem
            href="/getting-started"
            isActive={activeNav === "getting-started"}
          >
            Getting Started
          </NavItem>
        </div>
      </div>
    </section>
  );
}
