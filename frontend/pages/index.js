import { useEffect } from "react";
import Slider1 from "../element/slider-1";
import Clients from "../element/clients";
import Service from "../element/service";
import AboutUs from "../element/aboutUs";
import Counter from "../element/counter";
import Features from "../element/our-features";
import Projects from "../element/projects";
import Newsletter from "../element/newsletter";
import Team from "../element/team";
import Pricing from "../element/pricing";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Quote from "../element/quote";
import Cta from "../element/cta";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Contactus from "../component/contactus";
import { BlogProvider } from '../component/BlogContext'
import MailchimpFormContainer from "../component/mailChimpFormContainer";
 import { GHSProvider } from '../component/contextProvider';
import Products from "../component/products"
import { BlogDataProvider } from "../element/blogDataContext";
import { ClientsDataProvider } from "../element/blogDataContext";
import { NewsDataProvider } from "../element/blogDataContext";
import { PortfolioDataProvider } from "../element/blogDataContext";
import { TestimonialsDataProvider } from "../element/blogDataContext";
import {productsDataProvider} from "../element/blogDataContext"
function Home({ newsData,clientsData,testimoniesData,projectsData,blogsData,blogContentsData,productsData }) {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  console.log("++++",newsData);
  console.log("----+---",clientsData);
  console.log("++++++====",blogsData);
  console.log("====",testimoniesData);
  console.log("==+++==",projectsData);
  console.log("b^^^^^^^^^^^^",blogContentsData);
  console.log("89898988",productsData)
const clients = clientsData;
const blogs = blogsData;
const allData = clients.concat(blogs);
console.log("alldata",allData)
  return (
    <>
    <GHSProvider>
    <Header />
	  <div className="page-content bg-white" id="top">
        <Slider1 />

        <ClientsDataProvider>
        <Clients clientsData={clientsData}/>
        </ClientsDataProvider>

        <Counter />
        <Service />
        <AboutUs />
        <Features />
        <PortfolioDataProvider>
        <Projects  projectsData={projectsData}/>
        </PortfolioDataProvider>
        
        <Newsletter />
        <NewsDataProvider>
        <Team blogsData={blogsData} />
        </NewsDataProvider>
        <Pricing />
        <productsDataProvider>
        <Products productsData={productsData}/>
        </productsDataProvider>
      
        <TestimonialsDataProvider>
        <Testimonial testimoniesData={testimoniesData}/>
        </TestimonialsDataProvider>
        
        <BlogDataProvider>
        <Blog blogContentsData={blogContentsData}/>
        </BlogDataProvider>
     <Quote/>
     
        <Cta />
	  { /* 
	  */}
      </div>
	  <Footer />
    </GHSProvider>
	
    </>
  );
}

export default Home;


export async function getServerSideProps() {
  const apiUrlNews = 'https://aecstrapi-askn4.ondigitalocean.app/api/latestnewsblogs?populate=*';
  const apiUrlProjects = 'https://aecstrapi-askn4.ondigitalocean.app/api/projects?populate=*';
  const apiUrlClients = 'https://aecstrapi-askn4.ondigitalocean.app/api/clients?populate=*';
  const apiUrlBlogs = 'https://aecstrapi-askn4.ondigitalocean.app/api/blogs?populate=*';
  const apiUrlTestimonies = 'https://aecstrapi-askn4.ondigitalocean.app/api/testimonies?populate=*';
  const apiUrlBlogContents = 'https://aecstrapi-askn4.ondigitalocean.app/api/blogcontents?populate=*';
  const apiUrlProducts = 'https://aecstrapi-askn4.ondigitalocean.app/api/products?populate=*'; // Corrected the URL for products

  // Add the new API URL
  const bearerToken = 'Bearer 1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';

  try {
    const [
      newsResponse,
      projectsResponse,
      clientsResponse,
      blogsResponse,
      testimoniesResponse,
      blogContentsResponse,
      productsResponse, // Add the new response
    ] = await Promise.all([
      fetch(apiUrlNews, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlProjects, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlClients, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlBlogs, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlTestimonies, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlBlogContents, { headers: { Authorization: bearerToken } }),
      fetch(apiUrlProducts, { headers: { Authorization: bearerToken } }), // Fetch data from the new URL
    ]);

    // Check responses and handle errors
    if (!newsResponse.ok) {
      throw new Error('Failed to fetch news data.');
    }
    if (!projectsResponse.ok) {
      throw new Error('Failed to fetch projects data.');
    }
    if (!clientsResponse.ok) {
      throw new Error('Failed to fetch clients data.');
    }
    if (!blogsResponse.ok) {
      throw new Error('Failed to fetch blogs data.');
    }
    if (!testimoniesResponse.ok) {
      throw new Error('Failed to fetch testimonies data.');
    }
    if (!blogContentsResponse.ok) { // Handle error for the new URL
      throw new Error('Failed to fetch blog contents data.');
    }
    if (!productsResponse.ok) {
      throw new Error('Failed to fetch products data.');
    }

    // Parse response data
    const [
      newsData,
      projectsData,
      clientsData,
      blogsData,
      testimoniesData,
      blogContentsData,
      productsData,
    ] = await Promise.all([
      newsResponse.json(),
      projectsResponse.json(),
      clientsResponse.json(),
      blogsResponse.json(),
      testimoniesResponse.json(),
      blogContentsResponse.json(),
      productsResponse.json(),
    ]);

    return {
      props: {
        newsData: newsData.data,
        projectsData: projectsData.data,
        clientsData: clientsData.data,
        blogsData: blogsData.data,
        testimoniesData: testimoniesData.data,
        blogContentsData: blogContentsData.data,
        productsData: productsData.data, // Add data for the new URL
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        newsData: [],
        projectsData: [],
        clientsData: [],
        blogsData: [],
        testimoniesData: [],
        blogContentsData: [],
        productsData: [],
      },
    };
  }
}
