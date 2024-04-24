import { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import { fetchVideosList } from "./https";


const MainComponent = ({clickedCategory, searchQuery}) => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
        const fetchPlaylistVideos = async () => {
          let videosData 
          if(searchQuery) {
            videosData = await fetchVideosList(searchQuery)
          } else{
          videosData = await fetchVideosList(clickedCategory)
        };
       
        const dd = videosData.items.map((video) => video.id.videoId)
        setVideos(dd)}
        fetchPlaylistVideos();
      }, [searchQuery,clickedCategory]);
 
      console.log(videos)
  return (
    <div className="main-content">
      <div>
       <h1>{clickedCategory}</h1>
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
