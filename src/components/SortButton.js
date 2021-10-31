import { useState } from "react";

const SortButton = ({id, handleSort}) => {
    const primaryBlue = '#04a6d8';
    const [active, setActive] = useState(false);
    const color = active ? primaryBlue : 'white';
    const name = id.includes('asc') ? 'up-arrow' : 'down-arrow';

    const handleClick = id => {
        setActive(true);
        handleSort(id);
    }
    
    return (
        <div className='sort-button-container'>
            <button onClick={() => handleClick(id)}>
                <box-icon name={name} type='solid' id={id} color={color} ></box-icon>
            </button>
        </div>
    );
}

export default SortButton;