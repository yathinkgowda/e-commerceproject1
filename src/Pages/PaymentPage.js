import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CardPaymentForm from './CardPaymentForm';
import UPIPaymentForm from './UPIPaymentForm';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const deliveryCharges = useSelector((state) => state.cart.deliveryCharges);
  const taxes = useSelector((state) => state.cart.taxes);
  const grandTotal = useSelector((state) => state.cart.grandTotal);

  const handlePayment = async () => {
    setIsLoading(true);
    setPaymentError(null);
    try {
      setTimeout(() => {
        setIsLoading(false);
        setPaymentSuccess(true);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setPaymentError('Payment failed, please try again.');
    }
  };

  return (
    <div className="styled-payment-container">
      {paymentSuccess ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your order.</p>
        </div>
      ) : (
        <>
          <h2 className="title">Checkout</h2>
          <div className="grid-layout">
            <div className="summary-card">
              <h3 className="section-title">Order Summary</h3>
              <ul>
                <li><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></li>
                <li><span>Shipping</span><span>₹{deliveryCharges.toFixed(2)}</span></li>
                <li><span>Taxes</span><span>₹{taxes.toFixed(2)}</span></li>
                <li className="total"><span>Total</span><span>₹{grandTotal.toFixed(2)}</span></li>
              </ul>
            </div>
            <div className="payment-methods">
              <h3 className="section-title">Select Payment Method</h3>
              <div className="options">
                {['card', 'upi', 'cod'].map((method) => (
                  <label
                    key={method}
                    className={`option ${paymentMethod === method ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />
                    {method === 'card' && 'Credit / Debit Card'}
                    {method === 'upi' && 'UPI'}
                    {method === 'cod' && 'Cash on Delivery'}
                  </label>
                ))}
              </div>
              {paymentMethod === 'card' && <CardPaymentForm />}
              {paymentMethod === 'upi' && <UPIPaymentForm />}
              {isLoading ? (
                <div className="loader">Processing Payment...</div>
              ) : (
                <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
              )}
              {paymentError && <div className="error">{paymentError}</div>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentPage;