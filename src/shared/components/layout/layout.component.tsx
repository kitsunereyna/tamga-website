import { FC, PropsWithChildren } from "react";
import { Navbar } from "../navbar/navbar.component";
import { Footer } from "../footer/footer.component";
import Head from "next/head";

interface LayoutProps extends PropsWithChildren {
  title: string;
  description: string;
}

export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div className="relative flex flex-col mx-auto w-full min-h-screen bg-[#1A1A1A] text-white font-montserrat">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content={description}
          key="description"
        />
      </Head>

      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};
