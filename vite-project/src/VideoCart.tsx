const VideoCart = ({video}) => {
    const publishedDate = new Date(video.snippet.publishedAt);
    
    const formattedDate = publishedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return(
        <div className="video-cart">
            <img  src={video.snippet.thumbnails.default.url}  alt={video.snippet.title}/>
            <p>{video.snippet.title}</p>
            <p>{video.snippet.videoOwnerChannelTitle}</p>
            <p>{formattedDate}</p>
        </div>
    )
}
export default VideoCart;
