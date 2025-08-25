import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">NetPay Dashboard</h1>
          <div className="user-info">
            <span className="welcome-text">
              Welcome, {user?.first_name || user?.username}!
            </span>
            <button onClick={handleLogout} className="btn btn-logout">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div className="dashboard-card balance-card">
            <div className="card-icon">💰</div>
            <div className="card-content">
              <h3>Account Balance</h3>
              <p className="balance-amount">$2,547.83</p>
              <span className="balance-change">+2.5% from last month</span>
            </div>
          </div>

          <div className="dashboard-card transactions-card">
            <div className="card-icon">📊</div>
            <div className="card-content">
              <h3>Recent Transactions</h3>
              <p className="transaction-count">15 transactions</p>
              <span className="transaction-status">3 pending</span>
            </div>
          </div>

          <div className="dashboard-card quick-actions">
            <div className="card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="action-buttons">
              <button className="action-btn">
                <span className="action-icon">💸</span>
                Send Money
              </button>
              <button className="action-btn">
                <span className="action-icon">💳</span>
                Pay Bills
              </button>
              <button className="action-btn">
                <span className="action-icon">📈</span>
                Invest
              </button>
              <button className="action-btn">
                <span className="action-icon">🎯</span>
                Goals
              </button>
            </div>
          </div>

          <div className="dashboard-card profile-card">
            <div className="card-header">
              <h3>Profile Information</h3>
            </div>
            <div className="profile-info">
              <div className="profile-item">
                <label>Username:</label>
                <span>{user?.username}</span>
              </div>
              <div className="profile-item">
                <label>Email:</label>
                <span>{user?.email}</span>
              </div>
              <div className="profile-item">
                <label>Full Name:</label>
                <span>
                  {user?.first_name && user?.last_name 
                    ? `${user.first_name} ${user.last_name}` 
                    : 'Not provided'}
                </span>
              </div>
              <button className="btn btn-secondary">Edit Profile</button>
            </div>
          </div>

          <div className="dashboard-card recent-activity">
            <div className="card-header">
              <h3>Recent Activity</h3>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">💸</div>
                <div className="activity-details">
                  <p>Sent $50.00 to John Doe</p>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💰</div>
                <div className="activity-details">
                  <p>Received $125.00 from Jane Smith</p>
                  <span>1 day ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💳</div>
                <div className="activity-details">
                  <p>Bill payment to Electric Company</p>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-card security-card">
            <div className="card-header">
              <h3>Security</h3>
            </div>
            <div className="security-status">
              <div className="security-item">
                <span className="security-label">Two-Factor Auth:</span>
                <span className="status-badge enabled">Enabled</span>
              </div>
              <div className="security-item">
                <span className="security-label">Last Login:</span>
                <span>Today at 10:30 AM</span>
              </div>
              <button className="btn btn-secondary">Security Settings</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
