import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchChannelVideos, fetchSuggestedVideos } from "./https";

const Channel = () => {
  const { id } = useParams();
  const [channelData, setChannelData] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dohvaćanje podataka o kanalu
        const channelDataResponse = await fetchChannelVideos(id);
        setChannelData(channelDataResponse.items[0]);

        // Dohvaćanje preporučenih videozapisa
        const suggestedVideosResponse = await fetchSuggestedVideos(id);
        setSuggestedVideos(suggestedVideosResponse.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(suggestedVideos)

  return (
    <div>
      {channelData ? (
        <div>
          <p>Subscribe for cookies!</p>
          <h2>{channelData.snippet.title}</h2>
          <p>{channelData.snippet.description}</p>
          {/* Prikaz preporučenih videozapisa */}
          <h3>Suggested Videos</h3>
          <ul>
            {suggestedVideos ? (
              suggestedVideos.map((video) => (
                <li key={video.id.videoId}>
                  <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                  <p>{video.snippet.title}</p>
                </li>
              ))
            ) : (
              <p>No suggested videos available</p>
            )}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Channel;
