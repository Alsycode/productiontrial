// In the same utility file (e.g., api.js), define a function to fetch related projects.
// Replace 'your-api-url' with your actual API endpoint for fetching related projects.

export async function fetchRelatedProjects() {
    const apiUrl = 'https://aecstrapi-askn4.ondigitalocean.app/api/projects?populate=*';
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data; // Return the fetched related projects data
    } catch (error) {
      console.error("Error fetching related projects:", error);
      return [];
    }
  }
  
  export async function fetchProjectData(slug) {
    const apiUrl = `https://your-api-url/projects?slug=${slug}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data; // Return the fetched project data
    } catch (error) {
      console.error("Error fetching project data:", error);
      return null;
    }
  }