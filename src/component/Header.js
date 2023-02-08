import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const hadleAuthentication =()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          alt="amazon-logo"
          className="header_logo"
          src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=163252369516-167642_amazon-logo-amazon-logo-white-text.png"
        />
      </Link>

      {/*search icon*/}

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>

        <div onClick={hadleAuthentication} className="header_option">
          {/*sign in*/}

          <span className="header_optionLineOne">Hello {user? user.email:"Guest" }</span>

          <span className="header_optionLineTwo">{user?'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
      

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>

          <span className="header_optionLineTwo">Order </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>

          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <AddShoppingCartIcon />
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
