import { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import { fetchVideosList } from "./https";


const MainComponent = ({clickedCategory, searchQuery, getActiveId}) => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
        const fetchPlaylistVideos = async () => {
          let videosData 
          if(searchQuery) {
            videosData = await fetchVideosList(searchQuery)
          } else{
          videosData = await fetchVideosList(clickedCategory)
        };
        setVideos(videosData.items)}
        fetchPlaylistVideos();
      }, [searchQuery,clickedCategory]);
 
      const handleVideoClick = (videoId) => {
        getActiveId(videoId)  
    };
      console.log(videos)
  return (
    <div className="main-content">
      <div>
       <h1>{clickedCategory}</h1>
      </div>
      <div className="current-videos">
        {videos.map((video,_) => (
            <VideoCart key={video.id.videoId} video={video} onClick={handleVideoClick}/>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
