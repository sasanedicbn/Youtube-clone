import { useEffect, useState } from "react";
import { fetchSuggestedVideos, fetchVideoComments, fetchVideoDetails } from "./https";
import { useParams } from "react-router";
import { FaThumbsUp, FaShareSquare, FaDownload } from 'react-icons/fa'; 
import Comments from "./Comments"; 
import VideoCart from "./VideoCart";
import ReactPlayerComponent from "./ReactPlayer";


const SingleVideo = () => {
    const [videoDetails, setVideoDetails] = useState({
        currentVideoDetails: null,
        currentVideoComments: null,
        currentSuggestionVideos: null,
    });
    const { id } = useParams();
    console.log('id iz single', id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoDetailsResponse = await fetchVideoDetails(id);
                const commentsResponse = await fetchVideoComments(id);
                const suggestvideosResponse = await fetchSuggestedVideos(id);

                setVideoDetails({
                    currentVideoDetails: videoDetailsResponse?.data,
                    currentVideoComments: commentsResponse?.data,
                    currentSuggestionVideos: suggestvideosResponse?.data.items
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    if (!videoDetails.currentVideoDetails || !videoDetails.currentVideoComments) {
        return <div>Loading...</div>;
    }

    const video = videoDetails.currentVideoDetails.items[0];
    const viewCount = parseInt(video.statistics.viewCount);
    const likesCount = parseInt(video.statistics.likeCount);
     console.log(videoDetails)
    return (
        <div className="single-video-container">
            
            <div className="video-description">
                <ReactPlayerComponent id={id}/>
              <div>
                <div>
                  <h2>{video.snippet.title}</h2>
                  <p className="viewers">{viewCount.toLocaleString()} views</p>
                 </div>
                <div className="video-description-details">
                        <span><FaThumbsUp /> {likesCount.toLocaleString()}</span>
                        <span><FaShareSquare /> Share</span> 
                        <span><FaDownload /> Download</span>
                </div>
                </div>
                <Comments comments={videoDetails.currentVideoComments} />
            </div>
            <div className="suggestion-videos-container">
            {videoDetails.currentSuggestionVideos?.map(video => (
              <div className="suggestion-videos" key={video.id.videoId}>
               <VideoCart key={video.id.videoId} video={video} />
             </div>
             ))}
             </div>
        </div>
    );
};

export default SingleVideo;
