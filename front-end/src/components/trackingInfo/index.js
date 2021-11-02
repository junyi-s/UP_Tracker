import React from "react";
import "./style.css";
import { FaRegBookmark, FaTimes, FaChevronDown, FaPen } from "react-icons/fa";

const TrackingInfo = () => {
  return (
    <div className="trackingInfo">
      {/* Buttons on top of the tracking info */}
      <div className="buttons">
        <div className="left">
          <p>
            Save Package
            <FaRegBookmark
              style={{
                position: "relative",
                top: "2px",
                left: "3px",
                color: "#6246EA",
              }}
            />
          </p>
        </div>
        <div className="right">
          <p>
            Remove
            <FaTimes
              style={{
                position: "relative",
                top: "2px",
                left: "3px",
                color: "#E45858",
              }}
            />
          </p>
        </div>
      </div>

      {/* Tracking Info */}
      <div className="rect">
        <div className="rectContent">
          <p>
            Package 1
            <FaPen
              style={{
                position: "relative",
                top: "2px",
                left: "8px",
                color: "#2B2C34",
              }}
            />
          </p>
          <p>USPS: 9400109205568018651239 </p>
          <p>
            Expected Delivery Date:{" "}
            <span className="redColorBold">October 27</span>
          </p>
          <span className="circle"></span>
          <div className="trackingHistoryPreview">
            <p>In Transit - DALLAS, TX</p>
            <p>Arrived at USPS Regional Facility</p>
          </div>
          <p className="detailsBtn">
            View Details
            <FaChevronDown
              style={{
                position: "relative",
                top: "2px",
                left: "3px",
                color: "#2B2C34",
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrackingInfo;
