// Header.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import NavItem from "../nav/NavItem";

export default function Header() {
  const [activeNav, setActiveNav] = useState<string>("get-started");

  return (
    <section>
      <div className="grid grid-cols-12 pt-6">
        <div className="col-start-3 col-span-8 grid grid-cols-5 items-center">
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

          <div className="flex items-center justify-center">
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
      </div>
    </section>
  );
}
