import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import NoImage from '../../../assets/img/no-image.jpeg'

import NewsItem from './NewsItem';

import './index.css';

export default function NewsFeed() {
  const [news, setNews] = useState([]);

  // const API_KEY = process.env.REACT_APP_NEWSAPI_API_KEY;
  const API_URL = 'https://berita-indo-api.vercel.app/v1/cnn-news/';

  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL);

      setNews(res.data.data);
    })();
  }, [API_URL]);

  return (
    <div className="news-container">
      {news.map((item) => (
        // <NewsItem
        //   key={uuidv4()}
        //   title={item.title.replace(/_[^_]+$/g, '')}
        //   cover={item.urlToImage ? item.urlToImage : NoImage}
        //   source={item.source.name}
        //   time={item.publishedAt.slice(0, 10)}
        //   description={item.description}
        //   content={item.url}
        // />
        <NewsItem
          key={uuidv4()}
          title={item.title}
          cover={item.image.large ? item.image.large : NoImage}
          source="CNN"
          time={item.isoDate.slice(0, 10)}
          description={item.contentSnippet}
          content={item.link}
        />
      ))}
    </div>
  );
}
