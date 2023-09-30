// pages/BlogDetail.jsx
import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Cta from "../../element/cta";

function blogDetails({ blogData,blogDatas }) {
  const router = useRouter();
  const slug = router.query.slug;
  console.log("*****", slug);

  console.log("*=========", blogDatas);

  const { topic } = blogData.data[0].attributes;
  const largeImageUrl = blogData.data[0].attributes.blogphotos.data.attributes.formats.small.url;
  const explaination =  blogData.data[0].attributes.explaination;
  
  console.log('explanation', explaination);

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        {/* Banner */}
        <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>{topic}</h1>
              {/* Breadcrumb Row */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><Link href="/blog"><a>Blog</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Blog Detail</li>
                </ul>
              </nav>
              {/* Breadcrumb Row End */}
            </div>
          </div>
        </div>
        {/* Banner End */}
      
        {/* Blog Large */}
        <section className="content-inner bg-img-fix" style={{"backgroundImage":"url(images/background/bg1.png)","backgroundSize":"contain"}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 m-b50">
                {/* Blog start */}
                <div className="dlab-blog blog-single style-1">
                  <div className="dlab-media rounded-md shadow">
                    <Image
                      width={700}
                      height={270}
                      src={largeImageUrl}
                      alt="ALLT"
                    />
                  </div>
                  <div className="dlab-meta m-t10">
                    <ul>
                      <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                      <li className="post-author"><i className="flaticon-user m-r10"></i>By <Link href="#"><a > Johne Doe</a></Link></li>
                    </ul>
                  </div>
                  <h4 className="dlab-title">{topic}</h4>
                  <div className="dlab-post-text">
                    
                   <p>{explaination}</p>
                    <blockquote className="blockquote style-1">
                      <h4 className="blockquote-content">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies.</h4>
                    </blockquote>
                    <p>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. </p>
                    <h4 className="m-b30">Donec sit amet semper massa ellentesque habitant morbi</h4>
                    <Image
                      width={700}
                      height={270}
                      src={largeImageUrl}
                      alt="ALLT"
                    />
                    <p>Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis.</p>
                    <p>Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent taciti sociosqu ad litora</p>
                    <p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum.</p>
                  </div>
                  <div className="dlab-meta border-top">
                    <ul>
                      <li className="post-tags">
                        Tags:
                        <Link href="#"><a>#Child </a></Link> ,
                        <Link href="#"><a>#Education </a></Link> ,
                        <Link href="#"><a>#Money </a></Link> ,
                        <Link href="#"><a>#Restaurant </a></Link>
                      </li>
                      <li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
                      <li className="post-share"><i className="flaticon-share"></i>
                        <ul>
                          <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                          <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                          <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
               
                <div className="widget recent-posts-entry">
                    <h2 className="widget-title">Recent Posts</h2>
                    <div className="widget-post-bx">
                      {blogDatas.data
                        .reverse()
                        .slice(0, 4)
                        .map((blog) => (
                          <div className="widget-post clearfix" key={blog.slug}>
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
                                <Link href={`./${blog.attributes.slug}`}>
                                 <a>{blog.attributes.topic}</a> 
                                </Link>
                              </h4>
                           
                            </div>
                          </div>
                        ))} 
                    </div>
                  </div>
                
                
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <Cta />
      </div>
      <Footer />
    </>
  )
}

export default blogDetails;

export async function getServerSideProps(context) {
  // Extract the 'slug' from the router's query parameters
  const slug = context.query.id;

  // Define the first API URL and bearer token
  const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/blogcontents?populate=*&filters[slug][$eq]=${slug}`;
  const bearerToken = "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5";

  // Define the second API URL
  const apiUrl2 = `https://aecstrapi-askn4.ondigitalocean.app/api/blogcontents?populate=*`;

  try {
    // Fetch data from the first API using the provided URL and bearer token
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

    // Fetch data from the second API using the provided URL and bearer token
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

    // Pass the fetched data as props to the component
    return {
      props: {
        blogData: data1,
        blogDatas: data2,
      },
    };
  } catch (error) {
    // Handle errors here, e.g., log them or return an error prop
    return {
      props: { error: error.message },
    };
  }
}
