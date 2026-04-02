import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorCarousel from './components/FlavorCarousel';
import CampaignBanner from './components/CampaignBanner';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FlavorCarousel />
        <CampaignBanner />
        <StoreLocator />
      </main>
      <Footer />
    </div>
  );
}
