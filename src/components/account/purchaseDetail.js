import React, { Component } from 'react';

class PurchasesDetail extends Component {
    render() {

        const { className } = this.props;

        return(
            <div className={`${className}purchases-detail`}>
                purchases detail goes here
            </div>
        )
    }
}

export default PurchasesDetail