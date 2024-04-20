import { FaYoutube, FaSearch } from 'react-icons/fa';
import {Outlet} from 'react-router-dom'

const Header = () => {
    return(
        <>
        <header className="header-container"> 
            <div>
                <ul>
                    <li>
                        <span><FaYoutube className="yt-icon"/></span>
                        <p className='yt-title'>YouTube</p>
                    </li>
                </ul>
            </div>
            <div className="input-container">
                <input type='text' placeholder="Search..."/>
                <FaSearch className="search-icon"  />
            </div>
        </header>
        <Outlet/>
        </>
    )
}
export default Header;
