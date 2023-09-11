import Link from 'next/link';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
function BlogSlider() {
    const [newsData, setNewsData] = useState([]);
    const settings = {
          dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed:5000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				
			  }
			},
		]
    };

    const fetchNewsData = async () => {
        const apiUrl = "https://aecstrapi-askn4.ondigitalocean.app/api/latestnewsblogs?populate=*";
        const bearerToken = "Bearer a5691f57665abf4e07c4457bd26e6bb24c6e3140590f2c1c031ed679c737160cbbacb2bfdf8e6f03551064264cda866016280d0e1b173e98f4dde4fe10e220cd6044428f7dc23086a1f81055542443fe3dec252552354a99fbcf0b1232217bff988bb9e4eb58f9bd74b0960e649f65bb36de8ebc6b2c56c21d017bf25da6b590"; // Replace with your actual access token

        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: bearerToken
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data.");
            }

            const data = await response.json();
            setNewsData(data.data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchNewsData();
    }, []); // Fetch data on component mount

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
    
        const trimmedText = text.slice(0, maxLength);
        const lastSpaceIndex = trimmedText.lastIndexOf(" ");
    
        if (lastSpaceIndex === -1) {
          return trimmedText + "...";
        }
    
        return trimmedText.slice(0, lastSpaceIndex) + "...";
      };
    
    const renderArrows = () => {
        // Your arrow rendering logic...
    };

    return (
        <>
            <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary" style={{ "position": "relative" }}>
                <Slider {...settings}>
                    {newsData.map((news) => (
                        <div key={news.id} className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="dlab-blog style-1 bg-white text-center">
                                <div className="dlab-media">
                                   
                                     <Image
                    src={news.attributes.newsimage.data.attributes.formats.medium.url}
                    alt=""
                    width={300}
                    height={300}
                  />
                                </div>
                                <div className="dlab-info">
                                    <h5 className="dlab-title">
                                        <Link href={`/blog-details/${news.id}`}>
                                            <a>{news.attributes.heading}</a>
                                        </Link>
                                    </h5>
                                    <div className='h-400'><p className="m-b0 " >
                                    {truncateText(news.attributes.explaination, 150)} 
                                    </p></div>
                                    
                                    {/* Assuming you have 'publishedAt', 'comments', and social media share links in 'news.attributes' */}
                                    <div className="dlab-meta meta-bottom">
                                        <ul>
                                            <li className="post-date">
                                                <i className="flaticon-clock m-r10"></i>
                                               
                                            </li>
                                            <li className="post-comment">
                                                <a href="#">
                                                    <i className="flaticon-speech-bubble"></i>
                                                    <span>{news.attributes.comments}</span>
                                                </a>
                                            </li>
                                            <li className="post-share">
                                                <i className="flaticon-share"></i>
                                                <ul>
                                                    {/* Your social media share links... */}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {renderArrows()}
            </div>
        </>
    );
}

export default BlogSlider;
