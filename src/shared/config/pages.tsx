import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

export const PAGES = {
  LANDING: {
    link: "/",
    label: "Home",
  },
};

export const NAVBAR_LINKS = {
  HOME: { id: "home", label: "Home" },
  TRAILER: { id: "story", label: "Story" },
  CHARACHTERS: { id: "charachters", label: "Charachters" },
  NEWS: { id: "news", label: "News" },
};

export const SOCIAL_LINKS = {
  INST: {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: <AiFillInstagram />,
  },
  TIKTOK: {
    href: "https://www.tiktok.com/",
    label: "TikTok",
    icon: <FaTiktok />,
  },
  YOUTUBE: {
    href: "https://www.youtube.com/",
    label: "YouTube",
    icon: <AiFillYoutube />,
  },
  TELEGRAM: {
    href: "https://web.telegram.org/a/",
    label: "Telegram",
    icon: <BiLogoTelegram />,
  },
};
