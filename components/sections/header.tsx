"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 flex items-center justify-between py-4 md:py-6 backdrop-blur-sm bg-background/80 transition-[border-color] duration-200 ${isScrolled ? 'border-b border-border' : 'border-b border-transparent'}`}
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', paddingLeft: 'max(1rem, calc(50vw - 480px + 1rem))', paddingRight: 'max(1rem, calc(50vw - 480px + 1rem))' }}
    >
      <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
        <Image src="/av.svg" alt="AV" width={32} height={32} className="dark:invert" />
        {/* <span className="text-sm font-semibold tracking-tight leading-none">Abduvokhid Akhmedov</span> */}
      </Link>
      <ThemeToggle />
    </header>
  );
}
