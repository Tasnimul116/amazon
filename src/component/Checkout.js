import React from 'react'
import Header from './Header'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div>
        <Header/>
        <div className='checkout'>
            <div className='checkout-left'>
                <img className='checkout_ad' src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/114196205/original/7d9d10a27ee5f610f125a10fabdd697f67924b90/design-an-exclusive-amazon-ebay-etsy-shopify-banner.jpg" alt=""/>
                <div>
                  <h3>Hello,{user?.email}</h3>
                  <h2 className='checkout_title'>Your Shopping Basket</h2>

                {/* 
                <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price ={item.price} 
                  
                  />*/}  

                  {/*checkout product */}
                  {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price ={item.price} />
                  ))}
                </div>
            </div>

            <div className='checkout-right'>

              <Subtotal />
            </div>

        </div>
      
    </div>
  )
}

export default Checkout;
