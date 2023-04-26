import * as React from 'react';
import './InputBox.css';
import Button from '@mui/material/Button';
import background from '../../images/bg-boost-desktop.svg';
import {useState} from 'react';

function InputBox({ setInputValue }) {
  const [value, setValue] = useState('');

  const shortenLink = () => {
    setInputValue(value);
    setValue('');
  }

  return (
    <div className="shortenContainer" style={{backgroundImage: `url(${background})`}}>
      <div>
        <input 
          type="text" 
          className="shortenBox" 
          placeholder="Shorten a link here..."
          value={value}
          onChange={e => setValue(e.target.value)} 
        />
        <Button variant="contained" sx={{borderRadius: 50}} onClick={shortenLink}>Shorten It!</Button>
      </div>
    </div>
  )
}

export default InputBox;