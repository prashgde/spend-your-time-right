const SortableTableHeader = ({ title, active }) => {
    const primaryBlue = '#04a6d8';
    const color = active ? primaryBlue : 'white';
    return (
        <div className='sortable-table-header'>
            <label>{title}</label>
            <button>
                <box-icon name='up-arrow' type='solid' id='sort-asc-genre' color={color}></box-icon>
            </button>
        </div>
    );
}

export default SortableTableHeader;