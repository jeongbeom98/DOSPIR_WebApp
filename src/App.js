import React, { useState } from 'react';
import './App.css';
import DOSPIRLogo from './DOSPIR_Logo.png';

function App() {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState('roundabouts');

  const iframeSources = {
    roundabouts: "https://uiowa.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=5def30ac52b44721a389238ce1a9fc1c",
    highFrictionSurface: "https://uiowa.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=7ac6753f55c248b49e8948df61fa7c53",
    recycledPavement: "https://uiowa.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=24c0ca3083244f9f9c8b3339a74cbaeb",
    ottaseal: "https://uiowa.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=e09f16d1a5c84478ba867d7019397e34",
    uhpc: "https://uiowa.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=58d84a2253474c85b0d68ad34eb5f4e3",
  };

  const renderIframe = () => {
    const iframeStyle = {
      width: "100%",
      height: "600px",
      border: "0",
      borderRadius: "8px",
      marginLeft: "30px",
    };

    const src = iframeSources[currentPage] || iframeSources['roundabouts'];

    return (
      <iframe
        src={src}
        style={iframeStyle}
        frameBorder="0"
        allowFullScreen
        title={currentPage}
      >
        iFrames are not supported on this page.
      </iframe>
    );
  };

  const renderSubNavbar = () => (
    <div className="sub-navbar">
      <button onClick={() => setCurrentPage('roundabouts')}>Roundabouts</button>
      <button onClick={() => setCurrentPage('highFrictionSurface')}>High Friction Surface</button>
      <button onClick={() => setCurrentPage('recycledPavement')}>Recycled Pavement</button>
      <button onClick={() => setCurrentPage('ottaseal')}>Ottaseal</button>
      <button onClick={() => setCurrentPage('uhpc')}>UHPC</button>
    </div>
  );

  const renderMainContent = () => (
    <>
      {renderSubNavbar()}
      {renderIframe()}
    </>
  );

  return (
    <div className="app-container">
      <div className="header">
        <h1>Database Of Sustainable Practices with Implementation Records</h1>
        <p>The Laboratory for Advanced Construction Technology (LACT)</p>
      </div>

      <div className="navbar">
        <div className="menu-item" onClick={() => setCurrentPage('roundabouts')}>DOSPIR</div>
        <div className="menu-item" onMouseEnter={() => setShowDownloadDropdown(true)} onMouseLeave={() => setShowDownloadDropdown(false)}>
          Download
          {showDownloadDropdown && (
            <div className="dropdown-content">
              <a href="/DOSPIR User's Guide.pdf" download="DOSPIR User's Guide.pdf">User's Guide</a>
              <a href="https://public-iowadot.opendata.arcgis.com/" target="_blank" rel="noopener noreferrer">Original Data</a>
            </div>
          )}
        </div>
        <div className="menu-item" onMouseEnter={() => setShowAboutDropdown(true)} onMouseLeave={() => setShowAboutDropdown(false)}>
          About Us
          {showAboutDropdown && (
            <div className="dropdown-content">
              <a href="http://lactiowa.org/">LACT</a>
              <a href="https://iti.uiowa.edu/labs/laboratory-advanced-construction-technology">ITI</a>
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="side">
          <img src={DOSPIRLogo} alt="DOSPIR Logo" className="sidebar-logo" />
        </div>
        <div className="main">
          {renderMainContent()}
        </div>
      </div>

      <div className="footer">
        <p>&copy; <span>{new Date().getFullYear()}</span> Laboratory for Advanced Construction Technology</p>
      </div>
    </div>
  );
}

export default App;
