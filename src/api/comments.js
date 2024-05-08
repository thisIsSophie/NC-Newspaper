import axios from "axios";

export const getComments = (articleId) => {
  return axios
    .get(
      `https://news-api-eben.onrender.com/api/articles/${articleId}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
};
