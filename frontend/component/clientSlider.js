import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import client from "../pages/clientdetail/[client]"
import Link from "next/link";

function ClientSlider({ clientsData }) {
  // Remove the data state and the useEffect for fetching data

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {clientsData.length > 0 ? (
          clientsData.map((client) => (
            <div className="item" key={client.id}>
                 <Link href={`/clientdetail/${client.attributes.slug}`}>
                <a>
                  <div className="clients-logo">
                    <div className="logo-main">
                      <Image
                        src={client.attributes.clientlogo.data.attributes.formats.large.url}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="logo-hover">
                      <Image
                        src={client.attributes.clientlogo.data.attributes.formats.thumbnail.url}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Slider>
    </>
  );
}

export default ClientSlider;
