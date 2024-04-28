import ReactPlayer from "react-player"
const ReactPlayerComponent = ({id}) => {
    return(
        <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls={true}
              className='react-player'
              width='70%'
              height='380px'
              />
    )
}
export default ReactPlayerComponent;