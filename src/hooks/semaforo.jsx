import React, { useState } from 'react';
import './semaforo.css';

const Semaphor = () => {

  const [color, setColor] = useState('...');
  const [lastSelectedColor, setLastSelectedColor] = useState(null);

  return (
    <div>
      <div className="semaphor">
        <div className="black-rectangle">
          <button
            className={`light ${color === 'red' || lastSelectedColor === 'red' ? 'active' : ''}`}
            data-color="red"
            onClick={() => {
              if (color === 'red') { 
                setColor(null);
                setLastSelectedColor(null);
              } else {
                setColor('red'); 
                setLastSelectedColor('red');
              }
            }}
          />
          
          <button
            className={`light ${color === 'yellow' || lastSelectedColor === 'yellow' ? 'active' : ''}`}
            data-color="yellow"
            onClick={() => {
              if (color === 'yellow') { 
                setColor(null);
                setLastSelectedColor(null);
              } else {
                setColor('yellow'); 
                setLastSelectedColor('yellow');
              }
            }}
          />
          <button
            className={`light ${color === 'green' || lastSelectedColor === 'green' ? 'active' : ''}`}
            data-color="green"
            onClick={() => {
              if (color === 'green') { 
                setColor(null);
                setLastSelectedColor(null);
              } else {
                setColor('green'); 
                setLastSelectedColor('green');
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Semaphor;