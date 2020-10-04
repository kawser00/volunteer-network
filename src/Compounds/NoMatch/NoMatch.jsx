import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="text-center mt-5">
      <h1>404 ERROR!!</h1>
      <p>Page Not Found</p>
      <Link to="/home">Back to home</Link>
    </div>
  );
};

export default NoMatch;