import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Cta from "../../element/cta";

function clientDetails({clientData}) {
      const imageUrl = clientData.data[0].attributes.clientlogo.data.attributes.formats.small.url;
     const clientname = clientData.data[0].attributes.title;

    // // const image = blogData.data[0].attributes;
    // console.log("blog",blogData);
    // console.log("sluf",project);
   console.log("largeImageUrl",imageUrl);
    console.log("wewewewe",clientData);
    // console.log("wewe",otherData)
    const router = useRouter();
    const slug = router.query.client; // Access the "project" query parameter
console.log("*****", slug);
    return(
        <>
           <Header/>
           <div className="page-content bg-white">
           <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
           <div className="container">
            <div className="dlab-bnr-inr-entry">
             <h1>{clientname}</h1>
            
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Blog</li>
                </ul>
                </nav>
                </div>
                </div>
           </div>
           <section className="content-inner bg-img-fix" style={{"backgroundImage":"url(images/background/bg1.png)","backgroundSize":"contain"}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 m-b50">
            
                <div className="dlab-blog blog-single style-1">
                  <div className="dlab-media rounded-md shadow">
                    <Image
                      width={700}
                      height={270}
                      src={imageUrl}
                      alt="ALLT"
                    />  
                    </div>
                    <h2>{clientname}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
                    </div>
                    </div>
                    </div>
                    </div>
                
                    </section>
           </div> 
           <Footer/>
        </>
    )
 
}

export default clientDetails;

// Import necessary modules

export async function getServerSideProps(context) {
    // Extract the 'slug' from the router's query parameters
    const slug = context.query.client;
  
    // Define the API URL for fetching client data based on the slug
    const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/clients?populate=*&filters[slug][$eq]=${slug}`;
  
    // Define the bearer token
    const bearerToken =
      "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5";
  
    try {
      // Fetch client data based on the slug with the bearer token
      const response1 = await fetch(apiUrl1, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
  
      if (!response1.ok) {
        throw new Error(`API request 1 failed with status ${response1.status}`);
      }
  
      // Parse the JSON response for client data
      const data1 = await response1.json();
  
      // Pass the fetched data as props to the component
      return {
        props: {
          clientData: data1,
        },
      };
    } catch (error) {
      // Handle errors here, e.g., log them or return an error prop
      return {
        props: { error: error.message },
      };
    }
  }
  