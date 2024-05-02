import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchChannelDetails, fetchChannelVideos } from "./https";
import VideoCart from "./VideoCart";

const Channel = () => {
  const { id } = useParams<{id:string}>();
  const [channelData, setChannelData] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const suggestVideoResponse = await fetchChannelVideos(id);
        setSuggestedVideos(suggestVideoResponse.items);
        
        const channelDataResponse = await fetchChannelDetails(id);
        setChannelData(channelDataResponse.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
console.log(suggestedVideos)
  return (
    <div className="channel-container"> 
      {channelData ? (
        <>
        <p className="subscribe-text">Subscribe for cookies!</p> 
        <div>
          <h2 className="channel-title">{channelData.snippet.title}</h2> 
          <p className="channel-description">{channelData.snippet.description}</p> 
          <h3 className="suggested-videos-title">Suggested Videos</h3>
          <ul className="suggested-videos-list"> 
            {suggestedVideos.length > 0 ? (
              suggestedVideos.map((video) => (
                <VideoCart video={video}/>
              ))
            ) : (
              <p className="no-suggested-videos">No suggested videos available</p>
            )}
          </ul>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Channel;
