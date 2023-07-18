import { NAVBAR_LINKS } from "@/shared/config/pages";
import { NavbarLink } from "../navbar/components/navbar-link";

export const Logo = () => {
  return (
    <h1 className="font-caesar text-3xl text-white">
      <NavbarLink label={"TAMGA"} sectionId={NAVBAR_LINKS.HOME.id} />
    </h1>
  );
};
