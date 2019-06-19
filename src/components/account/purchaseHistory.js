import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchases from './purchases';
import PurchasesDetail from './purchaseDetail';


class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className="purchase-history__page-title" title='Purchase History'/> 
                <Purchases className="purchase-history__purchases" />  
                <PurchasesDetail className="purchase-history__detail"/>      
                <div className="purchase-history__bottom-border"/>
            </div>
        )
    }
}

export default PurchaseHistory;