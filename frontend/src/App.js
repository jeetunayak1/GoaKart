import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductScreen from './Screens/ProductScreen/ProductScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">Goa Kart</Link>
                </div>
                <div className="header-links">
                    <a href="cart.html">cart</a>
                    <a href="signin">signin</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">pants</a>
                    </li>
                    <li>
                        <a href="index.html">shirts</a>
                    </li>

                </ul>
            </aside> 
            <main className="main"> 
                <div className="content">
                    <Route path="/" exact={true} component={HomeScreen}/>
                    <Route path="/products/:id" component={ProductScreen}/>

                </div>
              
            </main>
            <footer className="footer">
                Copyright 2020
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
