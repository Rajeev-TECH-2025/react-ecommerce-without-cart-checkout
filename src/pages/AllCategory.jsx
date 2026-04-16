import { useParams } from "react-router-dom";
import products from "../data/productCategory.json";
import ProductCategory from "../components/ProductCategoryCard";


export default function AllCategory() {
  const { name } = useParams();
  const filtered = products.filter(p => p.ProductCategory === name);

  return (
    <>
    <section className="bg-img1 txt-center p-lr-15 p-tb-92">
        <h2 className="ltext-105 cl0 txt-center">
          Navroop Lifestyle
        </h2>
      </section>
    <section className="bg0 p-t-23 ">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">
              All Products
            </h3>
          </div>
          <div className="row isotope-grid category">
            {filtered.map(p => <ProductCategory category={p.category} key={p.id} product={p} />)}
          </div>
        </div>
      </section>
      </>
    
  );
}