import Slider from "react-slick"; // Importing the react-slick library
import Image from "next/image"; // Importing the Next.js Image component
import { useState, useEffect } from 'react'; // Importing React hooks

function ClientSlider() {
  const [data, setData] = useState([]); // State to store the fetched data

  useEffect(() => {
    const apiUrl = "https://aecstrapi-askn4.ondigitalocean.app/api/clients?populate=*"; // Replace with your API URL

    const fetchClients = async () => {
      try {
        const bearerToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5'; // Replace with your actual Bearer token

        const res = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });
        const jsonData = await res.json();

        // Check if the fetched data is an array before setting it to the state
        if (Array.isArray(jsonData.data)) {
          setData(jsonData.data.map(item => item.attributes)); // Extract the 'attributes' field from the API response
        } else {
          console.error('Error fetching data: Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchClients();
  }, []);

  // Configuration settings for the react-slick Slider component
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 2000, // Set the slide duration in milliseconds (optional)
    speed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <>
      {/* React-Slick Slider component */}
      <Slider {...settings}>
        {data.length > 0 ? (
          // Mapping over the 'data' state and rendering each client logo
          data.map((client) => (
            <div className="item" key={client.id}>
              <div className="clients-logo">
                {/* Large version of the client logo */}
                <div className="logo-main">
                  <Image
                    src={client.clientlogo.data.attributes.formats.large.url}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                {/* Thumbnail version of the client logo */}
                <div className="logo-hover">
                  <Image
                    src={client.clientlogo.data.attributes.formats.thumbnail.url}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          // Render a loading message while data is being fetched
          <p>Loading...</p>
        )}
      </Slider>
    </>
  );
}

export default ClientSlider;
