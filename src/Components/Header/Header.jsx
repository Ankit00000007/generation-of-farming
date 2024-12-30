import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { Menu, X, ShoppingCart, Trash2 } from "lucide-react";
import Logo from "../../Images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const cartRef = useRef(null);

  // Sample cart data - replace with your actual cart state
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "/api/placeholder/50/50",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      quantity: 1,
      image: "/api/placeholder/50/50",
    },
  ];

  // Close cart popup when clicking outside
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

  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return location.pathname === path;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

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

                {/* Cart Popup */}
                {isCartOpen && (
                  <div className="ec-cart-popup">
                    <div className="ec-cart-popup-header">
                      <h3>Shopping Cart ({cartItems.length})</h3>
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
                              <p>
                                ${item.price.toFixed(2)} x {item.quantity}
                              </p>
                            </div>
                            <button className="ec-cart-item-remove">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="ec-cart-empty">Your cart is empty</p>
                      )}
                    </div>

                    {cartItems.length > 0 && (
                      <div className="ec-cart-popup-footer">
                        <div className="ec-cart-total">
                          <span>Total:</span>
                          <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="ec-cart-actions">
                          <Link to="/cart" className="ec-cart-view-button">
                            View Cart
                          </Link>
                          <Link
                            to="/checkout"
                            className="ec-cart-checkout-button"
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <button className="ec-register-button">Register now</button>
            </div>
            {/* Mobile menu button */}
            <div className="ec-mobile-menu-button">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`ec-mobile-menu ${isOpen ? "show" : ""}`}>
          <div className="ec-mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`ec-mobile-nav-link ${
                  isActiveLink(item.link) ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)} // Close menu when link is clicked
              >
                {item.name}
              </Link>
            ))}
            <div className="ec-mobile-actions">
              <div className="ec-cart-icon">
                <ShoppingCart />
                <span className="ec-cart-badge">2</span>
              </div>
              <button className="ec-register-button">Register now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
