import axios from "axios";
import { NEWS_URL } from "./Contstants";
import { NEWS_KEY } from "./Contstants";

export const BITCOIN = () => {
    const bitcoinAPI = `${NEWS_URL}everything?q=bitcoin&from=2019-10-14&sortBy=publishedAt&apiKey=${API_KEY}`
    const bitcoinNews = await axios.get
(bitcoinAPI).then(({ data }) => {
    return data.articles
})
return bitcoinNews;
}