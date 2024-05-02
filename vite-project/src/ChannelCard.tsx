import { Link } from "react-router-dom";


const ChannelCard = ({ channelData }) => {

    const { title, description, thumbnails } = channelData.snippet;
    
    return (
        <div>
                <Link to={`/channel/${channelData.snippet.channelId}`} className="channel-container"> 
                    <img src={thumbnails.default.url} className="channel-img" alt="Channel Thumbnail" />
                    <div className="details-channel">
                        <h4 className="title-channel">{title}</h4>
                        <p className="description-channel">{description}</p>
                    </div>
                </Link>
        </div>
    );
};

export default ChannelCard;