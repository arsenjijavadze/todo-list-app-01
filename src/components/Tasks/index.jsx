import React from "react";
import editSvg from '../../assets/img/edit.svg'

import './Tasks.scss';


const Tasks = () => {

    return (
        <div className="tasks">
            <h2 className="tasks__title">
                Frontend
                <img src={editSvg} alt="Edit icon" />
            </h2>
        </div>
    )
}

export default Tasks;