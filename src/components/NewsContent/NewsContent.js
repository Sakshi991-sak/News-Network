import React from 'react';
import { Container } from "@material-ui/core";
import "./NewsContent.css";
import NewsCard from '../NewsCard/NewsCard';
const NewsContent = ({newsArray,loadMore,setLoadMore,newsResults}) => {
    return (<Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                 <span className="downloadText">
                   For best user experience use NEWS NETWORK app on your smartphone
                 </span>
                  <img
                    alt="app store"
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/appstore.png"
                  />
                  <img
                    alt="play store"
                    height="80%"
                    src="https://assets.inshorts.com/website_assets/images/playstore.png"
                  />
                </div>
                {
                  newsArray.map((newsItem)=>(
                   <NewsCard newsItem={newsItem} key={newsItem.title}/>
                  ))
                }
                {
                  loadMore <= newsResults &&
                  ( <>
                    <hr/>
                <button className="loadMore" onClick={()=>setLoadMore(loadMore+20)}>
                  Load More
                </button>
                  </>
                  )
                }
               
                
            </div>
        </Container>
    ); 
};
export default NewsContent;