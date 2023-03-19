
const List = ({ items }) => {

    return (
        <ul className="todo__list">
            {
                items.map()
            }
            <li className="active">
                <i>

                </i>
                <span></span>
            </li>

        </ul>
    )

}

export default List; 