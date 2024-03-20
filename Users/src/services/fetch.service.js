
export const  fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const fetchedResponse = await response.json();
      return fetchedResponse
    
    } catch (error) {
        console.log(error);
    }
    }