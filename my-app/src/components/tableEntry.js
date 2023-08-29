const Row = (props) => {
    return (
        <tr>
            <td>{props.stock.Ticker}</td>
            <td>{props.stock.SharesOwned}</td>
            <td>{props.stock.TotalCost}</td>
            <td>{props.stock.TotalValue}</td>
        </tr>
    )
}

export default Row;