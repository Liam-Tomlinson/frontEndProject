import axios from 'axios';

export const getArticlesList = () => {
    return axios.get(`https://nc-news-eph7.onrender.com/api/articles/`)
    .then ((response) => {
        return response.data.data
    })
}