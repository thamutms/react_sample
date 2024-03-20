import React from 'react'; // Ensure React is in scope
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Contact Information</h2>
      <button onClick={() => navigate('/home')}>Home</button>
    </div>
  );
};

export default Contact;
