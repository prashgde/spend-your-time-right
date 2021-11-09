const SortButton = ({id, active, handleSort}) => {
    const selectedColor = '#00960F';
    const color = active ? selectedColor : 'white';
    const name = id.includes('asc') ? 'up-arrow' : 'down-arrow';

    const handleClick = id => {
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