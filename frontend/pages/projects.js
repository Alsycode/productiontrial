import React, { useState, useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Link from "next/link";
import Image from "next/image";
import { BlogProvider } from "../component/BlogContext";
import { useRouter } from "next/router";
import { fetcher } from "./api/fetcher";
import useSWR from "swr";
import Head from "next/head";
function Projects({ projects }) {
  console.log("@@@@####$$$", projects);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?populate=*`, fetcher, {
    fallback: projects,
  });
  console.log("Data from useSWR:", data);
  const handleTagClick = (tag) => {
    if (tag === selectedTag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
    setCurrentPage(1);
  };

  const filterProjects = () => {
    const filteredByTag = selectedTag
      ? data.filter((project) =>
          project.attributes.projectName
            .toLowerCase()
            .includes(selectedTag.toLowerCase())
        )
      : projects;

    return searchQuery
      ? filteredByTag.filter((project) =>
          project.attributes.projectName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : filteredByTag;
  };

  const getPaginatedProjects = () => {
    const filteredAndSortedProjects = filterProjects();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = filteredAndSortedProjects.slice(
      startIndex,
      endIndex
    );

    return currentProjects;
  };

  const handlePageChange = (page) => {
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    setCurrentPage(page);
  };

  const filteredProjects = filterProjects();
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = getPaginatedProjects();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchQuery(searchValue);
    setCurrentPage(1);
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
    <>
       <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Projects</h1>
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
                {currentProjects.map((project) => (
                  <div
                    className="dlab-blog style-1 bg-white text-center m-b50"
                    key={project.id}
                  >
                    <Head>
                    <title>{project.attributes.seo.title}</title>
      <meta name="keywords" content={project.attributes.seo.keywords} />
      <meta name="description" content={project.attributes.seo.description} data-react-helmet="true"/>
      <link rel="canonical" href={project.attributes.seo.metaRobots}/>
                    </Head>
                    <div className="dlab-media dlab-img-effect zoom">
                      <Image
                        width={700}
                        height={270}
                        src={
                          project.attributes.projectimg.data.attributes
                            .formats.thumbnail.url
                        }
                        alt={project.attributes.projectName}
                      />
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <Link
                          href={`./projectdetails/${project.attributes.slug}`}
                        >
                          {project.attributes.projectName}
                        </Link>
                      </h4>
                      <p className="m-b0">
                        {truncateText(project.attributes.projectName, 200)}
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
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <Link href="#">
                          <a
                            className="page-link"
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </a>
                        </Link>
                      </li>
                    ))}
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
                  <div style={{ background: "white" }}>
                    <div>
                      <button
                        className={`border-none block text-left ${
                          selectedTag === "project1"
                            ? "bg-primary text-white selected-tag"
                            : ""
                        }`}
                        onClick={() => handleTagClick("project1")}
                        style={{
                          marginBottom: "10px",
                          background: "white",
                          border: "none",
                        }}
                      >
                        <h6 className="title">#project1</h6>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`border-none block text-left ${
                          selectedTag === "project2"
                            ? "bg-primary text-white selected-tag"
                            : ""
                        }`}
                        onClick={() => handleTagClick("project2")}
                        style={{
                          marginBottom: "10px",
                          background: "white",
                          border: "none",
                        }}
                      >
                        <h6 className="title">#project2</h6>
                      </button>
                    </div>
                    <div>
                      <button
                        className={`border-none block text-left ${
                          selectedTag === "project3"
                            ? "bg-primary text-white selected-tag"
                            : ""
                        }`}
                        onClick={() => handleTagClick("project3")}
                        style={{
                          marginBottom: "10px",
                          background: "white",
                          border: "none",
                        }}
                      >
                        <h6 className="title">#project3</h6>
                      </button>
                    </div>
                  </div>
                  <div className="widget recent-posts-entry">
                    <h2 className="widget-title">Other Projects</h2>
                    <div className="widget-post-bx">
                      {projects
                        .reverse()
                        .slice(0, 4)
                        .map((project) => (
                          <div className="widget-post clearfix" key={project.id}>
                            <div className="dlab-media">
                              <Image
                                width={400}
                                height={270}
                                src={
                                  project.attributes.projectimg.data.attributes
                                    .formats.thumbnail.url
                                }
                                alt={project.attributes.projectName}
                              />
                            </div>
                            <div className="dlab-info">
                              <h4 className="title">
                                <Link
                                  href={`./projectdetails/${project.attributes.slug}`}
                                >
                                  {project.attributes.projectName}
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

export default Projects;

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://aecstrapi-askn4.ondigitalocean.app/api/projects?populate=*",
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
          projects: data.data,
        },
      };
    } else {
      console.error("Error fetching data: Data is not an array");
      return {
        props: {
          projects: [],
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
}
