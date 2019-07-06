import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UnderlinedTitle, InfoTitle } from './infoHelp';



class OrderSummary extends Component{

    render(){
        const { className } = this.props;
        let subtotal = 0;
        let tax = subtotal * .06;
        let productQuantity = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
            productQuantity += cartProduct.quantity;
            tax
            console.log(subtotal);
        })
        return(
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' title="Order Summary"/>
                <InfoTitle className='order-summary__subtotal' title={`${productQuantity} Stickers`} value= {`$${subtotal.toFixed(2)}`}/>
                <InfoTitle className='order-summary__tax-shipping' title="Tax & Shipping" value= {`$${tax.toFixed(2)}`}/>
                <InfoTitle className='order-summary__total info-title-green' title="Total" value= {`$${(subtotal + tax)}`}/>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

OrderSummary = connect(mapStatetoProps)(OrderSummary);

export default OrderSummary;