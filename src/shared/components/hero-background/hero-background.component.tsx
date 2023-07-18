import Image from "next/image";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface HeroBackgorundProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  url: string;
  alt: string;
  priority?: boolean;

  opacity?: number;
}

export const HeroBackgorund: FC<HeroBackgorundProps> = ({
  url,
  alt,
  priority = false,
  children,
  ...props
}) => {
  return (
    <div className="relative w-full h-screen flex items-center" {...props}>
      <Image
        priority={priority}
        src={url}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      <div className="z-10 container mx-auto px-4">{children}</div>
    </div>
  );
};
