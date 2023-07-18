import { Layout } from "@/shared/components/layout/layout.component";
import { LandingBanner } from "./components/landing-banner";
import { LandingTrailer } from "./components/landing-trailer";
import { LandingCharachters } from "./components/landing-charachters";
import { LandingNews } from "./components/landing-news";

export const HomeScreen = () => {
  return (
    <Layout title={"Tamga Landing Page"} description={"Tamga Description"}>
      <LandingBanner />
      <LandingTrailer />
      <LandingCharachters />
      <LandingNews />
    </Layout>
  );
};
