
const Channel = ({channelData}) => {
    console.log('data from channel',channelData)
    const {title,description, thumbnails} = channelData.snippet
    return(
        <div className="channel-container">
            <img src={thumbnails.default.url} className="channel-img"/>
            <div className="details-channel">
             <h4 className="title-channel">{title}</h4>
              <p className="description-channel">{description}</p>
            </div>
        </div>
    )
}

export default Channel;