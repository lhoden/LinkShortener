import './App.css';
import Header from './components/header/Header';
import InputBox from './components/input-box/InputBox';
import ShortenLink from './components/shorten-link/ShortenLink';
import InfoCard from './components/info-card/InfoCard';
import Footer from './components/footer/Footer';
import Button from '@mui/material/Button';
import working from './images/illustration-working.svg';
import background from './images/bg-boost-desktop.svg';
import brandRecognitionIcon from './images/icon-brand-recognition.svg';
import detailedRecordsIcon from './images/icon-detailed-records.svg';
import fullyCustomizableIcon from './images/icon-fully-customizable.svg';
import {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="getStarted">
          <h1>We make links a little smaller</h1>
          <span>Shrink your url with the purpose of making your web page address easier to remember. However, please keep in mind that scammers are known to use shortened links 
            to hide malware that could compromise network security. They are vulnerable to brute-force scanning and should only be utilized when the user trusts the source of content.
          </span>
          <Button variant="contained" sx={{borderRadius: 50}}>Get Started</Button>
        </div>
        <div>
          <img src={working} alt="working illustration"/>
        </div>
      </div>
      <InputBox setInputValue={setInputValue} />
      <ShortenLink inputValue={inputValue} />
      <div className="advancedContainer">
        <h2>Advanced Statistics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br></br> sed do eiusmod tempor incididunt.</p>
      </div>
      <span className="cardBar"></span>
      <div className="cardsContainer">
        <hr class="infoCardBar"></hr>
        <InfoCard 
          title={'Notam recognitionis'}
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
          icon={brandRecognitionIcon}
        />
        <InfoCard 
          title={'Diligenter notas'}
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
          icon={detailedRecordsIcon}
          marginTop={'2em'}
        />
        <InfoCard 
          title={'Plene consuetudo'}
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          icon={fullyCustomizableIcon}
          marginTop={'4em'}
        />
      </div>
      <div className="boostContainer" style={{backgroundImage: `url(${background})`}}>
        <h2>
          Shorten some links here
        </h2>
        <Button variant="contained" sx={{borderRadius: 50}}>Get Started</Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
 