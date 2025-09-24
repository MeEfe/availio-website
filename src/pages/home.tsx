import LandingPage from "./landing-page";
import { Testimonials } from "@/components/ui/testimonials";
import { KeyInfo } from "@/components/ui/key-info";

export default function Home() {
  return (
    <>
      <LandingPage />
      <KeyInfo />
      <Testimonials />
    </>
  );
}