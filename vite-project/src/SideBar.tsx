import { categories } from './constants/categories';
import Category from './Category';

const SideBar = () => {
    return (
        <aside className='sidebar-container'>
            <ul>
                {categories.map((category, index) => (
                    <Category key={index} icon={category.icon} name={category.name} />
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
