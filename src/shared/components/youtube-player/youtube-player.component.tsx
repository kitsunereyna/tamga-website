import { FC } from "react";
import YouTube from "react-youtube";

interface YoutubePlayerProps {
  videoId: string;
  height?: string;
  width?: string;
}

export const YoutubePlayer: FC<YoutubePlayerProps> = ({
  videoId,
  width,
  height,
}) => {
  const opts = {
    height: height ?? "390px",
    width: width ?? "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

// export const YoutubePlayer: FC<YoutubePlayerProps> = ({
//   videoId,
//   width,
//   height,
//   className,
// }) => {
//   const opts = {
//     height: height ?? 390,
//     width: width ?? 640,
//     playerVars: {
//       autoplay: 0,
//     },
//   };

//   const youtubeVideUrl = getYoutubeVideoId(videoId);

//   return <object data={youtubeVideUrl} className={className} />;
// };
