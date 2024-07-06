// /components/background/Background.tsx

import React from 'react';
import './background.css';

const Background: React.FC = () => {
  return (
    <div className="background-container">
      <div className="container">
        {[...Array(7)].map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {[...Array(12)].map((_, hexIndex) => (
              <div className="hexagon" key={hexIndex}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
