
const VideoCard = ({ video }) => {
    const { title, thumbnails, publishTime, channelTitle } = video.snippet;
  

    const formattedPublishedTime = new Date(publishTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="video-card">
            <img src={thumbnails.medium.url} alt={title} />
            <div className="video-details">
             <h3>{title}</h3>
             <p  className="video-cart-title">{channelTitle}</p>
             <p>{formattedPublishedTime}</p>
            </div>
        </div>
    );
};

export default VideoCard;

