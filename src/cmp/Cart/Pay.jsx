import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = "pk_test_51L4nldDp99vLXs5cXWP7XCyYKjt1NkcWH0TxsMqP7PTix6XGyypGdEaM68jXWEsMw3a3ZOKgRvGUnrnOjTQXR8NZ00el7SAeFK"
const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);



    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenID: stripeToken.id,
                    amount: 2000,
                }
                );
                console.log(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest()
    }, [stripeToken])

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {stripeToken ? (
                <span>Processing. please wait...</span>
            ) : (
                <StripeCheckout
                    name="Thrifty."
                    billingAddress
                    shippingAddress
                    description="Your total is Rs5000"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            borderRadius: 5,
                            padding: "8px",
                            width: 120,
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Stripe Pay
                    </button>
                </StripeCheckout>
            )}
        </div>
    );
};

export default Pay;