import './index.css';

export default function News() {
  return (
    <div className="news">
      <img
        src="https://source.unsplash.com/random"
        alt="sample newsitem"
        className="newsitem-photo"
      />
      <div className="news-info">
        <div className="news-info-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, non?
        </div>
        <div className="news-info-detail">
          <div className="news-info-publication">2 hours ago</div>
          <div className="news-info-source">thegrayzone.com</div>
        </div>
      </div>
    </div>
  );
}
