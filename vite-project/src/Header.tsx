import { useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { fetchVideosList } from './https';

const Header = ({setVideos}) => {
    const [searchInput, setSearchInput] = useState('')
   
    const handleChange = (event:any) => {
        setSearchInput(event.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const videosData = await fetchVideosList(searchInput);
        setVideos(videosData.items);
    
    }

    return (
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
                <form className="input-container" onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        placeholder="Search..." 
                        value={searchInput} 
                        onChange={handleChange}
                    />
                    <FaSearch className="search-icon" onClick={handleSubmit} />
                </form>
            </header>
            <Outlet/>
        </>
    );
};

export default Header;
