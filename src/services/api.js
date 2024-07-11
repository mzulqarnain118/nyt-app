import axios from "axios";

const API_KEY = import.meta.env.VITE_NYT_API_KEY;

const fetchMostPopularArticles = async (period = 1) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching most popular articles:", error);
    return { error: error.message };
  }
};

export { fetchMostPopularArticles };
