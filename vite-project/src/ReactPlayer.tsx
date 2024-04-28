import ReactPlayer from "react-player"
const ReactPlayerComponent = ({id}) => {
    return(
        <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls={true}
              className='react-player'
              width='95%'
              height='500px'
              />
    )
}
export default ReactPlayerComponent;