import React from "react";
import classNames from "classnames";
import axios from "axios";

import removeSvg from '../../assets/img/remove.svg';

import Badge from "../Badge";

import './List.scss';

const List = ({ items, isRemovable, onClick, onRemove, onClickItem }) => {

    const removeList = (item) => {
        if (window.confirm('Are you sure you want to delete this list?')) {
            onRemove(item);
            axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
                onRemove(item.id);
            });
        }
    };

    return (

        <ul onClick={onClick} className="list">


            {items && items.map((item, index) => (

                <li
                    key={index}
                    className={classNames(item.className, { 'active': item.active })}
                    onClick={onClickItem ? () => onClickItem(item) : null}
                >
                    <i>
                        {item.icon ? item.icon : <Badge color={item.color.name} />}
                    </i>
                    <span>{item.name}{item.tasks && ` (${item.tasks.length})`}</span>
                    {isRemovable && <img
                        className="list__remove-icon"
                        src={removeSvg}
                        alt="Remove icon"
                        onClick={() => removeList(item)}
                    />}
                </li>
            ))}



        </ul>
    );

};

export default List; 