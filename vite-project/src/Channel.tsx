import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchChannelDetails, fetchSuggestedVideos } from "./https";
import "./Channel.css"; // Uvezivanje CSS datoteke za stilizaciju

const Channel = () => {
  const { id } = useParams();
  const [channelData, setChannelData] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dohvatanje preporučenih videozapisa
        const suggestVideoResponse = await fetchSuggestedVideos(id);
        setSuggestedVideos(suggestVideoResponse.items);
        
        // Dohvatanje podataka o kanalu
        const channelDataResponse = await fetchChannelDetails(id);
        setChannelData(channelDataResponse.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="channel-container"> 
      {channelData ? (
        <div>
          <p className="subscribe-text">Subscribe for cookies!</p> 
          <h2 className="channel-title">{channelData.snippet.title}</h2> 
          <p className="channel-description">{channelData.snippet.description}</p> 
          <h3 className="suggested-videos-title">Suggested Videos</h3>
          <ul className="suggested-videos-list"> 
            {/* {suggestedVideos.length > 0 ? (
              suggestedVideos.map((video) => (
                <li key={video.id.videoId} className="suggested-video-item"> 
                  <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="video-thumbnail" /> 
                  <p className="video-title">{video.snippet.title}</p> 
                </li>
              ))
            ) : (
              <p className="no-suggested-videos">No suggested videos available</p>
            )} */}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Channel;
