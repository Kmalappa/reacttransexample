import React, { Component } from 'react';
class TransactionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { rowData: {} }
    }
    componentWillMount() {

    }
    componentDidMount() {
       
    }
    render() {
        const { match: { params } } = this.props;
        console.log(this.props, this.state);
        const rowDataData = localStorage.getItem("_" + params.id + "_");
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.rowData = JSON.parse(rowDataData)
        console.log(this.state, this.props, rowDataData)
        return (
            <div className="row">
                {this.state && this.state.rowData && this.generateDom(this.state.rowData)}
            </div>
        );
    }
    
    componentWillUnmount() {
        localStorage.clear();
    }

    generateDom(rowData) {
        return (
            <div className="col-lg-8">
                <div className="row heading-ts">
                    <div className="col-lg-2">
                        <label> Transaction </label>
                    </div>
                    <div className="col-lg-2">
                        <label>{rowData.account}</label>
                    </div>
                    <div className="devider"></div>
                </div>
                <div className="row">
                    <div className="col-lg-2">Account Nuber:</div>
                    <div className="col-lg-4">{rowData.account}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2">Account Name: </div>
                    <div className="col-lg-4">{rowData.accountName}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2">Currency Code:</div>
                    <div className="col-lg-4">{rowData.currencyCode}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2">Amount:</div>
                    <div className="col-lg-4">{rowData.amount}</div>
                </div>
                <div className="row">
                    <div className="col-lg-2">Tranction Type:</div>
                    <div className="col-lg-4">{rowData.transactionType}</div>
                </div>
            </div>
        )
    }
    
}
    export default TransactionDetails;