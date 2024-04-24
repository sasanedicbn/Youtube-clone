import { useState } from "react"
import MainComponent from "./MainComponent"
import SideBar from "./SideBar"

const Content = () => {
    const [clickedCategory, setClickedCategory] = useState(null)

    function updateClickedCategory(clickedName){
        selectClickedCategory(clickedName)
    }
    return(
        <div className="main">
         <SideBar updateClickedCategory={updateClickedCategory} />
         <MainComponent clickedCategory={clickedCategory}/>
        </div>
    )
}
export default Content;