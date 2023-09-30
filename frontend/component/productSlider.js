import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

// Define your SSR function to fetch data

function ProductSlider({productsData }) {
    console.log("*&*&*&&&*&*&&",productsData);
  
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
    <Slider {...settings}>
        {productsData.map((product) => (
          <div
            key={product.id}
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dlab-blog style-1 bg-white text-center">
              <div className="dlab-media">
                <Image
                  src={product.attributes.productimage.data.attributes.formats
                          .small.url} 
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
              <div className="dlab-info">
                <h5 className="dlab-title">
                  <Link href={`/productdetails/${product.attributes.slug}`}>
                    <a>{product.attributes.productname}</a>
                  </Link>
                </h5>
                <p className="m-b0">{product.attributes.description}</p> 
                <div className="dlab-meta meta-bottom">
                  <ul>
                    <li className="post-date">
                      <i className="flaticon-clock m-r10"></i>
                      {/* {product.attributes.published_at} */}
                    </li>
                    <li className="post-comment">
                      <a href="#">
                        <i className="flaticon-speech-bubble"></i>
                        {/* <span>{product.attributes.comments}</span> */}
                      </a>
                    </li>
                    <li className="post-share">
                      <i className="flaticon-share"></i>
                      <ul>
                       
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider> 
       {/* {renderArrows()}  */}
    </>
  );
}

export default ProductSlider;


export async function getServerSideProps() {
    const apiUrl = "https://aecstrapi-askn4.ondigitalocean.app/api/products?populate=*";
    const bearerToken = "Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5"; // Replace with your actual access token
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: bearerToken,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
  
      const data = await response.json();
  
      return {
        props: {
          productData: data,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          productData: [],
        },
      };
    }
  }
  