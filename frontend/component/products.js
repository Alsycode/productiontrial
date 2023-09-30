import ProductSlider from "../component/productSlider";


function products({productsData}) {
	console.log("%%%%%5555",productsData)
  return (
    <>
      <section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Our Products</h6>
					<h2 className="title">Latest top of the line Products</h2>
				</div>
				<ProductSlider productsData={productsData}/>
			</div>
		</section>
    </>
  )
}

export default products;