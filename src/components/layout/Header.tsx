// Header.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import NavItem from "../nav/NavItem";

export default function Header() {
  const [activeNav, setActiveNav] = useState<string>("home");

  return (
    <section>
      <div className="grid grid-cols-11 grid-rows-1 md:gap-2 pt-6">
        <NavItem
          isActive={activeNav === "home"}
          onClick={() => setActiveNav("home")}
        >
          Home
        </NavItem>

        <NavItem
          isActive={activeNav === "contact"}
          onClick={() => setActiveNav("contact")}
        >
          Contact
        </NavItem>

        <div className="col-span-3 flex items-center justify-center">
          <Image
            src="/brand/logo.png"
            alt="Description"
            width={80}
            height={80}
            className="rounded-full p-3 bg-white shadow-md"
          />
        </div>

        <NavItem
          isActive={activeNav === "about"}
          onClick={() => setActiveNav("about")}
        >
          About
        </NavItem>

        <NavItem
          isActive={activeNav === "get-started"}
          onClick={() => setActiveNav("get-started")}
        >
          Get Started
        </NavItem>
      </div>
    </section>
  );
}
