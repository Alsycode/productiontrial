import React, { useState, useEffect } from "react";
import Image from "next/image";
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import Link from "next/link";
import projects from "../pages/projectdetails/[projects]"
import { useRouter } from 'next/router';
function Portfolio({ projectsData }) {
  const [filter, setFilter] = useState("all");
  const { openLightbox } = useLightbox();
  const [projects, setProjects] = useState([]);
console.log("projectsData",projectsData)
  useEffect(() => {
    if (projectsData && projectsData.length > 0) {
      const portfolio = projectsData.map((item) => {
        const category = item.attributes.category;
        const src = item.attributes.projectimg.data.attributes.formats.thumbnail.url;
        const author = item.attributes.author;
        const slug = item.attributes.slug;
        const name = item.attributes.projectName;
        return {
          title: item.attributes.author,
          category: category,
          imageSrc: src,
          img: <Image
            src={src}
            width={234}
            height={156}
          />,
          author: author,
          slug: slug,
          name: name,
        };
      });
      setProjects(portfolio);
    }
  }, [projectsData]);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") {
      return true;
    } else {
      return p.category.includes(filter);
    }
  });

  const clearFilter = () => {
    setFilter("all");
  };
console.log("filteredprojects",filteredProjects)
  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
      <ul className="filters">
    <li className={`btn ${filter === "all" ? "active" : ""}`}>
      <a onClick={() => setFilter("all")}>All</a>
    </li>
    <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
      <a onClick={() => setFilter("web_design")}>Web Design</a>
    </li>
    <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
      <a onClick={() => setFilter("web_development")}>Web Development</a>
    </li>
    <li className={`btn ${filter === "branding" ? "active" : ""}`}>
      <a onClick={() => setFilter("branding")}>Branding</a>
    </li>
    <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
      <a onClick={() => setFilter("mobile_app")}>Mobile App</a>
    </li>
    <li className={`btn ${filter === "seo" ? "active" : ""}`}>
      <a onClick={() => setFilter("seo")}>SEO</a>
    </li>
  </ul>
      </div>

      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="clearfix">
            <ul id="masonry" className="row" data-column-width="3">
              {filteredProjects.map((item) => (
                <li
                  key={item.slug}
                  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.1s"
                >
                  <div className="dlab-box style-1 m-b30">
                    <div className="dlab-media">
                      {item.img ? (
                        
                      <Link href={`./projectdetails/${item.slug}`}>
         
            <div onClick={() => openLightbox(item.imageSrc)}>
              {item.img}
            </div>
          </Link>
                      ) : (
                        <p>no image</p>
                      )}
                         {console.log("item.slug:", item)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}

export default Portfolio;
