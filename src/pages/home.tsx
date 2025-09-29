import LandingPage from "./landing-page";
import { Testimonials } from "@/components/ui/testimonials";
import Pricing from "./pricing";
import { KeyInfo } from "@/components/ui/key-info";

export default function Home() {
  return (
    <>
      <LandingPage />
      <KeyInfo />
      <Pricing isOnLandingPage={true} />
      <Testimonials />
    </>
  );
}
