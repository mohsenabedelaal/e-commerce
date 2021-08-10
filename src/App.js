import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase.js';

function App() {
  const [ {user},dispatch] = useStateValue();
  //useEffect <<<<<<<< PowerFul (from class base to function base)
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if (authUser){
        //the user is logged in

        dispatch({
          type: "SET_USER",
          user : authUser,
        });
      }else{
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return ()=>{
      //any cleanup goes here ..
      unsubscribe();
    };
   }, []);

   console.log("User is >>>>",user);

  return (
    <Router>

      <div className="app">

      <Switch>
        <Route path="/checkout" exact>
          <Header />
          <Checkout/>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Header/>
          <Home />


        </Route>

        <Route path="/tester" exact>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>
        </Route>
      </Switch>
      </div>
    </Router>

  );
}

export default App;
