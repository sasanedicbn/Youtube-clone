import { useState } from "react"
import MainComponent from "./MainComponent"
import SideBar from "./SideBar"

const Content = ({searchQuery, getActiveId}) => {
    const [clickedCategory, setClickedCategory] = useState('Home')

    function updateClickedCategory(clickedName){
        setClickedCategory(clickedName)
    }
    return(
        <div className="main">
         <SideBar updateClickedCategory={updateClickedCategory} />
         <MainComponent clickedCategory={clickedCategory} searchQuery={searchQuery} getActiveId={getActiveId}/>
        </div>
    )
}
export default Content;