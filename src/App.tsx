import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import LandingPage from "./pages/landing-page";
import ThreeCursor from "./components/ui/three-cursor";
import { Testimonials } from "./components/ui/testimonials";
import { KeyInfo } from "./components/ui/key-info";

function App() {
  return (
    <>
      <ThreeCursor />
      <Header />
      <LandingPage />
      <KeyInfo />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
