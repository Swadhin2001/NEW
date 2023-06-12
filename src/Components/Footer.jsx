import React from 'react';
import Logo from '../Assets/App_Logo.png';
import '../CSS/footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="f-left">
      <img src={Logo} alt="Icon" className='logo' style = {{width: "7%",marginRight:"1%"}} />
        <div className="text">
          <h2>Smart Calorie</h2>
          <p>Digital platform offering health information and services for individuals' well-being.</p>
        </div>
      </div>
      <div className="f-right">
        <div className="links">
          <a href="https://github.com/Swadhin2001" target="_blank" rel="noreferrer">swadhin </a>
          {/* <a href="https://github.com/ATLAS2002" target="_blank" rel="noreferrer">&nbsp;|&nbsp; siddharth </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
