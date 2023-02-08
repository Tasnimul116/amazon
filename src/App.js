import './App.css';
import React, { useEffect } from 'react';
import Home from './component/Home';
import Checkout from './component/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import {auth} from "./component/Firebase";
import { useStateValue } from './component/StateProvider';
import Payment from './component/Payment';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";


const promise = loadStripe("pk_test_51MYlqXIBCUS374c793wk3e3NemH9m7c96Dcmkse4Yu0ycMtwS2IKDpWZCJqAAoOdOUNrhTkl0IOb1MgyLvCJQjtB00a7XRIGkA"); 


function App() {


const[{},dispatch] = useStateValue();


useEffect(()=>{
  //will only run once when the app component loads
  auth.onAuthStateChanged(authUser=>{
    console.log('the user is : ',authUser); 

    if(authUser){
      //the user just loggied in
      dispatch({
        type: 'set_user',
        user: authUser
      })
    }

    else{
      //the uesr just logged out
      dispatch({
        type: 'set_user',
        user: null
      })
    }

  })
},[])

  return (
    <div className="app"> 
    <Router>
    <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>} />
      </Routes>
    

    </Router>
    
    </div>


    

   
   
  );
}

export default App;
