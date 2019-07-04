import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formField';
import ReviewProducts from './reviewProducts';

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit, subtotal } = this.props;
        let tax = subtotal * .06;

        return (
            <form onSubmit={handleSubmit} className={`${className} review-form`}>
                <div className='review-form__legend'>
                    <div className='review-form__legend__name'>Name</div>
                    <div className='review-form__legend__quantity'>Quantity</div>
                    <div className='review-form__legend__price'>Price</div>
                </div>
                <ReviewProducts className='review-form__products'/>
                <div className='review-form__line'></div>
                <Field className='review-form__proceed'
                onClick={() => history.push('/signin')}
                type='submit'
                title='Proceed to Checkout'
                name='proceed'
                component={FormButton}/>
                <Field className='review-form__back'
                onClick={() => history.push('/shop')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>
                <div className='review-form__details review-details'>
                    <div className='review-form__details__subtotal review-detail'>
                        <div className='review-detail__title'>Subtotal</div>
                        <div className='review-detail__price'>${subtotal.toFixed(2)}</div>
                    </div>
                    <div className='review-form__details__tax review-detail'>
                        <div className='review-detail__title'>Tax</div>
                        <div className='review-detail__price'>${tax.toFixed(2)}</div>
                    </div>
                    <div className='review-form__details__shipping review-detail'>
                        <div className='review-detail__title'>Shipping</div>
                        <div className='review-detail__price'>$0.00</div>
                    </div>
                    <div className='review-form__details__total review-detail review-detail__green'>
                        <div className='review-detail__title review-detail__green-title'>Total</div>
                        <div className='review-detail__price review-detail__green-price'>${(subtotal + tax).toFixed(2)}</div>
                    </div>
                </div>
            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm; 
