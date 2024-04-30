import { useEffect, useState } from "react";
import { fetchVideosList } from "./https";
import VideoCart from "./VideoCart";
import Channel from "./Channel";

const MainComponent = ({ clickedCategory, searchQuery }: { clickedCategory: any; searchQuery: string }) => {
  const [videos, setVideos] = useState([]);
  console.log(videos);

  useEffect(() => {
    const fetchData = async () => {
      const videosData = await fetchVideosList(searchQuery || clickedCategory); // Koristi searchQuery ako je dostupan, inače koristi clickedCategory
      setVideos(videosData.items);
    };
    fetchData();
  }, [searchQuery, clickedCategory]);

  return (
    <div className="main-content">
      <div>
        <h1>{clickedCategory}</h1>
      </div>
      <div className="current-videos">
        {videos.map((item, index) => (
          item.id.kind === "youtube#channel" ? (
            <Channel key={index} channelData={item} />
          ) : (
            <VideoCart key={index} video={item} />
          )
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
