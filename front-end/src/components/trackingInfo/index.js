import React, { useState } from "react";
import "./style.css";
import {
  FaRegBookmark,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaPen,
} from "react-icons/fa";

const TrackingInfo = (props) => {
  const [openDetail, setOpenDetail] = useState(false);

  let trackingHistory = props.details.checkpoints;

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
      <div className={"rect minimizeDetails " + (openDetail ? "open" : "")}>
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

            {/* Mobile view */}
            <p className="mobile">{`USPS: ${props.details.tracking_number}`}</p>

            <p>
              Expected Delivery Date:{" "}
              <span className="redColorBold">{props.details.expected_delivery}</span>
            </p>
          </div>

          <div className="rightDesk">
            <p className="desktop">{`Tracking Number: ${props.details.tracking_number}`}</p>
            <p className="desktop">Carrier: USPS</p>
          </div>

          {/* Mobile view */}
          <span className="circle mobile"></span>
          <div className="trackingHistoryPreview mobile">
            <p>In Transit - DALLAS, TX</p>
            <p>Arrived at USPS Regional Facility</p>
          </div>
          
          {/* desktop view */}
          <div className="desktop shipmentHistory">
            <ul className="progressTracker">
              <li className="progressStep completed">
                <span className="circle"></span>
                <div className="label">
                  <p>{`Origin - ${trackingHistory[0].city}, ${trackingHistory[0].state}`}</p>
                </div>
              </li>
              <li className="progressStep active">
                <span className="circle"></span>
                <div className="label">
                  <p>{`In Transit - ${trackingHistory.at(-1).city}, ${trackingHistory.at(-1).state}`}</p>
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
            <img src="/desktop_map.png" className="mapImg" />
            <p className="trackingTitle">Tracking History</p>
            <ul className="progressTrackerVert">

              {
                trackingHistory.map((info) => (
                  <li className="progressStepVert">
                    <div className="labelLeftVert">
                      <p>
                        <span className="darkBlue semiBold">{info.checkpoint_time}</span>
                      </p>
                    </div>
                    <span className="circleVert"></span>

                    <div className="labelVert">
                      <p>
                        <span className="semiBold">
                          {info.message}
                        </span>
                        <br />
                        {info.location}{" "}
                      </p>
                    </div>
                  </li>
                ))
              }


              {/* <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>
                    <span className="darkBlue semiBold">Oct 25</span> 6:56 pm
                  </p>
                </div>
                <span className="circleVert"></span>

                <div className="labelVert">
                  <p>
                    <span className="semiBold">
                      Arrived at USPS Regional Facility
                    </span>
                    <br />
                    DALLAS TX NETWORK DISTRIBUTION CENTER{" "}
                  </p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>
                    <span className="darkBlue semiBold">Oct 25</span> 6:36 pm
                  </p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    <span className="semiBold">
                      Departed USPS Regional Facility
                    </span>
                    <br />
                    DALLAS TX LOGISTICS CENTER
                  </p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>
                    <span className="darkBlue semiBold">Oct 25</span>
                  </p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    <span className="semiBold">
                      In Transit to Next Facility
                    </span>
                  </p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>
                    <span className="darkBlue semiBold">Oct 25</span> 6:09 pm
                  </p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    <span className="semiBold">
                      Arrived at USPS Regional Facility
                    </span>
                    <br />
                    DALLAS TX LOGISTICS CENTER
                  </p>
                </div>
              </li>
              <li className="progressStepVert">
                <div className="labelLeftVert">
                  <p>
                    <span className="darkBlue semiBold">Oct 24</span> 7:19 am
                  </p>
                </div>
                <span className="circleVert"></span>
                <div className="labelVert">
                  <p>
                    <span className="semiBold">
                      Departed USPS Regional Facility
                    </span>
                    <br />
                    QUEENS NY DISTRIBUTION CENTER{" "}
                  </p>
                </div>
              </li> */}
            </ul>
          </div>

          <p className="detailsBtn" onClick={() => toggleDetails()}>
            {openDetail ? "Hide Details" : "View Details"}
            {changeArrow()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrackingInfo;
