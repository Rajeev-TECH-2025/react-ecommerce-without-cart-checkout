import { motion } from "framer-motion";

export default function ProductCard({ product }) {
	return (

		<div className="col-sm-6 col-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
			<a className="block2" href={product.url} target="_blank">
				<div className="block2-pic hov-img0">
					<img src={product.image} alt="IMG-PRODUCT" />
					<b className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
						{product.name}
					</b>
				</div>
				<div className="block2-txt flex-w flex-t p-t-14">
					<div className="block2-txt-child1 flex-col-l ">

					</div>
				</div>
			</a>
		</div>
	);
}