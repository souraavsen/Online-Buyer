import LandingPage from "./LandingPage";
import Footer from "./Shared/Components/Footer";
import Navbar from "./Shared/Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar dark={true} />
      <LandingPage />
      <Footer />
    </div>
  );
}
