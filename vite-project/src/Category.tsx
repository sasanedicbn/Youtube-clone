const Category = ({ icon: Icon, name, updateClickedCategory }) => {
    
    const handleClick = () => {
        updateClickedCategory(name);
    };

    return (
        <li onClick={handleClick}>
            <Icon /> 
            <span>{name}</span> 
        </li>
    );
};

export default Category;
