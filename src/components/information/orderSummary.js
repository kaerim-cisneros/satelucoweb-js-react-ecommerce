import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infoHelp';

class OrderSummary extends Component{

    render(){
        const { className } = this.props;
        return(
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title'/>
                <InfoTitle className='order-summary__subtotal' title="whatever" value= '55.55'/>
                <InfoTitle className='order-summary__tax-shipping' title="Tax & Shipping" value= '3.25'/>
                <InfoTitle className='order-summary__total' title="Total" value= '2.22'/>
            </div>
        )
    }
}

export default OrderSummary;