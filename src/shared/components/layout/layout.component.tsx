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
    <div
      className="container flex mx-auto p-4 overflow-y-auto 
        min-h-screen w-full flex-col"
    >
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
