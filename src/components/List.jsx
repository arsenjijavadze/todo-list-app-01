import React from "react";

const List = ({ items }) => {

    return (
        <ul className="todo__list">

            {items.map((item, index) => (
                <li key={index} className="active">
                    <i>
                        {item.icon}
                    </i>
                    <span>{item.name}</span>
                </li>
            ))}

        </ul>
    );

};

export default List; 