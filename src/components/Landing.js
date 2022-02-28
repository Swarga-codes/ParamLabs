import vector from '../assets/Paramlabs logo.svg'
import '../components/components.css'
const Landing = () => {
    return ( 
       <div className="landing">
           <div className='landing_img'>
           <a href="https://www.paramlabs.io/" target='_blank'>
               <img src={vector} alt="" />
               </a>
           </div>
           <div className="landing_cont">
           <h1>Param Labs</h1>
           <p className='landingP'>Creating everything Special</p>
           <br/>
           <p><span><a href="mailto: inquiries@paramlabs.io" target="_blank">reach</a> </span>  | <span><a href="mailto: development@paramlabs.io" target="_blank"> development</a> </span>  | <span><a href="mailto: press@paramlabs.io" target="_blank"> press</a></span> </p>
           </div>
       </div>
     );
}
 
export default Landing;