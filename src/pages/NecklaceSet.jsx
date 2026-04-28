import { Link, useParams } from "react-router-dom";
import products from "../data/necklaceCategory.json";
import ProductCategoryCard from "../components/ProductCard";

export default function NecklaceSet() {
  const { name } = useParams();

  // If category name exists → filter, else show all
  const filtered = name
    ? products.filter(
      (p) =>
        p.necklaceCategory?.toLowerCase() === name.toLowerCase()
    )
    : products;

  return (
    <>
      {/* Banner */}
      <section className="bg-img1 txt-center p-lr-15 p-tb-92">
        <h2 className="ltext-105 cl0 txt-center">
          {name ? name : "Necklace Sets"}
        </h2>
      </section>

      {/* Category Grid */}
      <section className="bg0 p-t-23">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">
              <Link to="/category/all" className="cl5" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                ⇠ Back to Category
              </Link>
            </h3>
          </div>

          <div className="row isotope-grid">
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <ProductCategoryCard
                  key={p.id}
                  product={p}
                />
              ))
            ) : (
              <p>No category found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}