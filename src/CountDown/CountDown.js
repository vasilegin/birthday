import React from 'react';
import './CountDown.css'

const CountDown = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {
  const [over, setOver] = React.useState(false);
  const [[d, h, m, s], setTime] = React.useState([days, hours, minutes, seconds]);

  const tick = () => {
    if (d === 0 && h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([d - 1, 23, 59, 59]);
    }
      else if (m === 0 && s === 0) {
      setTime([d, h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([d, h, m - 1, 59]);
    } else {
      setTime([d, h, m, s - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <div className='countdown'>
        {`${d.toString().padStart(3, '0')}:${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
      </div>
      <div className='con-window'>
        {over ? "С днем рождения!" : ''}
      </div>
    </div>
  );
};

export default CountDown;