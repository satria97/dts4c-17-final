import './index.css';

export default function NewsItem({
  title,
  cover,
  time,
  source,
  description,
  content,
}) {
  function goToDetail(url) {
    window.open(url, '_blank');
  }

  return (
    <div className="news" onClick={() => goToDetail(content)}>
      <img src={cover} alt={title} />
      <div className="news-info">
        <div className="news-info-title">{title}</div>
        <div className="news-info-detail">
          <div className="news-info-publication">{time}</div>
          <div className="news-info-source">{source}</div>
        </div>
      </div>
      <p className="news-preview">&quot;{description}&quot;</p>
    </div>
  );
}
