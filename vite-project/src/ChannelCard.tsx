import { Link } from "react-router-dom";
import Channel from "./Channel";
import { useState } from "react";

const ChannelCard = ({ channelData }) => {
    const [openChannel, setOpenChannel] = useState(false);
    console.log('DATA', channelData)
    function channelHandler() {
        setOpenChannel(true);
    }

    const { title, description, thumbnails } = channelData.snippet;
    
    return (
        <div>
            {openChannel ? (
                <Channel/>
            ) : (
                <Link to={`/channel/${channelData.snippet.channelId}`} className="channel-container"> 
                    <img src={thumbnails.default.url} className="channel-img" alt="Channel Thumbnail" />
                    <div className="details-channel">
                        <h4 className="title-channel">{title}</h4>
                        <p className="description-channel">{description}</p>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default ChannelCard;