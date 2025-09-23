import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import LandingPage from "./pages/landing-page";
import ThreeCursor from "./components/ui/three-cursor";
import { Testimonials } from "./components/ui/testimonials";

function App() {
  return (
    <>
      <ThreeCursor />
      <Header />
      <LandingPage />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
