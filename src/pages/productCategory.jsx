import { useParams } from "react-router-dom";
import products from "../data/productCategory.json";
import data from "../data/productCategory.json?url";
import ProductCategoryCard from "../components/ProductCategoryCard";

export default function productCategory() {
  const { name } = useParams();

  // If category name exists → filter, else show all
  const filtered = name
    ? products.filter(
        (p) =>
          p.productCategory?.toLowerCase() === name.toLowerCase()
      )
    : products;

  return (
    <>
      {/* Banner */}
      <section className="bg-img1 txt-center p-lr-15 p-tb-92">
        <h2 className="ltext-105 cl0 txt-center">
          {name ? name : "All Categories"}
        </h2>
      </section>

      {/* Category Grid */}
      <section className="bg0 p-t-23">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">
              {name ? `Category: ${name}` : "All Category"}
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