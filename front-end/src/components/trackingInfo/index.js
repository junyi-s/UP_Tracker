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
          <div className="leftDesk">
            <p>
              Package 1
              <FaPen
                className="penIcon"
                style={{
                  position: "relative",
                  top: "2px",
                  left: "8px",
                  color: "#2B2C34",
                }}
              />
            </p>
            <p className="mobile">USPS: 9400109205568018651239</p>
            <p>
              Expected Delivery Date:{" "}
              <span className="redColorBold">October 27</span>
            </p>
          </div>
          <div className="rightDesk">
            <p className="desktop">Tracking Number: 9400109205568018651239</p>
            <p className="desktop">Carrier: USPS</p>
          </div>
          <span className="circle mobile"></span>
          <div className="trackingHistoryPreview mobile">
            <p>In Transit - DALLAS, TX</p>
            <p>Arrived at USPS Regional Facility</p>
          </div>

          <div className="desktop shipmentHistory">
            <ul className="progressTracker">
              <li className="progressStep completed">
                <span className="circle"></span>
                <div className="label">
                  <p>Origin - BROOKLYN, NY</p>
                </div>
              </li>
              <li className="progressStep active">
                <span className="circle"></span>
                <div className="label">
                  <p>In Transit - DALLAS, TX</p>
                </div>
              </li>
              <li className="progressStep">
                <span className="circle"></span>
                <div className="label">
                  <p></p>
                </div>
              </li>
            </ul>
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
