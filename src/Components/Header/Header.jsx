import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../../Pages/Cart/CartContext";
import Register from "../RegisterLogin/Register";
import Logo from "../../Images/logo.png";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartRef = useRef(null);
  const location = useLocation();
  const { cartItems, dispatch } = useCart();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const shipping = 10.0;
  const taxes = 5.0;
  const total = calculateSubtotal() + shipping + taxes;

  return (
    <div>
      <nav className="ec-navbar">
        <div className="ec-navbar-container">
          <div className="ec-navbar-content">
            <div className="ec-navbar-logo">
              <img src={Logo} alt="Generation of Farming" />
            </div>

            <div className="ec-navbar-links">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className={`ec-nav-link ${
                    isActiveLink(item.link) ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="ec-navbar-actions">
              <div className="ec-cart-wrapper" ref={cartRef}>
                <div
                  className="ec-cart-icon"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  <ShoppingCart />
                  <span className="ec-cart-badge">{cartItems.length}</span>
                </div>

                {isCartOpen && (
                  <div className="ec-cart-popup">
                    <div className="ec-cart-popup-header">
                      <h3>Cart</h3>
                      <button
                        className="ec-cart-close"
                        onClick={() => setIsCartOpen(false)}
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="ec-cart-popup-items">
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                          <div key={item.id} className="ec-cart-item">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="ec-cart-item-image"
                            />
                            <div className="ec-cart-item-details">
                              <h4>{item.name}</h4>
                              <p>${item.price.toFixed(2)}</p>
                            </div>
                            <div className="ec-cart-item-quantity">
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {
                                      id: item.id,
                                      quantity: Math.max(1, item.quantity - 1),
                                    },
                                  })
                                }
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {
                                      id: item.id,
                                      quantity: item.quantity + 1,
                                    },
                                  })
                                }
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="ec-cart-item-remove"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: { id: item.id },
                                })
                              }
                            >
                              ×
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="ec-cart-empty">Your cart is empty</p>
                      )}
                    </div>

                    {cartItems.length > 0 && (
                      <div className="ec-cart-popup-footer">
                        <div className="ec-cart-summary">
                          <div className="ec-cart-summary-row">
                            <span>Subtotal:</span>
                            <span>${calculateSubtotal().toFixed(2)}</span>
                          </div>
                          <div className="ec-cart-summary-row">
                            <span>Shipping:</span>
                            <span>${shipping.toFixed(2)}</span>
                          </div>
                          <div className="ec-cart-summary-row">
                            <span>Taxes:</span>
                            <span>${taxes.toFixed(2)}</span>
                          </div>
                          <div className="ec-cart-summary-row ec-cart-total">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="ec-cart-actions">
                          <Link
                            to="/cart"
                            className="ec-cart-view-button"
                            onClick={() => setIsCartOpen(false)}
                          >
                            View Cart
                          </Link>
                          <Link
                            to="/checkout"
                            className="ec-cart-checkout-button"
                            onClick={() => setIsCartOpen(false)}
                          >
                            Check out
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="ec-register-button"
              >
                Register now
              </button>

              <Register
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>

            <div className="ec-mobile-menu-button">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        <div className={`ec-mobile-menu ${isOpen ? "show" : ""}`}>
          <div className="ec-mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`ec-mobile-nav-link ${
                  isActiveLink(item.link) ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="ec-mobile-actions">
              <div className="ec-cart-icon">
                <ShoppingCart />
                <span className="ec-cart-badge">{cartItems.length}</span>
              </div>
              <button
                className="ec-register-button"
                onClick={() => setIsModalOpen(true)}
              >
                Register now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
