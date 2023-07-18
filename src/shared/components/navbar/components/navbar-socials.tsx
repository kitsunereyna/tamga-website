import { SOCIAL_LINKS } from "@/shared/config/pages";
import Link from "next/link";

export const NavbarSocials = () => {
  const renderedLinks = Object.entries(SOCIAL_LINKS).map(([key, value]) => (
    <li
      key={value.label}
      className="uppercase text-lg text-black hover:text-gray-600"
    >
      <Link href={value.href} target="_blank">
        <p className="rounded-full bg-white p-1">{value.icon}</p>
      </Link>
    </li>
  ));

  return <ul className="flex flex-row items-center gap-5">{renderedLinks}</ul>;
};
