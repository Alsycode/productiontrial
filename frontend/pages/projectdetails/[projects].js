import React, { useState } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function ProjectDetails({ blogData, otherData }) {
  console.log("^&^^&**&*&*",otherData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlug, setCurrentSlug] = useState(""); // State variable to store the current slug
  const [selectedTag, setSelectedTag] = useState(null); 
  const router = useRouter();

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchQuery(searchValue);
    setCurrentPage(1);
  };
   const handleTagClick = (tagText) => {
        const matchingItem = otherData.data.find((item) =>
       item.attributes.slug.includes(tagText)
     );

     if (matchingItem) {
     
       router.push(`/projectdetails/${matchingItem.attributes.slug}`);
     }
  };
 
  const handleItemClick = (newSlug) => {
    setCurrentSlug(newSlug); // Update the slug state variable with the new value
    window.location.href = `/projectdetails/${newSlug}`; // Reload the page with the updated slug
  };

  const filteredBlogs = otherData.data.filter((blog) => {
    const fieldToSearch = blog.attributes.topic?.toLowerCase() || "";
    const searchTerm = searchQuery.toLowerCase();
    return fieldToSearch.includes(searchTerm);
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const largeImageUrl =
    blogData.data[0].attributes.projectimg.data.attributes.formats.thumbnail.url;
  const project = blogData.data[0].attributes.projectName;

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="container">
          <div
            className="dlab-bnr-inr overlay-primary-dark"
            style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1>{project}</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  {/* ... (breadcrumb code) */}
                </nav>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: "30px" }}>
            <div className="col-xl-8 col-lg-8 m-b50">
              <div className="dlab-blog blog-single style-1">
                <div className="dlab-media rounded-md shadow">
                  <Image width={700} height={270} src={largeImageUrl} alt="ALLT" />
                </div>
                <h2>{project}</h2>
                <h2>{blogData.data[0].attributes.date}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                  odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna nibh viverra non semper suscipit posuere a pede.
                </p>
              </div>
            </div>

            {/* Recent Projects (Right Sidebar) */}
            <div className="col-xl-4 col-lg-4 m-b50">
              {/* <div className="widget widget_search">
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
              </div> */}
               <div style={{ background: 'white' }}>
  <div>
  <h2 className="widget-title">Related tags</h2>
    <button
      className={`border-none block text-left ${
        selectedTag === "camera" ? "bg-primary text-white selected-tag" : ""
      }`}
     onClick={() => handleTagClick("branding")}
      style={{
        marginBottom: '10px',
        background: 'white',
        border: 'none',
      }}
    >
      <h6 className="title">#branding</h6>
    </button>
  </div>
  <div>
    <button
      className={`border-none block text-left ${
        selectedTag === "tv" ? "bg-primary text-white selected-tag" : ""
      }`}
       onClick={() => handleTagClick("seo")}
      style={{
        marginBottom: '10px',
        background: 'white',
        border: 'none',
      }}
    >
      <h6 className="title">#seo</h6>
    </button>
  </div>
  <div>
  <button
      className={`border-none block text-left ${
        selectedTag === "laptop" ? "bg-primary text-white selected-tag" : ""
      }`}
      // onClick={() => handleTagClick("development")}
      style={{
        marginBottom: '10px',
        background: 'white',
        border: 'none',
      }}
    >
      <h6 className="title">#development</h6>
    </button>
  </div>


</div>
              <div className="widget recent-posts-entry">
                <h2 className="widget-title">Recent Projects</h2>
                <div className="widget-post-bx">
                  {otherData.data
                    .reverse()
                    .slice(0, 4)
                    .map((project) => (
                      <div className="widget-post clearfix" key={project.id}>
                        <div className="dlab-media">
                          <Image
                            width={400}
                            height={270}
                            src={
                              project.attributes.projectimg.data.attributes.formats
                                .thumbnail.url
                            }
                            alt="blog.attributes.heading"
                          />
                        </div>
                        <div className="dlab-info">
                        <Link href={`./${project.attributes.slug}`}>
                    <a>{project.attributes.projectName}</a>
                  </Link>
                          
                          
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const slugg = params.projects || ""; // Get the slug from the URL (if available)

  const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/projects?populate=*&filters[slug][$eq]=${slugg}`;
  const apiUrl2 = `https://aecstrapi-askn4.ondigitalocean.app/api/projects?populate=*`;
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
    const data1 = await response1.json();

    // Fetch data from the second API URL
    const response2 = await fetch(apiUrl2, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (!response2.ok) {
      throw new Error(`API request 2 failed with status ${response2.status}`);
    }

    // Parse the JSON response for the second URL
    const data2 = await response2.json();

    // Pass the fetched data as props to the component separately
    return {
      props: {
        blogData: data1,
        otherData: data2,
      },
    };
  } catch (error) {
    // Handle errors here, e.g., log them or return an error prop
    return {
      props: { error: error.message },
    };
  }
}
