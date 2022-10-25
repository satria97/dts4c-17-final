/* eslint-disable react/prop-types */
import './index.css';

export const NewsItem = ({
  title,
  cover,
  time,
  source,
  description,
  content
}) => {
  return (
    <div className="news">
      <img src={cover} alt={title} />
      <div className="news-info">
        <div className="news-info-title">{title}</div>
        <div className="news-info-detail">
          <div className="news-info-publication">{time}</div>
          <div className="news-info-source">{source}</div>
        </div>
      </div>
      {/* <p className="news-preview">&quot;{description}&quot;</p>
      <p className="news-content">{content}</p> */}
    </div>
  );
}