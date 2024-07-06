import React from 'react';
import "./aboutme.css"

interface CustomCSSProperties extends React.CSSProperties {
  '--x'?: number;
  '--y'?: number;
  '--i'?: number;
}

const cube = () => {
  return (
    <div className="container hidden lg:block">
      {[...Array(3)].map((_, cubeIndex) => (
        <div className="cube" key={cubeIndex}>
          {[-1, 0, 1].map((x, xIndex) => (
            <div style={{ '--x': x, '--y': 0 } as CustomCSSProperties} key={xIndex}>
              {[3, 2, 1].map((i) => (
                <span style={{ '--i': i } as CustomCSSProperties} key={i}></span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default cube;
