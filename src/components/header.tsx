"use client";

import { useEffect, useRef } from "react";

import NavBar from "./nav-bar";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("bg-paper-100", "dark:bg-ink-900");
        } else {
          headerRef.current.classList.remove("bg-paper-100", "dark:bg-ink-900");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="
      max-w-(--max-content-width) mx-auto mt-8 py-2 px-4 md:px-0 w-full 
      sticky top-0 left-0 right-0 z-10 
      font-sans 
      border-b border-border dark:border-border-dark"
      ref={headerRef}
    >
      <NavBar />
    </header>
  );
}
