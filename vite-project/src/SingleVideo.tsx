import { useEffect, useState } from "react";
import { fetchVideoDetails } from "./https";
import { useParams } from "react-router";
import { FaThumbsUp, FaShareSquare, FaDownload } from 'react-icons/fa'; // Import ikonica

const SingleVideo = () => {
 const [videoDetails, setVideoDetails] = useState(null)
  const {id} = useParams()
  console.log(videoDetails)
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetchVideoDetails(id);
                setVideoDetails(response?.data)
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchDetails()
    }, [id]);

    if (!videoDetails) {
        return <div>Loading...</div>;
    }
    const {snippet, statistics} = videoDetails.items[0]
    const viewCount = parseInt(statistics.viewCount);
    console.log(snippet)
    console.log(statistics)
    return (
        <div>
            <div>
              VIDEO KLIP OVDJE
            </div>
            <div className="video-description">
              <h4>{snippet.title}</h4>
              <div>
                <p className="viewers">{viewCount.toLocaleString()} views</p>
                <p className="likes">
                  <FaThumbsUp /> {statistics.likeCount} 
                  <span>
                    <FaShareSquare /> Share
                  </span> 
                  <span >
                    <FaDownload /> Download
                  </span>
                </p>
              </div>
            </div>
        </div>
    );
};

export default SingleVideo;



