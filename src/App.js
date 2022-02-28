import React from 'react';
import Landing from './components/Landing';
import './App.css';
import ParamVid from './assets/Paramlabs.mp4'
import Navbar from './components/Navbar';
import ParamVidLow from './assets/Paramlabs-low-compressed.mp4'
function App() {
  const [speed, setSpeed] = React.useState(navigator.connection.effectiveType);
   
  console.log(speed);
 
  return (
    <div className="Background">
    <Navbar/> 
    <Landing/>
    {speed === '4g'?   <video loop autoPlay muted playsInline>
      <source
        src={ParamVid}
        type="video/mp4"
      />
      Your browser does not support the video tag
    </video>
    :
    
      <video loop autoPlay muted playsInline>
      <source
        src={ParamVidLow}
        type="video/mp4"
      />
      Your browser does not support the video tag
    </video>
    }
   
  </div>
  );
}

export default App;
