import React from "react";
import "../component/Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import Header from "./Header";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();



  const handleSubmit = async(event) => {
    //do all stripe stuff and confirm payment
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //paymentintent = payment confirmation

      setSucceeded(true);
      setError(null);
      setProcessing(false);
       
      Navigate("/orders", {replace: true});
    })

    //const payload = await stripe;
  };

  const handleChange = (event) => {
    //listen for in the cardElements
    //and display any erro as the customer types their details
    setDisabled(event.empty);
    setError(event.error ? event.error.messenge : "");
  };

  const [succeeded, setSucceeded] = useState(false); 
  const [processing, setProcessing] = useState(""); 
  const [disabled, setDisabled] = useState(true); 
  const [error, setError] = useState(null); 
  const [clientSecret, setClientSecret] = useState(true); 
  useEffect(()=>{
      //generate the special stripe secret which allows us to charge a customer every time the customer add produc in a cart 
      const getClientSecret = async ()=>{
        const response = await axios({
          method: "post",
          //stripe expect the total in a currency subunit
          url:`/payment/create?total=${getBasketTotal(basket)*100}`
        });
        setClientSecret(response.data.clientSecret)
      }
      getClientSecret();


  },[basket])


  return (
    <div className="payment">
      <Header />
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length}</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h1>Delivery Address</h1>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>12 basundara, Dhaka</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal({basket.length}items): <strong>{value}</strong>
                      </p>

                      <small className="subtotal_gift">
                        <input type="checkbox" />
                        This order contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p>:"Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
