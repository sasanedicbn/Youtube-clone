import MainComponent from "./MainComponent"
import SideBar from "./SideBar"

const Content = () => {
    return(
        <div className="main">
         <SideBar/>
         <MainComponent/>
        </div>
    )
}
export default Content;