import { useEffect, useState } from "react"
import MainComponent from "./MainComponent"
import SideBar from "./SideBar"
import { fetchVideosList } from "./https"

const Content = ({ videos, updateClickedCategory }:{searchQuery:any}) => {
    
   
    return(
        <div className="main">
         <SideBar updateClickedCategory={updateClickedCategory} />
         <MainComponent  videos={videos}/>
        </div>
    )
}
export default Content;