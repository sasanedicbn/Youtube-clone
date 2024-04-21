import VideoCart from "./VideoCart";


const MainComponent = () => {


  return (
    <div className="main-content">
      <div>
        <h1>New<span>video</span></h1>
      </div>
      <div className="current-videos">
        <VideoCart/>
      </div>
    </div>
  );
};

export default MainComponent;
