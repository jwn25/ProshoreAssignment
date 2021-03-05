import axios from 'axios'

const baseURL = "https://newsapi.org/v2/"

const NewsAxios = axios.create({
  baseURL: baseURL,
  headers: {
    'x-api-key': process.env.MIX_NEWS_API_KEY
  }
})


 
const ApiAxios = axios.create({
  baseURL: '/',
})

export {
  NewsAxios,
  ApiAxios
}