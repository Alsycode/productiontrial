import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

function TestimonialSlider() {
  const [asd, setAsd] = useState(); // State to hold the Slider reference
  const [testimonials, setTestimonials] = useState(null); // State to store fetched testimonials
  const [error, setError] = useState(null); // State to handle fetch errors

  const apiUrl = `https://aecstrapi-askn4.ondigitalocean.app/api/testimonies?populate=*`; // API endpoint for testimonials
  const bearerToken = "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5" // Replace with your actual Bearer token

  // Configuration settings for the react-slick Slider component
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };

  // Function to render custom navigation arrows for the Slider
  const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div className="owl-prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="owl-next" onClick={() => asd.slickNext()}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };

  // Fetch testimonials from the API using useEffect hook
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        setTestimonials(responseData.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTestimonials();
  }, []);

  // Render error message if there was an error during fetch
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render loading message while testimonials are being fetched
  if (!testimonials) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <>
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        {/* React-Slick Slider component */}
        <Slider ref={(c) => setAsd(c)} {...settings}>
          {/* Mapping over testimonials to render each testimonial */}
          {testimonials.map((testimonial) => (
            <div
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              key={testimonial.id}
            >
              <div className="testimonial-1">
                {/* Testimonial Text */}
                <div className="testimonial-text">
                  <p>{testimonial.attributes.info}</p>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-pic">
                    {/* Testimonial Image */}
                    <Image
                      width={400}
                      height={400}
                      src={
                        testimonial.attributes.photo.data.attributes.formats
                          .small.url
                      }
                      alt={testimonial.attributes.name}
                    />
                  </div>
                  <div className="clearfix">
                    {/* Testimonial Name and Position */}
                    <strong className="testimonial-name">
                      {testimonial.attributes.name}
                    </strong>
                    <span className="testimonial-position">
                      {testimonial.attributes.position}
                    </span>
                    {/* Star Rating */}
                    <ul className="star-rating">
                      {Array.from({
                        length: testimonial.attributes.rating,
                      }).map((_, index) => (
                        <li key={index}>
                          <i className="fa fa-star text-warning"></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Render custom navigation arrows */}
        {renderArrows()}
      </div>
    </>
  );
}

export default TestimonialSlider;
