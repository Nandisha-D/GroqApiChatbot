import React, { useState } from 'react';
import "../stylesheets/menuicon.css"

const SideBar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false); // State to track panel open/close

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen); // Toggle the state
  };

  return (
    <div className="menu-icon-container">
      {!isPanelOpen && (
        <div className="menu-icon" onClick={togglePanel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M19 13H5v-2h14v2zm0-5H5V6h14v2zm0 10H5v-2h14v2z"
            />
          </svg>
        </div>
      )}
      <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        <h3>Chat History</h3>
        {/* Placeholder for chat history content */}
        <ul>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
        </ul>
        <button onClick={togglePanel} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default SideBar;
