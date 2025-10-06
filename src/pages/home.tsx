import LandingPage from "./landing-page";
import { Testimonials } from "@/components/ui/testimonials";
import Pricing from "./pricing";
import { KeyInfo } from "@/components/ui/key-info";
import Features from "./features";

export default function Home() {
  return (
    <>
      <LandingPage />
      <KeyInfo />
      <Features />
      <Pricing isOnLandingPage={true} />
      <Testimonials />
    </>
  );
}
