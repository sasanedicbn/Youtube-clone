import { useState } from "react"
import MainComponent from "./MainComponent"
import SideBar from "./SideBar"

const Content = ({searchQuery }:{searchQuery:any}) => {
    const [clickedCategory, setClickedCategory] = useState('Home')
   

    function updateClickedCategory(clickedName){
        setClickedCategory(clickedName)
    }
   
    return(
        <div className="main">
         <SideBar updateClickedCategory={updateClickedCategory} />
         <MainComponent clickedCategory={clickedCategory} searchQuery={searchQuery}/>
        </div>
    )
}
export default Content;