import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

import './index.css';

export default function NewsItem({
  title,
  cover,
  time,
  source,
  description,
  content,
}) {
  function showDetail(e) {
    const allNews = document.querySelectorAll('.news');

    if (e.currentTarget !== allNews[0]) {
      e.currentTarget.classList.toggle('detail');
    }
  }

  return (
    <div className="news" onClick={showDetail}>
      <img src={cover} alt={title} />
      <div className="news-info">
        <div className="news-info-title">{title}</div>
        <div className="news-info-detail">
          <div className="news-info-publication">{time}</div>
          <div className="news-info-source">{source}</div>
        </div>
      </div>
      <p className="news-preview">&quot;{description}&quot;</p>
      <button className="read-more" title="read more">
        <a href={content} target="_blank" rel="noreferrer">
          <LaunchOutlinedIcon />
        </a>
      </button>
    </div>
  );
}
