import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Image from "next/image"; // Import the Image component from Next.js

function Team1({teamData}) {

  
 

 const imgurl =  teamData.data[0].attributes.photo.data.attributes.formats.large.url
 console.log("teamDatapage",imgurl)
 const itemsPerPage = 2; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(teamData.data.length / itemsPerPage);

  // Slice the data to display only the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = teamData.data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Team</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 m-b50">
                {currentData
                .map((projects) => (
                  <div
                    className="dlab-blog style-1 bg-white text-center m-b50"
                    key={projects.id}
                  >
                    <div className="dlab-media dlab-img-effect zoom">
                      <Image
                        width={700}
                        height={270}
                        src={projects.attributes.photo.data.attributes.formats.thumbnail.url}
                        alt={projects.attributes.title}
                      />
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link
                          href={`./teamdetail/${projects.attributes.slug}`}
                        >
                          {projects.attributes.title}
                        </Link>
                      </h4>
                      <p className="m-b0">
                        {projects.attributes.name}
                      </p>
                      <div className="dlab-meta meta-bottom">
                        <ul>
                          <li className="post-date">
                            <i className="flaticon-clock m-r10"></i>7 March,
                            2020
                          </li>
                          <li className="post-author">
                            <i className="flaticon-user m-r10"></i>By Johne Doe
                          </li>
                          <li className="post-comment">
                            <Link href="#">
                              <a>
                                <i className="flaticon-speech-bubble"></i>
                                <span>15</span>
                              </a>
                            </Link>
                          </li>
                          <li className="post-share">
                            <i className="flaticon-share"></i>
                            <ul>
                              <li>
                                <a
                                  className="fa fa-facebook"
                                  href="https://en-gb.facebook.com/"
                                ></a>
                              </li>
                              <li>
                                <a
                                  className="fa fa-twitter"
                                  href="https://twitter.com/login?lang=en"
                                ></a>
                              </li>
                              <li>
                                <a
                                  className="fa fa-linkedin"
                                  href="https://www.linkedin.com/login"
                                ></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                
                <nav aria-label="Team Pagination">
                  <ul className="pagination text-center p-t20">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <a
                        className="page-link prev"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        Prev
                      </a>
                    </li>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <a
                        className="page-link next"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Call To action --> */}
        <section
          style={{
            backgroundImage: "url(images/background/bg5.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    More With Us
                  </h6>
                  <h2 className="title">
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link href='/contact-us-1'>
					<a  className="btn btn-link d-inline-flex align-items-center">
						<i className="fa fa-angle-right m-r10"></i>Join Now
					</a>
				</Link>	
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Team1;

export async function getServerSideProps(context) {
 // Get the slug from the URL (if available)

 
  const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/blogs?populate=*`;
  const bearerToken =
    "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5"; // Replace with your actual bearer token

  try {
    // Fetch data from the first API URL
    const response1 = await fetch(apiUrl1, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (!response1.ok) {
      throw new Error(`API request 1 failed with status ${response1.status}`);
    }

    // Parse the JSON response for the first URL
    const data = await response1.json();


    // Pass the fetched data as props to the component separately
    return {
      props: {
        teamData: data,
       
      },
    };
  } catch (error) {
    // Handle errors here, e.g., log them or return an error prop
    return {
      props: { error: error.message },
    };
  }
}
