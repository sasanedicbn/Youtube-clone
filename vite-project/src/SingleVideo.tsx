import { useEffect, useState } from "react";
import { fetchSuggestedVideos, fetchVideoComments, fetchVideoDetails } from "./https";
import { useParams } from "react-router";
import { FaThumbsUp, FaShareSquare, FaDownload } from 'react-icons/fa'; 
import Comments from "./Comments"; 
import VideoCart from "./VideoCart";
import ReactPlayer from "react-player";

const SingleVideo = () => {
    const [videoDetails, setVideoDetails] = useState({
        currentVideoDetails: null,
        currentVideoComments: null,
        currentSuggestionVideos: null,
    });
    const { id } = useParams();

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
     console.log(videoDetails)
    return (
        <div>
            <div>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls={true}
              className='react-player'
              />
            </div>
            <div className="video-description">
                <h4>{video.snippet.title}</h4>
                <div>
                    <p className="viewers">{viewCount.toLocaleString()} views</p>
                    <p className="likes">
                        <FaThumbsUp /> {video.statistics.likeCount} 
                        <span><FaShareSquare /> Share</span> 
                        <span><FaDownload /> Download</span>
                    </p>
                </div>
            </div>
            <Comments comments={videoDetails.currentVideoComments} />
            {/* <VideoCart /> */}
        </div>
    );
};

export default SingleVideo;
