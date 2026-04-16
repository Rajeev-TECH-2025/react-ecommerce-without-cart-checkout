

function Footer() {
	return (
		<>
			<footer className="bg3 p-t-25 p-b-20">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-lg-3 p-b-20">
							<h4 className="stext-301 cl2 p-b-20">
								Categories
							</h4>
							<ul>
								<li className="p-b-10">
									<a href="/category/mangalsutra-set" className="stext-107 cl2 hov-cl1 trans-04">
										Mangalsutra with Matching Earring Set
									</a>
								</li>
								<li className="p-b-10">
									<a href="/category/necklace-set" className="stext-107 cl2 hov-cl1 trans-04">
										Necklace Sets
									</a>
								</li>
								<li className="p-b-10">
									<a href="/category/all" className="stext-107 cl2 hov-cl1 trans-04">
										Bridal Jewellery Sets
									</a>
								</li>
								<li className="p-b-10">
									<a href="/category/all-type-earrings" className="stext-107 cl2 hov-cl1 trans-04">
										All Type Earrings
									</a>
								</li>
								<li className="p-b-10">
									<a href="/category/jhumkas" className="stext-107 cl2 hov-cl1 trans-04">
										Jhumkas
									</a>
								</li>
								<li className="p-b-10">
									<a href="/category/bangles-designer-kada" className="stext-107 cl2 hov-cl1 trans-04">
										Bangles (Designer Kada)
									</a>
								</li>
							</ul>
						</div>
						<div className="col-sm-6 col-lg-3 p-b-20">
							<h4 className="stext-301 cl2 p-b-20">
								Call Now
							</h4>
							<ul>
								<li className="p-b-10">
									<a href="/" className="stext-107 cl2 hov-cl1 trans-04">
										Order Now
									</a>
								</li>

								<li className="p-b-10">
									<a href="#" className="stext-107 cl2 hov-cl1 trans-04">
										Shipping
									</a>
								</li>

								<li className="p-b-10">
									<a href="#" className="stext-107 cl2 hov-cl1 trans-04">
										FAQs
									</a>
								</li>
							</ul>
						</div>
						<div className="col-sm-6 col-lg-3 p-b-20">
							<h4 className="stext-301 cl2 p-b-30">
								GET IN TOUCH
							</h4>
							<p className="stext-107 cl2 size-20">
								Any questions? Let us know in Whatsapp Number (+91) 9267948728
							</p>
						</div>
						<div className="col-sm-6 col-lg-3 p-b-20">
							<img src="../src/assets/images/icons/logo-01.png" style={{ width: '200px' }} alt="Navroop Lifestyle" />
						</div>
					</div>
					<div>						 
						<p className="stext-107 cl6 txt-center">
							Copyright &copy; {new Date().getFullYear()} |  All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer;