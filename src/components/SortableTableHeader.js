import SortButton from "./SortButton";

const SortableTableHeader = ({ title, handleSort }) => {
    
    const idAsc = `sort-asc-${title.toLowerCase()}`;
    const idDes = `sort-des-${title.toLowerCase()}`;

    return (
        <div className='sortable-table-header'>
            <label>{title}</label>
            <div>
                <SortButton id={idAsc} handleSort={handleSort}/>
                <SortButton id={idDes} handleSort={handleSort}/>
            </div>
        </div>
    );
}

export default SortableTableHeader;