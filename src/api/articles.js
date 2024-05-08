import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://news-api-eben.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
};
