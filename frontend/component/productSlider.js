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
        const apiUrl = "http://localhost:1337/api/products?populate=*";
        const bearerToken = "Bearer 92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b"; // Replace with your actual access token

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
