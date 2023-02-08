import "../component/Home.css";
import React from "react";
import Product from "./Product";
import Header from "./Header";

function Home() {
  return (
   <div>
    <Header/>
   <div className="home">
       
      <div className="home_container">
        <img
          className="home_image"
          alt="home-img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2022/Q3/Onsite/StoreFronts/2022Q3_HCT_Storefront_Hero_NewTraditional_D_1500x500_EN.jpg"
        />

        <div className="home_row">
          {/*product 2 */}
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://static-01.daraz.com.bd/p/5bde0eb3d52d1dc0bd074d84128b3344.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://cdn.mos.cms.futurecdn.net/Kkao2JjMHcBM62ZuvfSyzD.jpg"
          />
        </div>

        <div className="home_row">
          {/*product 3 */}
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://i.pinimg.com/736x/fe/83/88/fe838850478d7ca3b947058d5cdb945e.jpg"
          />
          <Product
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://static-01.daraz.com.bd/p/da7a5edc179c104e3acf9a1e7e6eaf12.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://www.startech.com.bd/image/cache/catalog/tablet/apple/mxat2zp-a/mxat2zp-a-500x500.jpg"
          />
        </div>

        <div className="home_row">
          {/*product 1 */}
          <Product
            id="90829332"
            title="Samsung LCAORG9OSSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WOHD 5120 × 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg"
          />
        </div>
      </div>
    </div></div>
    
  );
}

export default Home;
