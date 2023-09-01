import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

function Portfolio() {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`;
  const [filter, setFilter] = useState("all");
  const { openLightbox } = useLightbox();
  const [projects, setProjects] = useState([]);
  const [image,setImage] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer 92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b`,
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

