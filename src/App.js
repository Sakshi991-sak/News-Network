import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import NavNews  from "./components/NavNews";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";
import Footer from "./components/Footer/Footer"
function App() {
  
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadMore,setLoadMore]=useState(20);
  const [category,setCategory]=useState("general");
  
  const newsApi =async() =>{
    try { 
          const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`);
          setNewsArray(news.data.articles);
          setNewsResults(news.data.totalResults);
    } 
    catch(error)
    {
      console.log(error);
    }
  };
  useEffect(()=> {
    newsApi();// eslint-disable-next-line

  },[newsResults,loadMore,category])
  return (
    <div className="App">
          <NavNews setCategory={setCategory}/>
          { newsResults && (<NewsContent
          setLoadMore={setLoadMore}
          loadMore={loadMore} 
          newsArray={newsArray} 
          newsResults={newsResults}/>
          )}
          <Footer/>
    </div>
  );
}
export default App;
