import React from 'react';
import './offers.css';
import easydiner from './assets/Group.png';
import book from './assets/book.jpg';
import swiggy from './assets/swiggy.jpg';
import zepto from './assets/zepto.jpg';
import blinkit from './assets/blink.jpg';
import coupon from './assets/coupon.jpg';
import coupon1 from './assets/coupon1.jpg';
import birthday from './assets/birthday.jpg';

const OffersSection = () => {
  return (
    <div className="offers-section">
      <div className="offers-content">
        <div className="offers-text">
          <h2>Exclusive offers on your Everyday Savings</h2>
          <p>
            Pay using your Everyday debit card to earn exclusive discounts on
            below partners. Save up to ₹5,700 every month.
          </p>
        </div>

        {/* 3 */}

        <div className="offers-card">
          <div className="logo-container">
            <img src={easydiner} alt="easydiner" className="easydiner" />
          </div>
          <div className="offers-card-content">
            <h3>30% off on restaurant bills</h3>
            <p>Up to ₹1,000 per transaction. No minimum bill value. </p>
            <p>Offer available 4 times a month on your debit card.</p>
          </div>
        </div>

        {/* 2 */}

        <div className="offers-card">
          <div className="logo-container">
            <img src={book} alt="book" className="book" />
          </div>
          <div className="offers-card-content">
            <h3>20% off on tickets</h3>
            <p>Up to ₹100 per transaction. No minimum bill value.</p>
            <p>Offer available 2 times a month on your debit card.</p>
          </div>
        </div>
        {/* 3 */}
        <div className="offers-card">
          <div className="logo-container">
            <img src={swiggy} alt="swiggy" className="swiggy" />
          </div>
          <div className="offers-card-content">
            <h3>15% off on grocery delivery</h3>
            <p>Up to ₹250 per transaction. ₹749 minimum bill value.</p>
            <p>Offer available 2 times a month on your debit card.</p>
          </div>
        </div>

        {/* 4 */}
        <div className="offers-card">
          <div className="logo-container">
            <img src={zepto} alt="zepto" className="zepto" />
          </div>
          <div className="offers-card-content">
            <h3>15% off on grocery delivery</h3>
            <p>Up to ₹250 per transaction. ₹749 minimum bill value.</p>
            <p>Offer available 2 times a month on your debit card.</p>
          </div>
        </div>

        {/* 5 */}
        <div className="offers-card">
          <div className="logo-container">
            <img src={blinkit} alt="blinkit" className="blinkit" />
          </div>
          <div className="offers-card-content">
            <h3>15% off on grocery delivery</h3>
            <p>Up to ₹250 per transaction. ₹999 minimum bill value. </p>
            <p>Offer available 2 times a month on your debit card.</p>
          </div>
        </div>

        {/* 6 */}
        <div className="offers-card">
          <div className="logo-container">
            <img src={coupon} alt="coupon" className="coupon" />
          </div>
          <div className="offers-card-content">
            <h3>₹150 voucher on 50 transactions</h3>
            <p>Complete 50 transactions to earn a voucher worth ₹150,</p>
            <p>giving you extra rewards for your transactions.</p>
          </div>
        </div>


        {/* 7 */}
        <div className="offers-card">
          <div className="logo-container">
            <img src={coupon1} alt="coupon1" className="coupon1" />
          </div>
          <div className="offers-card-content">
            <h3>₹250 voucher on 100 transactions</h3>
            <p>Complete 100 transactions to earn a voucher worth ₹250,</p>
            <p>giving you extra rewards for your transactions.</p>
          </div>
        </div>

        {/* 8 */}
        <div className="offers-card">
          <div className="logo-container">
            <img src={birthday} alt="birthday" className="birthday" />
          </div>
          <div className="offers-card-content">
            <h3>₹250 voucher on birthday & anniversary</h3>
            <p>Celebrate with gift vouchers worth ₹250 on your birthday </p>
            <p>and anniversary with the bank.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
