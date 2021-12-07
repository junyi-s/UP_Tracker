import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackingInfo from "../../components/trackingInfo";
import axios from "axios";
import {Container, Col, Row} from "react-bootstrap";

const Home = () => {
  const [value, changevalue] = useState("");
  const [name, changename] = useState("");
  const [show, setShow] = useState(false);
  const [trackingData, setTrackingData] = useState([]);

  let apiURL = "http://localhost:5000/api";

  function handleChange(event) {
    changevalue(event.target.value);
  }
  
  function change() {
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

  //console.log(trackingData);

  return (
    <div className="App">
      <header className="App-header">
        <div class = "text"></div>
        {/* <p class  = "p1">Start Tracking</p> */}
        {/* <div class="container overflow-hidden"> */}
          <Row>
            <Col>
              <header className="form">
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter tracking number"
                />
              </header>
            </Col>
            <Col>
              <header classname= "button" style={{
              paddingTop:"70px"
            }}>
                <button 
                onClick={change}>Submit</button>
              </header>
            </Col>
          </Row>
          {/* <div class="row r2">
            <p>Your tracking number is: {name}</p>
          </div> */}
          <Row>
            {trackingData.map((tracking) => (
              <TrackingInfo details={tracking} />
            ))}
          </Row>
        {/* </div> */}
      </header>
    </div>
  );
};
export default Home;
