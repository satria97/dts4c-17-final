import NewsBanner from './NewsBanner';
import News from './News';

import './index.css';

export default function NewsFeed() {
  return (
    <div className="newsfeed">
      <NewsBanner />
      <div className="latest-news">
        <h1 className="latest-news-heading">Latest News</h1>
        <div className="news-container">
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
        </div>
      </div>
    </div>
  );
}
