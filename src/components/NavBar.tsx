import Link from "next/link";
import { montserrat } from "@/lib/fonts";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="z-10 w-full flex items-center justify-between text-lg">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              className="relative"
              src="/pillv3.png"
              alt="logo"
              width={20}
              height={20}
              priority
            />
          </Link>
          <Link href={"/"}>
            <p className={montserrat.className}>studio pill</p>
          </Link>
        </div>

        <div className="hidden lg:flex flex-row gap-5">
          <Link href={"/architecture"}>
            <p className={montserrat.className}>architecture</p>
          </Link>
          <p className={montserrat.className}>-</p>
          <Link href={"/interior"}>
            <p className={montserrat.className}>interior</p>
          </Link>
          <p className={montserrat.className}>-</p>
          <Link href={"/about"}>
            <p className={montserrat.className}>about</p>
          </Link>
          <p className={montserrat.className}>-</p>
          <Link href={"/contact"}>
            <p className={montserrat.className}>contact</p>
          </Link>
        </div>

        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          <Image
            src={isMenuOpen ? "/menu-close.svg" : "/menu-icon.svg"}
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 mx-auto">
          <Link href={"/architecture"}>
            <p className={montserrat.className}>architecture</p>
          </Link>
          <Link href={"/interior"}>
            <p className={montserrat.className}>interior</p>
          </Link>
          <Link href={"/about"}>
            <p className={montserrat.className}>about</p>
          </Link>
          <Link href={"/contact"}>
            <p className={montserrat.className}>contact</p>
          </Link>
        </div>
      )}
    </>
  );
}
