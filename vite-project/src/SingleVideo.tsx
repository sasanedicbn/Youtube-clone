import { useEffect, useState } from "react";
import { fetchVideoComments, fetchVideoDetails } from "./https";
import { useParams } from "react-router";
import { FaThumbsUp, FaShareSquare, FaDownload } from 'react-icons/fa'; // Import ikonica
import Comments from "./Comments"; // Import komponentu za komentare

const SingleVideo = () => {
    const [videoDetails, setVideoDetails] = useState({
        currentVideoDetails: null,
        currentVideoComments: null,
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoDetailsResponse = await fetchVideoDetails(id);
                const commentsResponse = await fetchVideoComments(id);

                setVideoDetails({
                    currentVideoDetails: videoDetailsResponse?.data,
                    currentVideoComments: commentsResponse?.data
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

    return (
        <div>
            <div>
                VIDEO KLIP OVDJE
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
        </div>
    );
};

export default SingleVideo;
