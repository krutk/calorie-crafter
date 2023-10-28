"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href ? "text-yellow-400" : "text-white";
  };

  return (
    <header className="bg-[#3D405B]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-white"
        aria-label="Global"
      >
        <Link href="/">
          <div className={`text-lg font-lilita-one ${isActive("/")}`}>
            CalorieCrater
          </div>
        </Link>

        <Link href="/counter">
          <div className={`text-lg font-lilita-one ${isActive("/counter")}`}>
            Hub
          </div>
        </Link>

        <Link href="/recommender">
          <div
            className={`text-lg font-lilita-one ${isActive("/recommender")}`}
          >
            Suggester
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
