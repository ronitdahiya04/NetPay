import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-background">
        <div className="landing-content">
          <div className="landing-header">
            <h1 className="landing-title">Welcome to NetPay</h1>
            <p className="landing-subtitle">
              Your trusted platform for secure digital payments and financial management
            </p>
          </div>

          <div className="landing-features">
            <div className="feature">
              <div className="feature-icon">💳</div>
              <h3>Secure Payments</h3>
              <p>Bank-level security for all your transactions</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access your account anywhere, anytime</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Instant Transfers</h3>
              <p>Send and receive money in seconds</p>
            </div>
          </div>

          <div className="landing-actions">
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-secondary">
              Create Account
            </Link>
          </div>

          <div className="landing-footer">
            <p>&copy; 2025 NetPay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
