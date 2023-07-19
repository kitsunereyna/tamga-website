import { HeroBackgorund } from "@/shared/components/hero-background/hero-background.component";
import { NAVBAR_LINKS } from "@/shared/config/pages";
import Image from "next/image";

const IMAGE_URL =
  "https://c.wallhere.com/photos/f6/65/2000x1466_px_leopard_Shaman-1506693.jpg!d";

export const LandingBanner = () => {
  return (
    <HeroBackgorund
      id={NAVBAR_LINKS.HOME.id}
      priority
      className="bg-shaman"
      alt={"Landing Banner"}
    >
      <div className="w-full md:w-1/2  text-white">
        <div className="text-7xl font-bebas">
          IMMERSE INTO THE PAST OF <br></br>THE GREAT STEPPE
        </div>

        <div className="pt-8 text-2xl font-montserrat">
          Become a part of the history with TAMGA
        </div>

        <button className="mt-12 bg-[#C96A13] px-10 py-4 rounded-[14px] text-l font-montserrat">
          Purchase now
        </button>

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
