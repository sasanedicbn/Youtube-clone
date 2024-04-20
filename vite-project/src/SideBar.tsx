import { FaHome, FaFire, FaCode, FaJs, FaReact, FaMusic, FaGraduationCap, FaPodcast, FaFilm, FaGamepad, FaWifi, FaRunning, FaTshirt, FaPaintBrush } from 'react-icons/fa';


const SideBar = () => {
    return (
        <aside className='sidebar-container'>
                <ul>
                    <li><FaHome/><span>Home</span></li>
                    <li><FaFire/><span>Trending</span></li>
                    <li><FaCode/><span>Coding</span></li>
                    <li><FaJs/><span>Javascript</span></li>
                    <li><FaReact/><span>ReactJS</span></li>
                    <li><FaMusic/><span>Music</span></li>
                    <li><FaGraduationCap/><span>Education</span></li>
                    <li><FaPodcast/><span>Podcast</span></li>
                    <li><FaFilm/><span>Movie</span></li>
                    <li><FaGamepad/><span>Gaming</span></li>
                    <li><FaWifi/><span>Live</span></li>
                    <li><FaRunning/><span>Sport</span></li>
                    <li><FaTshirt/><span>Fashion</span></li>
                    <li><FaPaintBrush/><span>Beauty</span></li>
                </ul>
        </aside>
    )
}

export default SideBar;
