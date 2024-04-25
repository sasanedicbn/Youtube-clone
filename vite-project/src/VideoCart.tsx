
const VideoCard = ({ video }) => {
    // console.log('FROM', video)
    const { title, thumbnails, publishTime, channelTitle } = video.snippet;
    // function fetchSingleVideo (videoID) {
    //      fetchVideosList(videoID)
    //    }
    // console.log('videoos',video.id.videoId)
  

    const formattedPublishedTime = new Date(publishTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const limitedTitle = title.length > 65 ? title.slice(0, 64) + '...' : title;


    return (
        <div className="video-card">
            <img src={thumbnails.medium.url} alt={title} />
            <div className="video-details">
             <h3>{limitedTitle}</h3>
             <p  className="video-cart-title">{channelTitle}</p>
             <p className="video-details-date">{formattedPublishedTime}</p>
            </div>
        </div>
    );
};

export default VideoCard;

