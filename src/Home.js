import React from 'react'; // Ensure React is in scope
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/login', { replace: true })}>Logout</button>
    </div>
  );
};

export default Home;
