import { useEffect, useState } from "react";
import { fetchVideoDetails } from "./https";
import { useParams } from "react-router";

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
        // If videoDetails is still null, render a loading state or return null
        return <div>Loading...</div>;
    }
    const {snippet, statistics,} = videoDetails.items[0]
    return (
        <div>
            SASA SINGLE VIDEO
        </div>
    );
};

export default SingleVideo;

