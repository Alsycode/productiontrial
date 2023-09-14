import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

function Portfolio() {
  const apiUrl = `https://aecstrapi-askn4.ondigitalocean.app/api/projects?populate=*`;
  const [filter, setFilter] = useState("all");
  const { openLightbox } = useLightbox();
  const [projects, setProjects] = useState([]);
  const [image,setImage] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        const portfolio = data.data.map((item) => {
          const category = item.attributes.category;
          console.log(category)
          const src = item.attributes.projectimg.data.attributes.formats.thumbnail.url
          setImage(src)
          console.log(src)
          const author = item.attributes.author;
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
  
  }
})
       
        setProjects(portfolio);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  
  
  
  
  
  

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") {
      return true; // Show all projects when "all" filter is selected
    } else {
      return p.category.includes(filter);
    }
  });
  // Function to clear the filter and show all projects
  const clearFilter = () => {
    setFilter("all");
  };
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
              {filteredProjects.map((item) =>
                (
                  <li
                    key={item.title}
                    className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.1s"
                  >
                    <div className="dlab-box style-1 m-b30">
                      <div className="dlab-media">
                        {item.img ? (<a href="" onClick={() => openLightbox(item.imageSrc)}>
                          {item.img}
                        </a>) : (<p>no image</p>)}
                        
                      </div>
                    </div>
                  </li>
                ) 
              )}
            </ul>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}

export default Portfolio;

