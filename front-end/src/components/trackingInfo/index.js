import React, { useState } from "react";
import "./style.css";
import {
  FaRegBookmark,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaPen,
} from "react-icons/fa";

const TrackingInfo = () => {
  const [openDetail, setOpenDetail] = useState(false);

  const toggleDetails = () => {
    setOpenDetail(!openDetail);
  };

  const changeArrow = () => {
    if (openDetail) {
      return [
        <FaChevronUp
          style={{
            position: "relative",
            left: "3px",
            color: "#2B2C34",
          }}
        />,
      ];
    } else {
      return [
        <FaChevronDown
          style={{
            position: "relative",
            left: "3px",
            color: "#2B2C34",
          }}
        />,
      ];
    }
  };

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
                color: "#0E67B5",
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
      <div
        className={"rect minimizeDetails " + (openDetail ? "open" : "")}
        onClick={() => toggleDetails()}
      >
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

          <div className="expandDetails">
            <img src="/mobile_map.png" className="mapImg" />
            <p>Tracking History</p>
            <ul className="progressTrackerVert">
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>Oct 25 6:56 pm</p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    Arrived at USPS Regional Facility DALLAS TX NETWORK
                    DISTRIBUTION CENTER{" "}
                  </p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>Oct 25 6:36 pm</p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    Departed USPS Regional Facility DALLAS TX LOGISTICS CENTER
                  </p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>Oct 25</p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>In Transit to Next Facility</p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>Oct 25 6:09 pm</p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    Arrived at USPS Regional Facility DALLAS TX LOGISTICS CENTER
                  </p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>Oct 24 7:19 am</p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    Departed USPS Regional Facility QUEENS NY DISTRIBUTION
                    CENTER{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className="detailsBtn">
            {openDetail ? "Hide Details" : "View Details"}
            {changeArrow()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrackingInfo;
