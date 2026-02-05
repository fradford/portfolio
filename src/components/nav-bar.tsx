"use client";

import React from "react";
import NavLink from "./nav-link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menu = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="grid grid-cols-2 items-center justify-items-end w-full gap-4">
      <a href="/" className="justify-self-start">
        <Image src="/logo.svg" alt="Logo" width={48} height={48} priority />
      </a>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-l font-bold">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`md:flex ${isOpen ? "block" : "hidden"} col-span-2 md:col-span-1 justify-self-end text-right`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
          {menu.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
