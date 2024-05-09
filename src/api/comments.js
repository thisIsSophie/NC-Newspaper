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

export const postComment = (articleId, data) => {
  return axios
    .post(
      `https://news-api-eben.onrender.com/api/articles/${articleId}/comments`,
      data
    )
    .then((response) => {
      return response.data.comment;
    });
};
