import Landing from './components/Landing';
import './App.css';
import ParamVid from './assets/Paramlabs.mp4'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="Background">
    <Navbar/> 
    <Landing/>
    <video >
      <source
        src={ParamVid}
        type="video/mp4"
      />
      Your browser does not support the video tag.
     
    </video>
    <div className="nav">
 
    
    </div>
   
  </div>
  );
}

export default App;