const Category = ({ icon: Icon, name, updateClickedCategory }) => {
    
    const handleClick = () => {
        updateClickedCategory(name);
        console.log('NAME', name)
    };

    return (
        <li onClick={handleClick}>
            <Icon /> 
            <span>{name}</span> 
        </li>
    );
};

export default Category;
