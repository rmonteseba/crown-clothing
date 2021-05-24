import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IukNkHXkUPle38Yc1VgXOLNbgk8q9EdFJ9SqB5o12KAQUPH9oZVXxYfaoBvW5W6lE1nGc3NIhKMFlOeP6vmrNGU00NsrqAYMw'

    const onToken = token => {
        console.log(token)
        withReactContent(Swal).fire({
            icon: 'success',
            html: '<h3>Your payment was successfully made!</h3>',
            footer: 'Thanks for buying!'
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