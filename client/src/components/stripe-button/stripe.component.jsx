import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IukNkHXkUPle38Yc1VgXOLNbgk8q9EdFJ9SqB5o12KAQUPH9oZVXxYfaoBvW5W6lE1nGc3NIhKMFlOeP6vmrNGU00NsrqAYMw'

    const onToken = token => {
        console.log(token)
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            withReactContent(Swal).fire({
                icon: 'success',
                html: '<h3>Your payment was successfully made!</h3><p>' + response + '</p>',
                footer: 'Thanks for buying!'
            })
        }).catch(error => {
            console.error('Payment error:', JSON.parse(error))
            withReactContent(Swal).fire({
                icon: 'error',
                html: '<h3>Your payment failed!</h3><p>' + error + '</p>',
                footer: 'Please try again!'
            })
        })

    }

    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/XW6.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton