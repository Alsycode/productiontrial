import React, { useState, useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Link from "next/link";
import Image from "next/image";
import { BlogProvider } from "../component/BlogContext";
import { useRouter } from "next/router";

function Service({ services }) { 
  console.log("@@@@####$$$", services);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null); 
  const handleTagClick = (tag) => {
     if (tag === selectedTag) {
      
       setSelectedTag(null);
     } else {
       setSelectedTag(tag);
     }
     setCurrentPage(1); 
   };

  
   const filteredBlogsByTag = selectedTag
     ? services.filter((service) =>
     service.attributes.name.toLowerCase().includes(selectedTag.toLowerCase())
       )
     : services;

     const filteredBlogsBySearch = searchQuery
     ? services.filter((service) =>
     service.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
       )
     : services;

  
   const filteredProducts = selectedTag
   ? filteredBlogsByTag
   : filteredBlogsBySearch;


   const handleSearchSubmit = (e) => {
     e.preventDefault();
   
   };

   const handleSearchChange = (e) => {
     const searchValue = e.target.value;
     setSearchQuery(searchValue);
     setCurrentPage(1);
   };


   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

   const currentProducts = filteredProducts.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );

 
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

   const handlePageChange = (page) => {
     if (page < 1) {
       page = 1;
     } else if (page > totalPages) {
       page = totalPages;
     }
     setCurrentPage(page);
   };

  return (
    <>
      <Header />
	  <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Services</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
               
              </nav>
            </div>
          </div>
        </div>
        <section
          className="content-inner  bg-img-fix"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 m-b50">
                {currentProducts.map((projects) => (
                  <div
                    className="dlab-blog style-1 bg-white text-center m-b50"
                    key={projects.id}
                  >
                    <div className="dlab-media dlab-img-effect zoom">
                      
                        <Image
                          width={700}
                          height={270}
                          src={projects.attributes.serviceimage.data.attributes.formats.large.url}
                          alt={projects.attributes.projectName}
                        />
                     
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link href={`./servicedetails/${projects.attributes.slug}`}>
                          {projects.attributes.name}
                        </Link> 
                      </h4>
                      <p className="m-b0">
                        {truncateText(projects.attributes.name, 250)}
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
                <nav aria-label="Project Pagination">
                  <ul className="pagination text-center p-t20">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <Link href="#">
                        <a
                          className="page-link prev"
                          onClick={() => handlePageChange(currentPage - 1)}
                        >
                          Prev
                        </a>
                      </Link>
                    </li>
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                       <Link href="#">
                        <a
                          className="page-link next"
                          onClick={() => handlePageChange(currentPage + 1)}
                        >
                          Next
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-4 col-lg-4 m-b30">
                <aside className="side-bar sticky-top">
                  <div className="widget widget_search">
                    <h2 className="widget-title">Search</h2>
                    <form className="dlab-form" onSubmit={handleSearchSubmit}>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search projects..."
                          name="search"
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="submit">
                            <i className="ti-search"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                  
                    
<div style={{ background: 'white' }}>
  <div>
    <button
      className={`border-none block text-left ${
        selectedTag === "camera" ? "bg-primary text-white selected-tag" : ""
      }`}
      onClick={() => handleTagClick("Telecalling")}
      style={{
        marginBottom: '10px',
        background: 'white',
        border: 'none',
      }}
    >
      <h6 className="title">#Telecalling</h6>
    </button>
  </div>
  <div>
    <button
      className={`border-none block text-left ${
        selectedTag === "tv" ? "bg-primary text-white selected-tag" : ""
      }`}
      onClick={() => handleTagClick("pSearch engine optimisation")}
      style={{
        marginBottom: '10px',
        background: 'white',
        border: 'none',
      }}
    >
      <h6 className="title">#Search engine optimisation</h6>
    </button>
  </div>
  <div>
  <button
      className={`border-none block text-left ${
        selectedTag === "laptop" ? "bg-primary text-white selected-tag" : ""
      }`}
      onClick={() => handleTagClick("Digital Marketing")}
      style={{
        marginBottom: '10px',
        background: 'white',
        border: 'none',
      }}
    >
      <h6 className="title">#Digital Marketing</h6>
    </button>
  </div>

  <div>
  <button
      className={`border-none block text-left ${
        selectedTag === "laptop" ? "bg-primary text-white selected-tag" : ""
      }`}
      onClick={() => handleTagClick("Web Development")}
      style={{
        marginBottom: '10px',
        background: 'white',
        border: 'none',
      }}
    >
      <h6 className="title">#Web Development</h6>
    </button>
  </div>
</div>

                  <div className="widget recent-posts-entry">
                    <h2 className="widget-title"></h2>
                    <div className="widget-post-bx">
                      {services
                        .reverse()
                        .slice(0, 4)
                        .map((service) => (
                          <div className="widget-post clearfix" key={service.id}>
                            <div className="dlab-media">
                              <Image
                                width={400}
                                height={270}
                                src={
                                  service.attributes.serviceimage.data.attributes
                                    .formats.large.url
                                }
                                alt={service.attributes.name}
                              /> 
                            </div>
                            <div className="dlab-info">
                              <h4 className="title">
                                  <Link href={`./projectdetails/${service.attributes.slug}`}>
                                  {service.attributes.name}
                                </Link> 
                              </h4>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
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
                <Link href="/contact-us-1">
                  <a className="btn btn-link d-inline-flex align-items-center">
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

export default Service;


export async function getServerSideProps() {
    try {
      const res = await fetch(
        "https://aecstrapi-askn4.ondigitalocean.app/api/services?populate=*", // Updated URL
        {
          headers: {
            Authorization:
              "Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5",
          },
        }
      );
      const data = await res.json();
  
      if (Array.isArray(data?.data)) {
        return {
          props: {
            services: data.data, // Updated name to "products"
          },
        };
      } else {
        console.error("Error fetching data: Data is not an array");
        return {
          props: {
            services: [],
          },
        };
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          services: [],
        },
      };
    }
  }
  