import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { PlaceOrder } from '../../redux/apiCalls';

const KEY = "pk_test_51L4nldDp99vLXs5cXWP7XCyYKjt1NkcWH0TxsMqP7PTix6XGyypGdEaM68jXWEsMw3a3ZOKgRvGUnrnOjTQXR8NZ00el7SAeFK"
const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    // const [shippingAddress, setShippingAddress] = useState({})
    // const [order, setOrder] = useState({})
    // const [product, setProduct] = useState([{}])
    // const [orderDetails, setOrderDetails] = useState([{}])
    let order = {}
    let OrderDetails = []
    let products = []
    const cart = useSelector(state => state.cart)
    const user = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch();

    const handleClick = (address) => {
        order = {
            userID: user._id,
            username: user.username,
        };
        cart.products.map(item => (

            OrderDetails.push({
                product: {
                    _id: item._id,
                    productName: item.productName,
                    productPrice: item.productPrice,
                    productImageURL: item.productImageURL,

                },
                quantity: item.quantity,
                size: item.size,
                color: item.color,
            })
        ))

        order.OrderDetails = OrderDetails
        order.shipping_address = address

        //console.log(order)
        PlaceOrder(dispatch, order);


    }

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
                handleClick(res.data.billing_details)
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
                <span>Yayyyyy!! Your order has been placed.</span>
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