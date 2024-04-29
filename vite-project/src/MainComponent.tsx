import  { useEffect, useState } from "react";
import { fetchVideosList } from "./https";
import VideoCart from "./VideoCart";

const MainComponent = ({ clickedCategory, searchQuery }: { clickedCategory: any; searchQuery: string }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchSearchVideos = async () => {
      const videosData = await fetchVideosList(searchQuery);
      setVideos(videosData.items);
    };
    fetchSearchVideos();
  }, [searchQuery]);


  useEffect(() => {
    const fetchCategoryVideos = async () => {
      const videosData = await fetchVideosList(clickedCategory);
      setVideos(videosData.items);
    };
    fetchCategoryVideos();
  }, [clickedCategory]);

  return (
    <div className="main-content">
      <div>
        <h1>{clickedCategory}</h1>
      </div>
      <div className="current-videos">
        {videos.map((video, index) => (
          <VideoCart key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
