import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCounter = useSelector((state) => state.cart.cartCounter);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const deliveryCharges = useSelector((state) => state.cart.deliveryCharges);
  const taxes = useSelector((state) => state.cart.taxes);
  const grandTotal = useSelector((state) => state.cart.grandTotal);

  // Format to display prices with currency
  const formatPrice = (price) => {
    return `RS. ${price.toFixed(2)}`;
  };

  return (
    <>
      <div className="container bg-white mt-5">
        <Navbar />

        {cartItems.length ? (
          <>
            <h3 className="border-bottom py-2 mb-3 mt-5">Shopping Cart</h3>
            <div className="row">
              {/* Cart Items */}
              <div className="col-md-8 shadow">
                <div className="row border-bottom py-3">
                  <div className="col-md-9">Item</div>
                  <div className="col-md-1 text-end">Cost</div>
                  <div className="col-md-1 text-end">Qty</div>
                  <div className="col-md-1 text-end">Total</div>
                </div>

                {cartItems.map((item) => (
                  <div className="row py-4 border-bottom" key={item.id}>
                    <div className="col-md-9 d-flex">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "40px", height: "40px" }}
                      />
                      <h6 className="ps-3 mb-0">{item.title}</h6>
                    </div>
                    <div className="col-md-1 text-end">{formatPrice(item.price)}</div>
                    <div className="col-md-1 text-end">{item.quantity}</div>
                    <div className="col-md-1 text-end">
                      {formatPrice(item.total_item_price)}
                    </div>
                  </div>
                ))}

                {/* Total Row */}
                <div className="row py-3 pe-3">
                  <div className="offset-md-9 col-md-1">
                    <h5 className="text-end">Total</h5>
                  </div>
                  <div className="col-md-1 text-end">
                    <h5>{cartCounter}</h5>
                  </div>
                  <div className="col-md-1 text-center">
                    <h5>{formatPrice(totalPrice)}</h5>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="col-md-4">
                <div className="shadow p-3 ms-2 mt-2">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Sub Total</p>
                    <p>{formatPrice(totalPrice)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p>Delivery Charges</p>
                    <p>{formatPrice(deliveryCharges)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p>Taxes</p>
                    <p>{formatPrice(taxes)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5>Grand Total</h5>
                    <h5>{formatPrice(grandTotal)}</h5>
                  </div>
                  <Link
                    className={`btn btn-success w-100 ${!grandTotal ? "disabled" : ""}`}
                    to={grandTotal ? "/payment" : "#"}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-center mt-5 pt-5">No Items in Cart</h1>
        )}
      </div>
    </>
  );
};

export default CartDetails;
