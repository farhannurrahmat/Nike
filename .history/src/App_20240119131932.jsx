import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections";
const App = () => (
  <main className="relative">
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">< Hero /></section>
    <section className="padding">< PopularProducts /></section>
    <section className="padding">< SuperQuality />r Quality</section>
    <section className="padding-x py-10">< Services />ices</section>
    <section className="padding">< SpecialOffers />ial Offers</section>
    <section className="bg-pale-blue padding">< CustomerReviews />omer Reviews</section>
    <section className="padding-x sm:py-32 py-16 w-full">< Subscribe />cribe</section>
    <section className="bg-black padding-x padding-t pb-8">< Footer />er</section>
  </main>
);
export default App;