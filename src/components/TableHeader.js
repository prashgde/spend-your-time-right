import SortButton from "./SortButton";

const TableHeader = ({ title, sortConfig, handleSort }) => {
    const idAsc = `sort-asc-${title.toLowerCase()}`;
    const idDes = `sort-des-${title.toLowerCase()}`;
    let orderAsc = false;
    let orderDes = false;
    
    if(sortConfig.key.toLowerCase() === title.toLowerCase()) {
        orderAsc = sortConfig.order === 'asc';
        orderDes = !orderAsc;
    }

    return (
        <div className='table-header'>
            <label>{title}</label>
            <div>
                <SortButton id={idAsc} active={orderAsc} handleSort={handleSort}/>
                <SortButton id={idDes} active={orderDes} handleSort={handleSort}/>
            </div>
        </div>
    );
}

export default TableHeader;