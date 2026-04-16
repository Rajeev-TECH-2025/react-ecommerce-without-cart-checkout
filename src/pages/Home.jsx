import Hero from "../components/Hero";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg0 p-t-23">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">
              New Collections
            </h3>
          </div>
          <div className="row isotope-grid">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}