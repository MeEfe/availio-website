import LandingPage from "./landing-page";
import { Testimonials } from "@/components/ui/testimonials";
import { KeyInfo } from "@/components/ui/key-info";
import Pricing from "./pricing";

export default function Home() {
  return (
    <>
      <LandingPage />
      <KeyInfo />
      <Testimonials />
    </>
  );
}