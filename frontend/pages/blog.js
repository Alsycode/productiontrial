import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function BlogLargeRightSidebar({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null); // State to track the selected tag
  var array1 = [1, 2, 3];
var array2 = [4, 5];
const concat = array1.concat(array2);
console.log("concat$$",concat)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here
    // You can filter blogs based on both searchQuery and selectedTag here
    // Combine both filters to get the final filteredBlogs
  };

  // Handle tag click event
  const handleTagClick = (tag) => {
    if (tag === selectedTag) {
      // If the same tag is clicked again, clear the selected tag
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
    setCurrentPage(1); // Reset the current page
  };

  // Filter blogs based on the selected tag
  const filteredBlogsByTag = selectedTag
    ? blogs.filter((blog) =>
        blog.attributes.topic.toLowerCase().includes(selectedTag.toLowerCase())
      )
    : blogs;

  // Filter blogs based on the search query
  const filteredBlogsBySearch = searchQuery
    ? blogs.filter((blog) =>
        blog.attributes.topic.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogs;

  // Combine both tag and search filters to get the final filteredBlogs
  const filteredBlogs = selectedTag
  ? filteredBlogsByTag
  : filteredBlogsBySearch;

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Truncate text to a specified maximum length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  // Handle page change
  const handlePageChange = (page) => {
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
              <h1>Blogs</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><a>Blog</a></li>
                 
                </ul>
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
                        <Link href={`./blogDetails/${blog.attributes.slug}`}>
                          {blog.attributes.topic}
                        </Link>
                      </h4>
                      <p className="m-b0">
                        {truncateText(blog.attributes.explaination, 250)}
                      </p>
                      <div className="dlab-meta meta-bottom">
                        <ul>
                          <li className="post-date">
                            <i className="flaticon-clock m-r10"></i>7 March, 2020
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
                          placeholder="Search blogs..."
                          name="search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
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
                    {/* Tags for filtering */}
                    <div>
                      <button
                        className={`border-none block text-left ${
                          selectedTag === "peace" ? "bg-primary text-white" : ""
                        }`}
                        onClick={() => handleTagClick("peace")}
                        style={{
                          marginBottom: '10px',
                          background: 'white',
                          border: 'none',
                          outline: 'none',
                        }}
                      >
                        <h6 className="title">peace</h6>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`border-none block text-left ${
                          selectedTag === "space" ? "bg-primary text-white" : ""
                        }`}
                        onClick={() => handleTagClick("space")}
                        style={{
                          marginBottom: '10px',
                          background: 'white',
                          border: 'none',
                          outline: 'none',
                        }}
                      >
                        <h6 className="title">space</h6>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`border-none block text-left ${
                          selectedTag === "art" ? "bg-primary text-white" : ""
                        }`}
                        onClick={() => handleTagClick("art")}
                        style={{
                          marginBottom: '10px',
                          background: 'white',
                          border: 'none',
                          outline: 'none',
                        }}
                      >
                        <h6 className="title">art</h6>
                      </button>
                    </div>
                  </div>


                  <div className="widget recent-posts-entry">
                    <h2 className="widget-title">Recent Posts</h2>
                    <div className="widget-post-bx">
                      {blogs
                        .reverse()
                        .slice(0, 4)
                        .map((blog) => (
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
                                <Link href={`./blogDetails/${blog.attributes.slug}`}>
                                  {blog.attributes.topic}
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

export default BlogLargeRightSidebar;

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://aecstrapi-askn4.ondigitalocean.app/api/blogcontents?populate=*",
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
          blogs: data.data,
        },
      };
    } else {
      console.error("Error fetching data: Data is not an array");
      return {
        props: {
          blogs: [],
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

