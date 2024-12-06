import React from "react";
import "./Card.css";
import ramen from "./assets/ramen.png";
import pizza from "./assets/pizza.png";
import popcorn from "./assets/popcorn.png";
import savingsBadge from "./assets/savingsBadge.png";
import redgift from "./assets/redgift.png";
import pinkgift from "./assets/pinkgift.png";
import movie from "./assets/movie-icon.png";
import phone from "./assets/phone.png";
import debit from "./assets/creditcard.png";
import red from "./assets/red.png";
import purple from "./assets/purple.png";
import blue from "./assets/blue.png";
import skyblue from "./assets/skyblue.png";
import green from "./assets/green.png";
import orange from "./assets/orange.png";
import yellow from "./assets/yellow.png";

const Card = () => {
  return (
    <div className="card-container">
      {/* Main Card */}
      <div className="card">
        <div className="card-left">
          <img src={ramen} alt="Ramen" className="ramen" />
          <img src={popcorn} alt="Popcorn" className="popcorn" />
          <img src={pizza} alt="Pizza" className="pizza" />
          <img src={savingsBadge} alt="Savings Badge" className="savings-badge" />
          <img src={redgift} alt="redgift" className="redgift" />
          <img src={movie} alt="movie" className="movie" />
          <img src={pinkgift} alt="pinkgift" className="pinkgift" />
          <img src={phone} alt="pinkgift" className="phone" />
        </div>
        <div className="card-right">
          <h1>Get monthly discount deals of up to ₹5,700</h1>
          <div className="underline"></div>
          <p>
            Enjoy exclusive offers and discounts on popular brands like Zepto,
            Blinkit, Swiggy Instamart, BookMyShow, and EazyDiner.
          </p>
        </div>
      </div>
      <div className="small-card-container">
        {/* First Card */}
        <div className="small-card">
          <div className="small-card-content">
            <h1>Pay using your<br></br> Everyday debit card</h1>
            <div className="red-underline"></div>
            <p>
              Say goodbye to annual maintenance fees with<br></br>  your Everyday Debit Card. Enjoy amazing <br></br>discounts on your favourite brands.
            </p>
            <div class="small-card-image">
              <img src={debit} alt="debitcard" className="debit" />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="small-card">
          <div className="small-card-content">
            <h1>Earn up to 7% interest p.a. with Activ<span class="red-text">Money</span></h1>
            <div className="red-underline"></div>
            <p>
              Enjoy FD-like interest in your Savings Account <br />
              with the ActivMoney facility. Access your <br />
              money anytime with no penalty.
            </p>

            <div className="seven-container">
              <img src={red} alt="Red Seven" className="seven red" />
              <img src={purple} alt="Purple Seven" className="seven purple" />
              <img src={blue} alt="Blue Seven" className="seven blue" />
              <img src={skyblue} alt="Sky Blue Seven" className="seven skyblue" />
              <img src={green} alt="Green Seven" className="seven green" />
              <img src={orange} alt="Orange Seven" className="seven orange" />
              <img src={yellow} alt="Yellow Seven" className="seven yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
