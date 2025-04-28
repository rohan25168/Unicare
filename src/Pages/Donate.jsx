import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');

  const showPaymentDetails = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    switch (paymentMethod) {
      case 'credit-card':
        alert('Credit card payment processed. Thank you for your donation!');
        break;
      case 'paypal':
        alert('Redirecting to PayPal...');
        redirectToPayPal(amount);
        break;
      case 'upi':
        alert('UPI payment processed. Please confirm in your app.');
        break;
      case 'net-banking':
        alert('Redirecting to bank for payment completion.');
        break;
      default:
        alert('Invalid payment method.');
    }
  };

  const redirectToPayPal = (amount) => {
    const paypalUrl = `https://www.paypal.com/donate?business=YOUR_PAYPAL_ID&currency_code=INR&amount=${amount}`;
    window.location.href = paypalUrl;
  };

  return (
    <div className="payment-page">
      <h2>Make a Donation</h2>
      <p>Please choose a payment method and enter your details to support our cause.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Donation Amount (INR):</label>
        <input
          type="number"
          id="amount"
          name="amount"
          required
          min="1"
          placeholder="Enter amount in ₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <h3>Select Payment Method</h3>

        {/* Credit Card */}
        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="payment"
              value="credit-card"
              onClick={() => showPaymentDetails('credit-card')}
            />
            Credit Card
          </label>
          {paymentMethod === 'credit-card' && (
            <div className="payment-details">
              <input type="text" placeholder="Cardholder Name" required />
              <input type="text" placeholder="Card Number" required maxLength="16" />
              <input type="text" placeholder="MM/YY" required maxLength="5" />
              <input type="text" placeholder="CVV" required maxLength="3" />
            </div>
          )}
        </div>

        {/* PayPal */}
        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="payment"
              value="paypal"
              onClick={() => showPaymentDetails('paypal')}
            />
            PayPal
          </label>
          {paymentMethod === 'paypal' && (
            <div className="payment-details">
              <p>Click the button below to be redirected to PayPal to complete your donation.</p>
            </div>
          )}
        </div>

        {/* UPI */}
        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              onClick={() => showPaymentDetails('upi')}
            />
            UPI
          </label>
          {paymentMethod === 'upi' && (
            <div className="payment-details">
              <p>Select your UPI method or enter your UPI ID below:</p>
              <select>
                <option value="">Select UPI App</option>
                <option value="google-pay">Google Pay</option>
                <option value="phonepe">PhonePe</option>
                <option value="paytm">Paytm</option>
                <option value="bhim">BHIM</option>
                <option value="other">Other</option>
              </select>
              <input type="text" placeholder="Enter UPI ID (e.g., yourname@bank)" required />
            </div>
          )}
        </div>

        {/* Net Banking */}
        <div className="payment-method">
          <label>
            <input
              type="radio"
              name="payment"
              value="net-banking"
              onClick={() => showPaymentDetails('net-banking')}
            />
            Net Banking
          </label>
          {paymentMethod === 'net-banking' && (
            <div className="payment-details">
              <label htmlFor="bank">Select Bank:</label>
              <select id="bank">
                <option value="">--Select Bank--</option>
                <option value="SBI">State Bank of India</option>
                <option value="ICICI">ICICI Bank</option>
                <option value="HDFC">HDFC Bank</option>
                <option value="AXIS">Axis Bank</option>
              </select>
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">Donate Now</button>
      </form>
    </div>
  );
};

export default Donate;
