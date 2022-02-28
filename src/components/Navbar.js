
import ParamLogo from '../assets/Paramlabs logo.svg'
import Mail from '../assets/ci_mail.svg'
import Twitter from '../assets/fa_twitter-square.svg'


const Navbar = () => {
  
    return ( 
        <div className='header'>
        <div className="Navbar">
        <div className="logo">
       
        <img src={ParamLogo} alt="" />
        </div>
        <div className="handles">
        <a href="mailto: inquiries@paramlabs.io" target='_blank' rel='noreferrer'>
        <img src={Mail} alt="" /></a>
        <a href="https://twitter.com/paramlabscorp" target='_blank' rel='noreferrer'>
        <img src={Twitter} alt="" />
        </a>
      
        </div>
      
        
        </div>
        </div>
        );
    }
     
    export default Navbar;