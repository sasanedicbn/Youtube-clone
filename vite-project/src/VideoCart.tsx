
const VideoCard = ({ video }) => {
    const { title, thumbnails, publishTime } = video.snippet;
  

    const formattedPublishedTime = new Date(publishTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="video-card">
            <img src={thumbnails.medium.url} alt={title} />
            <h3>{title}</h3>
            <p>{formattedPublishedTime}</p>
        </div>
    );
};

export default VideoCard;

