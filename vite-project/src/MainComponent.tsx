import { useEffect, useState } from "react";
import { fetchVideosList } from "./https";
import VideoCart from "./VideoCart";



const MainComponent = ({clickedCategory, searchQuery}:{clickedCategory:any, searchQuery: string}) => {
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
 

  return (
    <div className="main-content">
      <div>
       <h1>{clickedCategory}</h1>
      </div>
      <div className="current-videos">
        {videos.map((video,_) => (
            <VideoCart key={video.id.videoId} video={video}/>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
