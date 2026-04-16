import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Products from "../data/productCategory.json";


export default function ProductCategoryCard({ product }) {
	return (
		<div className="col-sm-12 col-md-4 col-lg-3 p-b-35 isotope-item women">
			
			<Link to={`/category/${product.slug}`} className="block2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
				
				<div className="block2-pic hov-img0">
					<img src={product.image} alt={product.name} />
				</div>

				<div className="block2-txt flex-w flex-t p-t-14">
					<div className="block2-txt-child1 flex-col-l">
						<button className="btn btn-dark w-100" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
							{product.name}
						</button>
					</div>
				</div>

			</Link>
		</div>
	);
}