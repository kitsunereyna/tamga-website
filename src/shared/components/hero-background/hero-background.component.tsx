import Image, { StaticImageData } from "next/image";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

export type BrightnessType = "0.5" | "0.7" | "1";

interface HeroBackgorundProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  url: string | StaticImageData;
  alt: string;
  priority?: boolean;
  brightness?: BrightnessType;
}

export const HeroBackgorund: FC<HeroBackgorundProps> = ({
  url,
  alt,
  priority = false,
  children,
  brightness = "0.5",
  ...props
}) => {
  return (
    <div {...props} className="relative w-full h-screen flex items-center">
      <Image
        priority={priority}
        src={url}
        alt={alt}
        layout="fill"
        className="object-cover"
        style={{ filter: `brightness(${brightness})` }}
      />

      <div className="z-10 container mx-auto px-4">{children}</div>
    </div>
  );
};
