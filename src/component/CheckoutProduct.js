import React from "react";
import "../component/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket=()=>{
        //remove the item form basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        })

    }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_img" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
