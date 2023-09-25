import React, { useState } from 'react';
import '../assets/css/wedding.css';
import { Link, useNavigate } from 'react-router-dom';
function WeddingRegistrationForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email:'',
    place: '',
    time: '',
    date: '',
    photography: '',
    dining: '',
    furnitureType: '',
    musicEvent: 'yes', // Added music event field with default value 'No'
    danceEvent: 'yes', // Added dance event field with default value 'No'
    dronePhotography: 'No', // Added drone photography field with default value 'No'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation");
    // Handle form submission (e.g., send data to a server)
    if (formData.mobile.length !== 10) {
        alert('Mobile number must be exactly 10 digits.');
        return;
      }
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <nav className="wedding-navbar"> {/* Unique className for your navbar */}
      <div className="navbar-left">
        <span className="navbar-name">
          <i>Dream maker</i>
        </span>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="wedding-registration-form-container">
       
      <h2 className="popp"> Event Registration</h2>
      <form onSubmit={handleSubmit}>
      <div className="wedding-form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
</div>
        <div className="wedding-form-group">
          <label htmlFor="place">Event Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
          <label htmlFor="time">Event Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="wedding-form-group">
  <label htmlFor="photography">Photography:</label>
  <select
    id="photography"
    name="photography"
    value={formData.photography}
    onChange={handleChange}
    className="custom-select" // Add a specific class name
  >
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>
</div>


<div className="wedding-form-group">
  <label htmlFor="dining">Dining Options:</label>
  <select
    id="dining"
    name="dining"
    value={formData.dining}
    onChange={handleChange}
    className="custom-select" // Add a specific class name
  >
    <option value="">Select Dining Option</option>
    <option value="plated-sit-down">Plated Sit-Down</option>
    <option value="buffet">Buffet</option>
  </select>
</div>


        <div className="wedding-form-group">
  <label htmlFor="furnitureType">Furniture Type:</label>
  <select
    id="furnitureType"
    name="furnitureType"
    value={formData.furnitureType}
    onChange={handleChange}
    className="custom-select" // Add a specific class name
  >
    <option value="">Select Furniture Type</option>
    <option value="Traditional">Traditional</option>
    <option value="Modern">Modern</option>
    <option value="Vintage">Vintage</option>
  </select>
</div>

        <div className="wedding-form-group">
          <label htmlFor="musicEvent">Music Event:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="musicEventYes"
              name="musicEvent"
              value="Yes"
              required
              checked={formData.musicEvent === 'Yes'}
              onChange={handleChange}
            />
            <label htmlFor="musicEventYes">Yes</label>
            <input
              type="radio"
              id="musicEventNo"
              name="musicEvent"
              value="No"
              checked={formData.musicEvent === 'No'}
              onChange={handleChange}
              required

            />
            <label htmlFor="musicEventNo">No</label>
          </div>
        </div>
        <div className="wedding-form-group">
          <label htmlFor="danceEvent">Dance Event:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="danceEventYes"
              name="danceEvent"
              value="Yes"

              checked={formData.danceEvent === 'Yes'}
              onChange={handleChange}
              required

            />
            <label htmlFor="danceEventYes">Yes</label>
            <input
              type="radio"
              id="danceEventNo"
              name="danceEvent"
              value="No"
              required

              checked={formData.danceEvent === 'No'}
              onChange={handleChange}
            />
            <label htmlFor="danceEventNo">No</label>
          </div>
        </div>
        <div className="wedding-form-group">
          <label htmlFor="dronePhotography">Drone Photography:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="dronePhotographyYes"
              name="dronePhotography"
              value="Yes"
              checked={formData.dronePhotography === 'Yes'}
              onChange={handleChange}
            />
            <label htmlFor="dronePhotographyYes">Yes</label>
            <input
              type="radio"
              id="dronePhotographyNo"
              name="dronePhotography"
              value="No"
              required
              checked={formData.dronePhotography === 'No'}
              onChange={handleChange}
            />
            <label htmlFor="dronePhotographyNo">No</label>
          </div>
        </div>
      
     
        <div className="wedding-form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button >Book</button>
      </form>
    </div>
    </div>
  );
}

export default WeddingRegistrationForm