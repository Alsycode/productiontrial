import Slider from "react-slick"; // Importing the react-slick library
import Image from "next/image"; // Importing the Next.js Image component
import { useState, useEffect } from 'react'; // Importing React hooks

function ClientSlider() {
  const [data, setData] = useState([]); // State to store the fetched data

  useEffect(() => {
    const apiUrl = "https://aecstrapi-askn4.ondigitalocean.app/api/clients?populate=*"; // Replace with your API URL

    const fetchClients = async () => {
      try {
        const bearerToken = 'a5691f57665abf4e07c4457bd26xe6bb24c6e3140590f2c1c031ed679c737160cbbacb2bfdf8e6f03551064264cda866016280d0e1b173e98f4dde4fe10e220cd6044428f7dc23086a1f81055542443fe3dec252552354a99fbcf0b1232217bff988bb9e4eb58f9bd74b0960e649f65bb36de8ebc6b2c56c21d017bf25da6b590'; // Replace with your actual Bearer token

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
