import { Routes, Route } from "react-router-dom";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import ThreeCursor from "./components/ui/three-cursor";
import Home from "./pages/home";
import Pricing from "./pages/pricing";

function App() {
  return (
    <>
      <ThreeCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
