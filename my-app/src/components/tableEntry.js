const Row = (props) => {
    return (
        <tr>
            <td>{props.stock.CompanyName}</td>
            <td>{props.stock.Ticker}</td>
            <td>{props.stock.SharesOwned}</td>
            <td>{props.stock.SharePrice}</td>
            <td>{props.stock.TotalCost}</td>
            <td>{props.stock.TotalValue}</td>
            <td>{props.stock.EstimatedDivPayout}</td>
            <td>{props.stock.EstimatedDivYield}</td>
        </tr>
    )
}

export default Row;