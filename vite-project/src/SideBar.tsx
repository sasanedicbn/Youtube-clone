import { categories } from './constants/categories';
import Category from './Category';

const SideBar = ({updateClickedCategory }:{updateClickedCategory: (clickedName: string) => void}) => {

    return (
        <aside className='sidebar-container'>
            <ul>
                {categories.map((category, index) => (
                    <Category key={index} icon={category.icon} name={category.name} updateClickedCategory={updateClickedCategory }/>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
