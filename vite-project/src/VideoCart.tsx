import { Link } from "react-router-dom";

const VideoCart = ({ video }) => {

    const { title, thumbnails, publishTime, channelTitle } = video.snippet;
    console.log('VIIIDEO' ,video)
  

    const formattedPublishedTime = new Date(publishTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const limitedTitle = title.length > 65 ? title.slice(0, 64) + '...' : title;

    return (
      <Link to={`/video/${video.id.videoId}`}>
        <div className="video-card">
            <img src={thumbnails.medium.url} alt={title} />
            <div className="video-details">
             <h3>{limitedTitle}</h3>
             <p  className="video-cart-title">{channelTitle}</p>
             <p className="video-details-date">{formattedPublishedTime}</p>
            </div>
        </div>
    </Link>
    );
};

export default VideoCart;