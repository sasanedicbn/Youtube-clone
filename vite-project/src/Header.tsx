import { FaYoutube } from 'react-icons/fa';


const Header = () => {
    return(
        <header className="header-container"> 
            <div>
                <ul>
                    <li>
                        <span><FaYoutube/></span>
                        <p>YouTube</p>
                    </li>
                    <li><input type='text'/></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;
