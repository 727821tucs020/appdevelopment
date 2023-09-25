import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import birthday from "../assets/images/birthday.jpg";
import marriage from "../assets/images/marriage.jpg";
import haloween from "../assets/images/haloween.jpg";
import dj from "../assets/images/dj.jpg";
import avatar from "../assets/images/avatar.jpg";
import '../assets/css/dashboard.css';

function Dashboard() {
  const user = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate('/');
    }
  };

  let content;
  let welcomeMessage;

  if (activeTab === 'Dashboard' || activeTab === 'Events') {
    welcomeMessage = (
      <h1>
        Welcome, <span className="username_username">{user.username || 'Guest'}</span>
      </h1>
    );
  }

  if (activeTab === 'Dashboard') {
    content = (
      <div>
        <h2>Look at Your Stats!!!</h2>
        <h5>events registered:2</h5>
        <h5>total expenses:$200</h5>
        <h5>your savings:$50</h5>
        <h5 className='vvji'>Rate us!!!</h5>
        <h5></h5>
      </div>
    );
  } else if (activeTab === 'Profile') {
    content = (
      <div className="profile-content">
        <div className="profile-left">
          <img
            src={avatar}
            alt="Profile"
            style={{ width: '150px', height: '150px' }}
          />
        </div>
        <div className="profile-info">
          <h2>Profile Information</h2>
          <p>
            <strong>Username:</strong> {user.username || 'Guest'}
          </p>
          <p>
            <strong>Email:</strong> {user.email || '727821tucs020@skct.edu.in'}
          </p>
          {/* Add more profile information here */}
        </div>
      </div>
    );
  } else if (activeTab === 'Events') {
    content = (
      <div className="event-images">
        <h2 className='font'>We provide you</h2>
        <div className="image-row">
          <img src={birthday} alt="Image 1" className="dashboard-image" />
          <img src={marriage} alt="Image 2" className="dashboard-image" />
        </div>
        <div className="image-row">
          <img src={dj} alt="Image 3" className="dashboard-image" />
          <img src={haloween} alt="Image 4" className="dashboard-image" />
        </div>
      </div>
    );
  }

  return (
    <div className='Dashboard'>
      <div className='Sidebar'>
        <div
          className={`SidebarItem ${activeTab === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('Dashboard')}
        >
          Dashboard
          
        </div>
        <div
          className={`SidebarItem ${activeTab === 'Profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile
        </div>
        <div
          className={`SidebarItem ${activeTab === 'Events' ? 'active' : ''}`}
          onClick={() => setActiveTab('Events')}
        >
          Events
        </div>
        <div
          className={`SidebarItem ${activeTab === 'Logout' ? 'Logout' : ''}`}
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
      <div className='Dashboard-Content'>
        {welcomeMessage}
        {content}
      </div>
    </div>
  );
}

export default Dashboard;
