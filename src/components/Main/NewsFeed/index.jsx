import { useState, useEffect } from 'react';
import axios from 'axios';

import NewsItem from './NewsItem';

import './index.css';

export default function NewsFeed() {
  const [news, setNews] = useState([]);

  const API_KEY = process.env.REACT_APP_NEWSAPI_API_KEY;
  const API_URL = 'https://newsapi.org/v2/everything?q=indonesia&apiKey=';
  // const SEARCH_TAG =

  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL + API_KEY);
      setNews(res.data.articles);
    })();
  }, []);

  return (
    <div className="newsfeed">
      <div className="latest-news">
        <div className="news-container">
          {news.map((item) => (
            <NewsItem
              title={item.title}
              cover={item.urlToImage}
              source={item.source.name}
              time="two hours ago"
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
