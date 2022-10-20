import './index.css';

export default function News() {
  return (
    <div className="news">
      <div className='news-image'>
        <img
          src="https://source.unsplash.com/random"
          alt="sample newsitem"
          className="newsitem-photo"
        />
      </div>
      <div className="news-info">
        <div className="news-info-title">
          News Title Lorem Ipsum Dolor Sit Amet
        </div>
        <div className="news-info-detail">
          <div className="news-info-publication">2 hours ago</div>
          <div className="news-info-source">thegrayzone.com</div>
        </div>
      </div>
    </div>
  );
}
