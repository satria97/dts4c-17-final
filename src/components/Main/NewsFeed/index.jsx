import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import NewsItem from './NewsItem';

import './index.css';

export default function NewsFeed() {
  const [news, setNews] = useState([]);

  // const API_KEY = process.env.REACT_APP_NEWSAPI_API_KEY;
  // const API_URL = 'https://newsapi.org/v2/everything?q=indonesia&apiKey=';

<<<<<<< HEAD
  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get(API_URL + API_KEY);

  //     setNews(res.data.articles);
  //   })();
  // }, []);
=======
  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL + API_KEY);

      setNews(res.data.articles);
    })();
  }, [API_KEY]);
>>>>>>> 2cca67157f750df72880d7b5d7ee4df68e2f5c63

  return (
    <div className="news-container">
      {news.map((item) => (
        <NewsItem
          key={uuidv4()}
          title={item.title}
          cover={item.urlToImage}
          source={item.source.name}
          time="two hours ago"
          description={item.description}
        />
      ))}
    </div>
  );
}
