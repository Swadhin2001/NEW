import React from 'react';
import Logo from '../Assets/App_Logo.png';
import '../CSS/footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="f-left">
      <img src={Logo} alt="Icon" className='logo' />
        <div className="text">
          <h2>Smart Calorie</h2>
          <p>Digital platform offering health information and services for individuals' well-being.</p>
        </div>
      </div>
      <div className="f-right">
        <div className="links">
          <a href="https://github.com/Swadhin2001" target="_blank" rel="noreferrer">swadhin &nbsp;|&nbsp;</a>
          <a href="https://github.com/ATLAS2002" target="_blank" rel="noreferrer"> siddharth &nbsp;|&nbsp;</a>
          <a href="https://github.com/aishikpatra7" target="_blank" rel="noreferrer"> aishik</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
