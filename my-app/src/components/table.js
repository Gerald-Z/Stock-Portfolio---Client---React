import Row from './tableEntry.js';

const Table = (props) => {
    var returned = [];
    for (let i = 0; i < props.port.length; i++) {
        returned.push(<Row stock={props.port[i]}/>);
    }
    
    return (
       <>
        {returned}
       </>
    )
}

export default Table;