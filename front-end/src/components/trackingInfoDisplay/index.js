import React, { useState } from "react";
import "./style.css";
import {
  FaRegBookmark,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaPen,
} from "react-icons/fa";
import { format, set } from "date-fns";

const TrackingInfoDisplay = (props) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [status, setStatus] = useState(null);

  let trackingHistory = props.details.checkpoints;
  let lastCityIndex = 0;
  let lastCityInfo = "";
  let firstCityIndex = 0;
  let firstCityNum = 0;

  const toggleDetails = () => {
    setOpenDetail(!openDetail);
  };

  trackingHistory.map((info) => {
    let forDate = format(new Date(info.checkpoint_time), "MMM dd,h:mm aaa");
    info.checkpoint_time = forDate.split(",");
  });

  trackingHistory.map((info, i) => {
    if (info.location !== null) {
      lastCityIndex = i;
      if (info.location.includes(" DISTRIBUTION CENTER")) {
        lastCityInfo = info.location.replace(" DISTRIBUTION CENTER", "");
        lastCityInfo = lastCityInfo.replace("/ /g", ",");
      }
    }
  });

  for (let i = 0; i < trackingHistory.length; i++) {
    if (trackingHistory[i].location !== null) {
      firstCityIndex = i;
      break;
    }
  }

  for (let i = 0; i < trackingHistory.length; i++) {
    if (trackingHistory[i].city !== null) {
      firstCityNum = i;
      break;
    }
  }

  // if (trackingHistory.at(-1).tag === "Delivered") {
  //   setStatus("Delivered")
  // }

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
  function save() {
    var exists = false
    //get tracking number from input
    var new_tracking = props.details.tracking_number;
    //check if there is nothing saved at the start and if so make a new empty array and add to it
    if (localStorage.getItem('packages') == null) {
      localStorage.setItem('packages', '[]');
      // get old data and push it to new data
      var old_data = JSON.parse(localStorage.getItem('packages'));
      old_data.push(new_tracking);

      //save the old and new data to local storage
      localStorage.setItem('packages', JSON.stringify(old_data));
      alert('Package was saved!')
    }
    else {
      for (var i = 0; i < JSON.parse(localStorage.getItem('packages')).length; i++) {
        if (JSON.parse(localStorage.getItem('packages'))[i] == new_tracking) {
          // alert('Error. Package has already been saved!');
          exists = true;
        }
      }
      if (exists == false) {
        var old_data = JSON.parse(localStorage.getItem('packages'));
        old_data.push(new_tracking);

        //save the old and new data to local storage
        localStorage.setItem('packages', JSON.stringify(old_data));
        alert('Package was saved!')      }
      else {
        alert('Error! Package has been saved already.')
      }
    }
  }

  function removeTrack() {
    let num = props.details.tracking_number;
    let packagesDisplay = JSON.parse(localStorage.getItem('packages'));
    for (let i = 0; i<packagesDisplay.length; i++){
      if (packagesDisplay[i] === num) {
        packagesDisplay.splice(i, 1);
        var old_data = packagesDisplay;
        localStorage.removeItem('packages')

        localStorage.setItem('packages', JSON.stringify(old_data));
        break;
      }
    }

    window.location.reload(false);
    
    // for (var i = 0; i < JSON.parse(localStorage.getItem('packages')).length; i++) {
    //   if (JSON.parse(localStorage.getItem('packages'))[i] == num) {
    //     // alert('Error. Package has already been saved!');
    //     packagesDisplay = JSON.parse(localStorage.getItem('packages')).splice(i, 1);
    //     JSON.parse(localStorage.removeItem('packages'))
    //     JSON.parse(localStorage.setItem('packages', packagesDisplay))


    //     // window.location.reload(false);
    //   }
    // }
  }

  return (
    <div className="trackingInfo">
      {/* Buttons on top of the tracking info */}
      <div className="buttons">
        <div className="left">
          
        </div>
        <div className="right">
          <button
            style={{
              position: "relative",
              top: "2px",
              left: "3px",
              backgroundColor: "red",
              borderRadius: "12px",
            }}
            onClick={removeTrack}
          >
            Remove
          </button>
        </div>
      </div>

      {/* Tracking Info */}
      <div className={"rect minimizeDetails " + (openDetail ? "open" : "")}>
        <div className="rectContent">
          <div className="leftDesk">
            <p>
              {`Package ${props.pack}`}
              <FaPen
                className="penIcon"
                style={{
                  position: "relative",
                  top: "2px",
                  left: "8px",
                  color: "#2B2C34",
                  // padding: "20px",
                }}
              />
            </p>

            {/* Mobile view */}
            <p className="mobile">{`${props.details.slug.toUpperCase()}: ${props.details.tracking_number
              }`}</p>

            <p>
              Expected Delivery Date:{" "}
              <span
                className={
                  props.details.tag === "Delivered"
                    ? "greenColorBold"
                    : "redColorBold"
                }
              >
                {props.details.tag === "Delivered"
                  ? "Delivered"
                  : props.details.expected_delivery
                    ? format(
                      new Date(props.details.expected_delivery),
                      "MMM d"
                    )
                    : "N/A"}
              </span>
            </p>
          </div>

          <div className="rightDesk">
            <p className="desktop">{`Tracking Number: ${props.details.tracking_number}`}</p>
            <p className="desktop">{`Carrier: ${props.details.slug.toUpperCase()}`}</p>
          </div>

          {/* Mobile view */}
          <span
            className={
              "circle mobile " + (props.details.tag === "Pending" ? "hide" : "")
            }
          ></span>
          <div
            className={
              "trackingHistoryPreview mobile " +
              (props.details.tag === "Pending" ? "hide" : "")
            }
          >
            {props.details.tag === "Pending"
              ? ""
              : props.details.tag === "Delivered"
                ? `Delivered - ${trackingHistory.at(-1).city}, ${trackingHistory.at(-1).state
                }`
                : trackingHistory.at(-1).state && trackingHistory.at(-1).city
                  ? `In Transit - ${trackingHistory.at(-1).city}, ${trackingHistory.at(-1).state
                  }`
                  : `In Transit`}
          </div>

          {/* desktop view */}
          <div
            className={
              "desktop shipmentHistory " +
              (props.details.tag === "Pending" ? "hide" : "")
            }
          >
            <ul className="progressTracker">
              <li
                className={
                  "progressStep completed " +
                  (props.details.tag === "Delivered" ? "delivered" : "")
                }
              >
                <span className="circle"></span>
                <div className="label">
                  <p>
                    {props.details.tag === "Pending"
                      ? ""
                      : trackingHistory[firstCityNum].city &&
                        trackingHistory[firstCityNum].state
                        ? `Origin - ${trackingHistory[firstCityNum].city}, ${trackingHistory[firstCityNum].state}`
                        : `Origin - ${trackingHistory[firstCityNum].city}, ${trackingHistory[firstCityNum].country_name}`}
                  </p>
                </div>
              </li>
              <li
                className={
                  "progressStep active " +
                  (props.details.tag === "Delivered" ? "delivered" : "")
                }
              >
                <span className="circle"></span>
                <div className="label">
                  <p>
                    {props.details.tag === "Pending"
                      ? ""
                      : props.details.tag === "Delivered"
                        ? ""
                        : trackingHistory.at(-1).state &&
                          trackingHistory.at(-1).city
                          ? `In Transit - ${trackingHistory.at(-1).city}, ${trackingHistory.at(-1).state
                          }`
                          : `In Transit`}
                  </p>
                </div>
              </li>
              <li
                className={
                  "progressStep " +
                  (props.details.tag === "Delivered" ? "delivered" : "")
                }
              >
                <span className="circle"></span>
                <div className="label">
                  <p>
                    {props.details.tag === "Delivered"
                      ? `Delivered - ${trackingHistory.at(-1).city}, ${trackingHistory.at(-1).state
                      }`
                      : ""}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {props.details.tag === "Pending" ? (
            <p className="pendingInfo">
              Tracking Information is pending, check back later...
            </p>
          ) : (
            <div className="expandDetails">
              <img
                src={
                  props.details.tag === "Pending"
                    ? ""
                    : props.details.tag === "Delivered"
                      ? `https://maps.googleapis.com/maps/api/staticmap?markers=color:0xE45858FF|label:A|${trackingHistory
                        .at(firstCityNum)
                        .location.replace(/ /g, "+")}
              &markers=color:0xE45858FF|label:B|${trackingHistory
                        .at(-1)
                        .location.replace(/ /g, "+")}
              &path=color:0x18923AFF|weight:4|${trackingHistory
                        .at(firstCityNum)
                        .location.replace(/ /g, "+")}|${trackingHistory
                          .at(-1)
                          .location.replace(/ /g, "+")}
              &key=AIzaSyAdrXithU6ObWf1kqhCA1RxJBBnjPgx9o4
              &size=640x300`
                      : `https://maps.googleapis.com/maps/api/staticmap?markers=color:0xE45858FF|label:A|${trackingHistory
                        .at(firstCityNum)
                        .location.replace(/ /g, "+")}
                  &markers=color:0x0e67b5FF|${lastCityInfo.replace(/ /g, "+")}
                  &path=color:0x0e67b5FF|weight:4|${trackingHistory
                        .at(firstCityNum)
                        .location.replace(/ /g, "+")}|${lastCityInfo.replace(
                          / /g,
                          "+"
                        )}
                  &key=AIzaSyAdrXithU6ObWf1kqhCA1RxJBBnjPgx9o4
                  &size=640x300`
                }
                className="mapImg"
              />

              <p className="trackingTitle">Tracking History</p>
              <ul className="progressTrackerVert">
                {[...trackingHistory].reverse().map((info) => (
                  <li className="progressStepVert">
                    <div className="labelLeftVert">
                      <p>
                        <span className="darkBlue semiBold">
                          {info.checkpoint_time[0]}
                        </span>
                        <br />
                        {info.checkpoint_time[1]}
                      </p>
                    </div>
                    <span className="circleVert"></span>

                    <div className="labelVert">
                      <p>
                        <span className="semiBold">{info.message}</span>
                        <br />
                        {info.location}{" "}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p
            className={
              "detailsBtn " + (props.details.tag === "Pending" ? "hide" : "")
            }
            onClick={() => toggleDetails()}
          >
            {openDetail ? "Hide Details" : "View Details"}
            {changeArrow()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TrackingInfoDisplay;
