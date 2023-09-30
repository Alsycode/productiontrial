import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';
function TeamSlider({blogsData}) {
  console.log("^^^^^^",blogsData)
  
  // Configuration settings for the react-slick Slider component
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      {/* React-Slick Slider component */}
      <Slider {...settings} className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full">
        {blogsData.length > 0 ? (
          // Mapping over the 'data' state and rendering each blog item as a slide
          blogsData.map((blog) => (
            
            <Link href={`./teamdetail/${blog.attributes.slug}`}>
            
               <div className="item wow fadeInUp" key={blog.id} data-wow-duration="2s" data-wow-delay="0.1s">
            
            <div className="dlab-team style-1 m-b10" key={blog.id}>
              {/* Rendering the blog photo using Next.js Image component */}
              <div className="dlab-media">
                <Image
                  width={400}
                  height={400}
                  src={blog.attributes.photo.data.attributes.formats.small.url}
                  alt={blog.attributes.title}
                />
              </div>
              <div className="dlab-content">
                <div className="clearfix">
                  {/* Rendering blog title and position */}
                  <h4 className="dlab-name">
                    <a href="/team-1">{blog.attributes.title}</a>
                  </h4>
                  <span className="dlab-position">{blog.attributes.slug}</span>
                </div>
                {/* Rendering social media icons */}
                <ul className="dlab-social-icon primary-light">
                  <li >
                    <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            </Link>
           
          ))
        ) : (
          // If the 'data' state is empty, render a loading message
          <p>Loading...</p>
        )}
      </Slider>
    </>
  );
}

export default TeamSlider;
