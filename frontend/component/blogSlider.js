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
        const bearerToken = "Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5"; // Replace with your actual access token

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
