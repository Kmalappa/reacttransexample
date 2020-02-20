import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionService from '../common/transactionservice';

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: []
    }
    //this.props.selectedRowData = {};
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    TransactionService.getTransactionsList().then((transRespData) => {
      console.log("transRespData", transRespData);
      this.setState({ transactions: transRespData.transactions })
    })
  }
  selectedRow(rowData){
    console.log("rowData", rowData);
    localStorage.setItem("_"+rowData.account+"_", JSON.stringify(rowData))
    this.props = { selectedRowData : rowData };
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ACCOUNT NO.</th>
              <th>ACCOUNT NAME</th>
              <th>CURRENCY</th>
              <th>AMOUNT</th>
              <th>TRANSACTION TYPE</th>
            </tr>
          </thead>
          <tbody>
            { this.state && 
              this.state.transactions && 
              this.state.transactions.length >0 && 
              this.generateTableRow(this.state.transactions)
            }
          </tbody>
        </table>
      </div>
    );
  }

  generateTableRow(transactions) {
    return transactions && transactions.length > 0 && transactions.map((transactionObj, i) => {
      return (
        <tr key={transactionObj.account}>
          <td>
            <Link to={`/transactiondetails/${transactionObj.account}`} onClick={()=>this.selectedRow(transactionObj)}>{transactionObj.account}</Link>
          </td>
          <td>{transactionObj.accountName}</td>
          <td>{transactionObj.currencyCode}</td>
          <td>{transactionObj.amount}</td>
          <td>{transactionObj.transactionType}</td>
        </tr>
      )
    })
  }
}



export default TransactionList;