import { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import { fetchVideosList } from "./https";


const MainComponent = () => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
        const fetchPlaylistVideos = async () => {
          const videosData = await fetchVideosList('New');
          setVideos(videosData.items); 
        };
    
        fetchPlaylistVideos();
      }, []);
 
      console.log(videos)
  return (
    <div className="main-content">
      <div>
        <h1>New<span>video</span></h1>
      </div>
      <div className="current-videos">
        {videos.map((video,_) => (
            <VideoCart key={video.key} video={video}/>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
