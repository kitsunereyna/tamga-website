import { HeroBackgorund } from "@/shared/components/hero-background/hero-background.component";
import { NAVBAR_LINKS } from "@/shared/config/pages";
import Image from "next/image";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1574681401861-07d9d0427871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export const LandingBanner = () => {
  return (
    <HeroBackgorund
      id={NAVBAR_LINKS.HOME.id}
      priority
      url={IMAGE_URL}
      alt={"Landing Banner"}
    >
      <div className="w-full md:w-1/2 text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo aut //
        suscipit repudiandae accusamus labore! Earum magni nam quia doloremque
        aperiam quas, ea rem a eius! Provident, sequi! Qui, asperiores //
        dignissimos?
      </div>
    </HeroBackgorund>
  );
};

// <div
//   id={NAVBAR_LINKS.HOME.id}
//   className="relative w-full h-screen bg-cover bg-center
//         flex flex-col items-start justify-center brightness-75"
//   style={{ backgroundImage: `url(${IMAGE_URL})` }}
// >
//   <div className="container mx-auto px-4">
//
//   </div>
// </div>;
