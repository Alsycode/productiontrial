import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

function TestimonialSlider() {
  const [asd, setAsd] = useState(); // State to hold the Slider reference
  const [testimonials, setTestimonials] = useState(null); // State to store fetched testimonials
  const [error, setError] = useState(null); // State to handle fetch errors

  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonies?populate=*`; // API endpoint for testimonials
  const bearerToken = "92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b" // Replace with your actual Bearer token

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
