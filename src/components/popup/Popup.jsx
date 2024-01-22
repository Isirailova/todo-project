import React, { useState } from "react";
import "./popup.style.css";

const Popup = ({ yesClick, noClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="popup">
      <div className="popup-content">
        <p>Do you want to delete all?</p>
        <div className="btn">
          <button className="yes" onClick={yesClick}>
            Yes
          </button>
          <button className="no" onClick={noClick}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
