const Category = ({ icon: Icon, name, updateClickedCategory }:{icon:any, name:string, updateClickedCategory:any}) => {
    
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
