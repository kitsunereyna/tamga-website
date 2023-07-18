import { NAVBAR_LINKS } from "@/shared/config/pages";
import { Logo } from "../logo/logo.component";
import { NavbarLink } from "./components/navbar-link";
import { NavbarSocials } from "./components/navbar-socials";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [colorChanged, setColorChanged] = useState(false);

  const changeNavbarColor = () => {
    setColorChanged(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  const renderedLinks = Object.entries(NAVBAR_LINKS).map(([key, value]) => (
    <li
      key={value.id}
      className="uppercase text-base text-white hover:text-gray-300"
    >
      <NavbarLink label={value.label} sectionId={value.id} />
    </li>
  ));

  return (
    <header
      className="container mx-auto fixed inset-x-0 top-2 flex 
        flex-row items-center justify-between gap-4 py-4 px-6
        transition-all duration-200 rounded-xl z-50"
      style={{ backgroundColor: colorChanged ? "#1A1A1A" : "transparent" }}
    >
      <Logo />

      <ul className="flex flex-row items-center gap-8">{renderedLinks}</ul>

      <NavbarSocials />
    </header>
  );
};
