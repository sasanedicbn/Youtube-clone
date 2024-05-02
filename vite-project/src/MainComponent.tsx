
import VideoCart from "./VideoCart";
import ChannelCard from "./ChannelCard";

const MainComponent = ({ videos }: { clickedCategory: any; searchQuery: string }) => {
  


  return (
    <div className="main-content">
      <div>
        {/* <h1>{}</h1> */}
      </div>
      <div className="current-videos">
        {videos.map((item, index) => (
          item.id.kind === "youtube#channel" ? (
            <ChannelCard key={index} channelData={item} />
          ) : (
            <VideoCart key={index} video={item} />
          )
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
