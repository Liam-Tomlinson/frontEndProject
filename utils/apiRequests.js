import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://nc-news-eph7.onrender.com/'
  });

export const getArticlesList = () => {
    return newsApi.get(`api/articles/`)
    .then ((response) => {
        return response.data.data
    })
}

export const getSingleArticle = (id) => {
    return newsApi.get(`api/articles/${id}`)
    .then((response) => {
        return response
    })
}
