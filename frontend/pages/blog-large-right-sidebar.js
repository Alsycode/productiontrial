import React, { useState, useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Link from "next/link";
import Image from "next/image";
import { BlogProvider } from "../component/BlogContext";
function BlogLargeRightSidebar() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogContents = async () => {
    try {
      const res = await fetch(
        "https://testgoood.onrender.com/api/blogcontents?populate=*",
        {
          headers: {
            Authorization:
              "Bearer d89f936b096cfa24d62d35c1392d9b79aeacef58beb41b93b02c1900822a140bc92f3bb85fb8267a7e6ffb37f1e1eef56164461dd1d3c5e96e21012c0f153fc67a53e61e12049239a15b6fa5bbdfbcf225623a9ada50aa42d9e1b6e1c7c60baaf8f0a2f42a830c6e95dbb23bd4d8ec89f14f3ba427e3e82f1254237904e6d46d",
          },
        }
      );
      const data = await res.json();

      if (Array.isArray(data?.data)) {
        setBlogs(data.data.reverse());
      } else {
        console.error("Error fetching data: Data is not an array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBlogContents();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBlogContents();
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchQuery(searchValue);
    setCurrentPage(1);
  };

  const filteredBlogs = blogs.filter((blog) => {
    const fieldToSearch = blog.attributes.topic?.toLowerCase() || "";
    const searchTerm = searchQuery.toLowerCase();
    return fieldToSearch.includes(searchTerm);
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    setCurrentPage(page);
  };

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

  return (
    <BlogProvider>
       <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Blog Large</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                {/* ... (breadcrumb code) */}
              </nav>
            </div>
          </div>
        </div>
        <section
          className="content-inner bg-img-fix"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 m-b50">
                {currentBlogs.map((blog) => (
                  <div
                    className="dlab-blog style-1 bg-white text-center m-b50"
                    key={blog.id}
                  >
                    <div className="dlab-media dlab-img-effect zoom">
                    {blog.attributes.blogphotos?.data?.attributes?.url ? (
                        <Image
                          width={700}
                          height={270}
                          src={blog.attributes.blogphotos.data.attributes.url}
                          alt={blog.attributes.topic}
                        />
                      ) : (
                        <span>No Image Available</span>
                      )}
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                      <Link href={`./blogDetails/${blog.id}`}>
                        <a>{blog.attributes.topic}</a>
                   </Link>
                      </h4>
                      <p className="m-b0">
                        {truncateText(blog.attributes.explaination, 250)}
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
               <nav aria-label="Blog Pagination">
  <ul className="pagination text-center p-t20">
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <Link href="#">
        <a
          className="page-link prev"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </a>
      </Link>
    </li>
  
    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
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
      placeholder="Search blogs..."
      name="search" // Add a name attribute to the input field
      value={searchQuery}
      onChange={handleSearchChange} // Call handleSearchChange on input change
    />
    <span className="input-group-btn">
      <button className="btn btn-primary" type="submit">
        <i className="ti-search"></i>
      </button>
    </span>
  </div>
</form>

                  </div>
                  
                 <div className="widget recent-posts-entry">
                  
                    <h2 className="widget-title">Recent Posts</h2>
                    <div className="widget-post-bx">
                      {blogs.reverse().slice(0, 4).map((blog) => (
                        <div className="widget-post clearfix" key={blog.id}>
                          <div className="dlab-media">
                            <Image
                              width={400}
                              height={270}
                              src={
                                blog.attributes.blogphotos.data.attributes
                                  .formats.thumbnail.url
                              }
                              alt={blog.attributes.heading}
                            />
                          </div>
                          <div className="dlab-info">
                            <h4 className="title">
                              <a href={`./blogDetails/${blog.id}`}>
                                {blog.attributes.topic}
                              </a>
                            </h4>
                            <div className="dlab-meta">
                              <ul>
                                <li className="post-date">
                                  {" "}
                                  {blog.attributes.Date}
                                </li>
                              </ul>
                            </div>
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
    </BlogProvider>
     
  
  );
}

export default BlogLargeRightSidebar;
