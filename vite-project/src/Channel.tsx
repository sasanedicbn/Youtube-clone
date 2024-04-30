
const Channel = ({channelData}) => {
    console.log('data from channel',channelData)
    const {title,description, thumbnails} = channelData.snippet
    return(
        <div className="channel-container">
            <img src={thumbnails.default.url} className="channel-img"/>
            <h4 className="title-channel">{title}</h4>
             <p>{description}</p>
        </div>
    )
}

export default Channel;