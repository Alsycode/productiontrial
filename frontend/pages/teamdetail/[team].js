import React, { useState } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
function TeamDetails({ teamData, teamsData }) {

  console.log("teamData",teamData)
     const largeImageUrl =
        teamData.data[0].attributes.photo.data.attributes.formats.large.url;
  
 const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 3;
     const [searchQuery, setSearchQuery] = useState("");
     const [currentSlug, setCurrentSlug] = useState(""); 
   const router = useRouter();
  const slug = router.query.team
  console.log("656565655655",slug)

     const handleSearchSubmit = (e) => {
       e.preventDefault();
   
     };
     const handleSearchChange = (e) => {
       const searchValue = e.target.value;
       setSearchQuery(searchValue);
       setCurrentPage(1);
     };

 
     const handleItemClick = (newSlug) => {
      setCurrentSlug(newSlug); 
       window.location.href = `/productdetails/${newSlug}`; 
    };

    const filteredProducts = teamsData.data.filter((blog) => {
       const fieldToSearch = blog.attributes.topic?.toLowerCase() || "";
      const searchTerm = searchQuery.toLowerCase();
     return fieldToSearch.includes(searchTerm);
     });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

     const currentBlogs = filteredProducts.slice(
       (currentPage - 1) * itemsPerPage,
       currentPage * itemsPerPage
     );

      const product = teamData.data[0].attributes.title;

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
                <h1>Team Details</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
               
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
                <h2>{product}</h2>
                <h2>{teamData.data[0].attributes.date}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                  odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                  Suspendisse urna nibh viverra non semper suscipit posuere a pede.
                </p>
              </div>
            </div>

            
            <div className="col-xl-4 col-lg-4 m-b50"> 
                
                {/* <div className="widget widget_search">
                <h2 className="widget-title">Search</h2>
                <form className="dlab-form" onSubmit={handleSearchSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search members"
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
              </div>   */}
               <div className="widget recent-posts-entry">
                <h2 className="widget-title">Other Members</h2>
                <div className="widget-post-bx">
                  {teamsData.data
                    .reverse()
                    .slice(0, 4)
                    .map((member) => (
                      <div className="widget-post clearfix" key={member.id}>
                        <div className="dlab-media">
                          <Image
                            width={400}
                            height={270}
                            src={
                              member.attributes.photo.data.attributes.formats
                                .thumbnail.url
                            }
                            alt="blog.attributes.heading"
                          />
                        </div>
                        <div className="dlab-info">
                        <Link href={`./${member.attributes.slug}`}>
                    <a>{member.attributes.position}</a>
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

export default TeamDetails;

export async function getServerSideProps(context) {
  const { params } = context;
  const slugg = params.team; 

  const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/blogs?populate=*&filters[slug][$eq]=${slugg}`;
  const apiUrl2 = `https://aecstrapi-askn4.ondigitalocean.app/api/blogs?populate=*`;
  const bearerToken =
    "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5"; // Replace with your actual bearer token

  try {
 
    const response1 = await fetch(apiUrl1, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (!response1.ok) {
      throw new Error(`API request 1 failed with status ${response1.status}`);
    }

   
    const data1 = await response1.json();

   
    const response2 = await fetch(apiUrl2, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (!response2.ok) {
      throw new Error(`API request 2 failed with status ${response2.status}`);
    }

  
    const data2 = await response2.json();

  
    return {
      props: {
        teamData: data1,
        teamsData: data2,
      },
    };
  } catch (error) {
   
    return {
      props: { error: error.message },
    };
  }
}
