import React from 'react';

const Category = ({ icon: Icon, name }) => {
    return (
        <li>
            <Icon /> 
            <span>{name}</span> 
        </li>
    );
};

export default Category;
