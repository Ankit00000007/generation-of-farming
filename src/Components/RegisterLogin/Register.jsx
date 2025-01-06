import React, { useState } from "react";
import "./Register.css";

const Register = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailPhone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="ec1-modal-overlay">
      <div className="ec1-modal-container">
        <button onClick={onClose} className="ec1-modal-close">
          ×
        </button>

        <h2 className="ec1-modal-title">{isLogin ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit} className="ec1-auth-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="ec1-form-input"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          )}

          <input
            type="text"
            placeholder="Email or Phone Number"
            className="ec1-form-input"
            value={formData.emailPhone}
            onChange={(e) =>
              setFormData({ ...formData, emailPhone: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Create Password"
            className="ec1-form-input"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="ec1-form-input"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          )}

          {!isLogin && (
            <div className="ec1-terms-container">
              <input
                type="checkbox"
                id="terms"
                className="ec1-terms-checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeToTerms: e.target.checked })
                }
              />
              <label htmlFor="terms" className="ec1-terms-label">
                By clicking Register, you agree to our Terms of Use and Cookie
                Policy
              </label>
            </div>
          )}

          <button type="submit" className="ec1-submit-button">
            {isLogin ? "LOGIN" : "REGISTER"}
          </button>
        </form>

        <div className="ec1-toggle-auth">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="ec1-toggle-button"
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Do not have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="ec1-toggle-button"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
