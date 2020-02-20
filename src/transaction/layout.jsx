import React, { Component } from 'react';
import TransactionList from './transactionList';
import Filters from '../common/filter';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-sm-12">
                        <Filters></Filters>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8 col-sm-12">
                        <TransactionList></TransactionList>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Layout;