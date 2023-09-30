import { createContext, useContext, useState } from 'react';

const BlogDataContext = createContext();//fornewsblog
const ClientsDataContext = createContext();
const PortfolioDataContext = createContext();
const TestimonialsDataContext = createContext();//
const NewsDataContext = createContext();//for blog
const ProductDataContext = createContext();

export function BlogDataProvider({ children }) {
  const [blogContentsData, setblogContentsData] = useState([]);
  
  return (
    <BlogDataContext.Provider value={{ blogContentsData, setblogContentsData}}>
      {children}
    </BlogDataContext.Provider>
  );
}

export function useBlogData() {
  return useContext(BlogDataContext);
}

export function ClientsDataProvider({ children }) {
    const [clientsData, setClientsData] = useState([]);
  
    return (
      <ClientsDataContext.Provider value={{ clientsData, setClientsData }}>
        {children}
      </ClientsDataContext.Provider>
    );
  }
  
  export function useClientsData() {
    return useContext(ClientsDataContext);
  }
  
  
export function PortfolioDataProvider({ children }) {
    const [portfolioData, setPortfolioData] = useState([]);
  
    return (
      <PortfolioDataContext.Provider value={{ portfolioData, setPortfolioData }}>
        {children}
      </PortfolioDataContext.Provider>
    );
  }
  
  export function usePortfolioData() {
    return useContext(PortfolioDataContext);
  }

  export function TestimonialsDataProvider({ children }) {
    const [testimonialsData, setTestimonialsData] = useState([]);
  
    return (
      <TestimonialsDataContext.Provider value={{ testimonialsData, setTestimonialsData }}>
        {children}
      </TestimonialsDataContext.Provider>
    );
  }
  
  export function useTestimonialsData() {
    return useContext(TestimonialsDataContext);
  }

  export function NewsDataProvider({ children }) {
    const [newsData, setNewsData] = useState([]);
  
    return (
      <NewsDataContext.Provider value={{ newsData, setNewsData }}>
        {children}
      </NewsDataContext.Provider>
    );
  }
  
  export function useNewsData() {
    return useContext(NewsDataContext);
  }
  

 export function productsDataProvider({ children }) {
    const [productsData, setProductsData] = useState([]);
    
    return (
      <ProductDataContext.Provider value={{ productsData, setProductsData}}>
        {children}
      </ProductDataContext.Provider>
    );
  }
  
  export function useProductsData() {
    return useContext(ProductDataContext);
  }
  


