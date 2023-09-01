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
        const apiUrl = 'https://testgoood.onrender.com/api/blogs?populate=*';
        const bearerToken = 'd89f936b096cfa24d62d35c1392d9b79aeacef58beb41b93b02c1900822a140bc92f3bb85fb8267a7e6ffb37f1e1eef56164461dd1d3c5e96e21012c0f153fc67a53e61e12049239a15b6fa5bbdfbcf225623a9ada50aa42d9e1b6e1c7c60baaf8f0a2f42a830c6e95dbb23bd4d8ec89f14f3ba427e3e82f1254237904e6d46d'; // Replace with your actual access token

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
            const img = data.attributes.productimg.data.attributes.formats.medium.url
            setNewsData(data.data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchNewsData();
    }, []); // Fetch data on component mount

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
                    src={news.attributes.productimg.data.attributes.formats.medium.url}
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
                                    <p className="m-b0" >
                                        {news.attributes.explaination}
                                    </p>
                                    {/* Assuming you have 'publishedAt', 'comments', and social media share links in 'news.attributes' */}
                                    <div className="dlab-meta meta-bottom">
                                        <ul>
                                            <li className="post-date">
                                                <i className="flaticon-clock m-r10"></i>
                                                {news.attributes.publishedAt}
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
