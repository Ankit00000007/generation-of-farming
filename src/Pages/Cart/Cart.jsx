import React from 'react';
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import "./Cart.css";

const Cart = () => {
     const { cartItems, dispatch } = useCart();

     const handleUpdateQuantity = (itemId, newQuantity) => {
       dispatch({
         type: "UPDATE_QUANTITY",
         payload: { id: itemId, quantity: Math.max(1, newQuantity) },
       });
     };

     const handleRemoveItem = (itemId) => {
       dispatch({
         type: "REMOVE_FROM_CART",
         payload: { id: itemId },
       });
     };

     const calculateSubtotal = () =>
       cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

     const shippingCost = 5.0;
     const subtotal = calculateSubtotal();
     const total = subtotal + shippingCost;
  return (
    <div>
      <div class="ec-contact-section">
        <div class="ec-contact-hero">
          <h1 class="ec-contact-hero-title">Cart</h1>
          <div class="ec-contact-breadcrumb">
            <Link
              class="ec-no-underline ec-link-clr"
              to="/Home"
              data-discover="true"
            >
              Home |{" "}
            </Link>{" "}
            Cart
          </div>
        </div>
      </div>
      <div className="cart-page-container">
        <h1 className="cart-page-title">My Cart</h1>

        <div className="cart-page-content">
          <div className="cart-items-section">
            {cartItems.length === 0 ? (
              <div className="empty-cart-message">
                <p>Your cart is empty</p>
                <Link to="/products" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>

                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="quantity-btn"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleUpdateQuantity(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="quantity-input"
                          min="1"
                        />
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="quantity-btn"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="remove-item-btn"
                      >
                        <X size={16} />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-item">
                <span>Items({cartItems.length})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="discount-code">
                <label>Do you have any Discount Code?</label>
                <div className="discount-input">
                  <input type="text" placeholder="Enter your code" />
                  <button className="apply-btn">Apply</button>
                </div>
              </div>

              <div className="summary-item">
                <span>Delivery Charges</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>

              <div className="summary-total">
                <span>Total Cost</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart