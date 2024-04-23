
const VideoCard = ({ video }) => {
    const { title, thumbnails, publishedTime } = video.snippet;

    const formattedPublishedTime = new Date(publishedTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="video-card">
            <img src={thumbnails.default.url} alt={title} />
            <h3>{title}</h3>
            <p>{formattedPublishedTime}</p>
        </div>
    );
};

export default VideoCard;

