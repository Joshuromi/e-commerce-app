import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51Ig4tyDd4ieuAZiK5chxO9kKsMPyyJUXE3H1gzR6UzPKYdQMoLuzFSZdzNNVONvHhvlh1MSFJXtdU3tsC0fApgep00dxJz4QXV"

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="paynow"
            name="e-commerce-app"
            billingAddress
            shippingAddress
            image="https://joshuromi.netlify.app/images/portfolio/modals/ecommercem.jpg"
            description={`Your total is ₦${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;