import './App.css';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImportantSection from './components/ImportantSection';
import LastSection from './components/LastSection';
import OurCustomers from './components/OurCustomers';

function App() {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <OurCustomers />
      <FeaturesSection />
      <ImportantSection />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
