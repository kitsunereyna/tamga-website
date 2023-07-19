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
