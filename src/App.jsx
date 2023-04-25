import {
  Navbar,
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className=" text-white bg-primary">
      <div id="Home">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
