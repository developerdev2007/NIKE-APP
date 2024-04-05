import SuperQuality from "./Sections/SuperQuality";
import {
  Hero,
  Footer,
  CustomerReviews,
  Nav,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality

} from "./Sections";
import "./index.css";

const App = () => {
  return (
    <main className="relative">
      {/* <Nav /> */}
      <section className="x1:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
