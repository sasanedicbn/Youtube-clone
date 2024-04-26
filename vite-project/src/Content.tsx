import { useState } from "react"
import MainComponent from "./MainComponent"
import SideBar from "./SideBar"
import SingleVideo from "./SingleVideo"

const Content = ({searchQuery, handleVideoClick, getActiveId}) => {
    const [clickedCategory, setClickedCategory] = useState('Home')
   

    function updateClickedCategory(clickedName){
        setClickedCategory(clickedName)
    }
   
    return(
        <div className="main">
         <SideBar updateClickedCategory={updateClickedCategory} />
         <MainComponent clickedCategory={clickedCategory} searchQuery={searchQuery} getActiveId={handleVideoClick}/>
        </div>
    )
}
export default Content;