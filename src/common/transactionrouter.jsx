import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TransactionDetails from '../transaction/transactionDetails';
import Layout from '../transaction/layout';

class TransactionRouter extends Component {
    render() {
        return (
            <Router>
                    <Route exact path="/home" component={Layout} />
                    <Route exact path="/transactiondetails/:id" component={TransactionDetails} />
                    <Route exact path="/" component={Layout} />
            </Router>

        );
    }
}

export default TransactionRouter;
