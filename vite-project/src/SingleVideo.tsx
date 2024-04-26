import { useEffect, useState } from "react";
import { fetchVideoDetails } from "./https";
import { useParams } from "react-router";

const SingleVideo = ({ activeId }) => {
    const [currentVideoDetails, setCurrentVideoDetails] = useState(null);
  console.log(activeId)
  const {id} = useParams()


    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetchVideoDetails(id);
                console.log('from single video',response.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchDetails()
    }, []);
    
    return (
        <div>
            SASA SINGLE VIDEO
        </div>
    );
};

export default SingleVideo;

