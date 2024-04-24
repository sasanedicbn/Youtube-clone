import { useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const Header = ({ setSearchQuery }) => {
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = (event) => {
        if(event.key === 'Enter'){
        setSearchQuery(searchInput)}
    };
   
    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleIconClick = () => {
        setSearchQuery(searchInput)
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
                <div className="input-container">
                    <input 
                        type='text' 
                        placeholder="Search..." 
                        value={searchInput} 
                        onChange={handleChange}
                        onKeyDown={handleSearch}
                    />
                    <FaSearch className="search-icon" onClick={handleIconClick} />
                </div>
            </header>
            <Outlet/>
        </>
    );
};

export default Header;
