import { SkipLink, Navbar, Footer } from "./components/Shell";
import Hero            from "./components/Hero";
import Biography       from "./components/Biography";
import AlbumCarousel   from "./components/AlbumCarousel";
import Videos          from "./components/Videos";
import FullDiscography from "./components/FullDiscography";
import Tours           from "./components/Tours";
import Gallery         from "./components/Gallery";

export default function App() {
  return (
    <div className="grain">
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Biography />
        <AlbumCarousel />
        <Videos />
        <FullDiscography />
        <Tours />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
