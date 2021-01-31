import axios from "axios";
import { NEWS_URL } from "./Contstants";
import { NEWS_KEY } from "./Contstants";

export const BUSINESS = () => {
    const businessAPI = `${NEWS_URL}top-headlines?country=us&category=business&apiKey=${API_KEY}`
    const businessNews = await axios.get
(businessAPI).then(({ data }) => {
    return data.articles
})
return businessNews;
}