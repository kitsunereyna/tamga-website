import { HeroBackgorund } from "@/shared/components/hero-background/hero-background.component";
import { NAVBAR_LINKS } from "@/shared/config/pages";
import BannerImage from "../../../public/assets/images/trailer.png";


export const LandingTrailer = () => {
  return (
    <HeroBackgorund
      id={NAVBAR_LINKS.HOME.id}
      priority
      url={BannerImage}
      alt={"Landing Banner"}
    >

      <div className="w-full flex gap-16">
        <div className="text-white flex flex-col ">
          <div className="text-6xl font-bebas">
          THE HISTORY THAT <br></br> CHANGED EVERYTHING
          </div>

          <div className="pt-8 text-lg font-montserrat">
          TAMGA - is more than just a game, here you will become the protagonist of a long-forgotten legend set under Tomyris rule. Get an amazing experience, interact with people of strength, and experience the true essence of the era of kings and warriors. Join us to enjoy an incredible story that will leave you with lasting memories.        </div>

        
        </div>
        <div className=" w-full aspect-w-16 aspect-h-9">
          <iframe
            src={"https://www.youtube.com/embed/" + "watch?v=2dM3hRQcs74"}
            title={"Teaser"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
       
      </div>
    </HeroBackgorund>
  );
};
