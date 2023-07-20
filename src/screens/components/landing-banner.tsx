import { HeroBackgorund } from "@/shared/components/hero-background/hero-background.component";
import { NAVBAR_LINKS } from "@/shared/config/pages";
import BannerImage from "../../../public/assets/images/main.jpg";

export const LandingBanner = () => {
  return (
    <HeroBackgorund
      id={NAVBAR_LINKS.HOME.id}
      priority
      url={BannerImage}
      alt={"Landing Banner"}
    >
      <div className="w-full md:w-1/2 text-white">
        <div className="text-3xl md:text-5xl uppercase font-bold">
          IMMERSE INTO THE PAST OF <br></br>THE GREAT STEPPE
        </div>

        <div className="mt-5 text-xl">
          Become a part of the history with TAMGA
        </div>

        <button className="mt-8 bg-[#e48023] px-10 py-4 rounded-xl text-base">
          Purchase now
        </button>
      </div>
    </HeroBackgorund>
  );
};
