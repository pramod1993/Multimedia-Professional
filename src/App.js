import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavebarCom from './component/NavebarCom';
import Footer from './component/Footer';
import { FaAngleDoubleUp } from "react-icons/fa";


function App() {

    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
 
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
  return (
    <>
    <div className='App'>
      <NavebarCom/>

      <Footer/>
      
      {showButton && (
        <span onClick={scrollToTop}  style={{background: '#fd5308', position: 'fixed', right: '20px',
          bottom: '20px', width: '40px', height: '40px', lineHeight:'40px', color:'#fff', 
          textAlign:'center',  }}>
          <FaAngleDoubleUp/>
        </span>
      )}

    </div>    
    </>
  );
}

export default App;
