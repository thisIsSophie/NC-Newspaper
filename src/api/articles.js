import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://news-api-eben.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
};

export const patchArticle = (articleId, data) => {
  return axios
    .patch(`https://news-api-eben.onrender.com/api/articles/${articleId}`, data)
    .then((response) => {
      return response.data.article;
    });
};
