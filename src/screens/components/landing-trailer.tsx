import { HeroBackgorund } from "@/shared/components/hero-background/hero-background.component";
import { NAVBAR_LINKS, YOUTUBE_TRAILER_ID } from "@/shared/config/pages";
import TrailerBgImage from "../../../public/assets/images/trailer.png";
import { YoutubePlayer } from "@/shared/components/youtube-player/youtube-player.component";

export const LandingTrailer = () => {
  return (
    <HeroBackgorund
      id={NAVBAR_LINKS.TRAILER.id}
      priority
      url={TrailerBgImage}
      alt={"Trailler Background"}
    >
      <div className="flex justify-center items-center gap-y-14 flex-col lg:flex-row lg:gap-28">
        <div className="flex text-white flex-col gap-6">
          <div className="text-3xl md:text-4xl font-bold">
            THE HISTORY THAT <br></br> CHANGED EVERYTHING
          </div>

          <div className="text-base text-gray-300">
            TAMGA - is more than just a game, here you will become the
            protagonist of a long-forgotten legend set under Tomyris rule. Get
            an amazing experience, interact with people of strength, and
            experience the true essence of the era of kings and warriors. Join
            us to enjoy an incredible story that will leave you with lasting
            memories.
          </div>
        </div>
        <div className="w-full min-w-[500px] lg:min-w-[600px]">
          <YoutubePlayer videoId={YOUTUBE_TRAILER_ID} />
        </div>
      </div>
    </HeroBackgorund>
  );
};
