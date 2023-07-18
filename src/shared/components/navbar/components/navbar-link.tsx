import Link from "next/link";
import { FC } from "react";

interface NavbarLinkProps {
  label: string;
  sectionId: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ label, sectionId }) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <p className="cursor-pointer" onClick={scrollToSection}>
      {label}
    </p>
  );
};
