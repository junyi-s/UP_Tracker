import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackingInfo from "../../components/trackingInfo";
import axios from "axios";

const Home = () => {
  const [value, changevalue] = useState("");
  const [name, changename] = useState("");
  const [show, setShow] = useState(false);
  const [trackingData, setTrackingData] = useState([]);

  let apiURL = "http://localhost:5000/api";

  function handleChange(event) {
    changevalue(event.target.value);
  }
  async function change() {
    changename(value);
    setShow(true);

    axios.get(`${apiURL}/tracking/` + value).then(
      (response) => {
        setTrackingData([response.data.tracking]);
        console.log([response.data.tracking]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  console.log(trackingData);

  return (
    <div className="App">
      <header className="App-header">
        <div class="container overflow-hidden">
          <div class="row r1">
            <div class="col-md-8">
              <header className="form">
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter tracking number"
                />
              </header>
            </div>
            <div class="col-md-4">
              <header classname="button">
                <button onClick={change}>Submit</button>
              </header>
            </div>
          </div>
          <div class="row r2">
            <p>Your tracking number is: {name}</p>
          </div>
          <div class="row r3">
            {trackingData.map((tracking) => (
              <TrackingInfo details={tracking} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};
export default Home;
