import React from 'react';

function Navbar() {
  return(
    <div className="navbar-container">
      <div className="nav">
        <div className="links">
          <div className="nav-item" id="active">Team</div>
          <div className="nav-item">News</div>
          <div className="nav-item">Videoes</div>
        </div>
        <div className="socials">
          <div className="nav-item"><i className="fab fa-facebook-f"></i></div>
          <div className="nav-item"><i className="fab fa-instagram"></i></div>
          <div className="nav-item"><i className="fab fa-youtube"></i></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;