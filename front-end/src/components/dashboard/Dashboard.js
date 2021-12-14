import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import TrackingInfoDisplay from "../trackingInfoDisplay";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { converted: [], data: [] };
  }

  async componentDidMount() {

    if (localStorage.getItem("packages") != null) {
      let packages = localStorage.getItem("packages");
      if (packages.length != 0){
        console.log("If")
        // let items = this.state.converted;
        let items = JSON.parse(localStorage.getItem("packages"));
        let apiURL = "http://localhost:5000/api";
  
        items.map(async (val, index) => {
          await axios.get(`${apiURL}/tracking/` + val).then((response) => {
            this.setState({data: [...this.state.data, response.data.tracking]});
            console.log(this.state.data);
          },
          (error) => {
            console.log(error);
          });
        });

    } 
    else {
      console.log("Else")
      }
     
    }
  }

  displayPackages() {
    
    console.log("INside")
    if (localStorage.getItem("packages") != null && localStorage.getItem("packages").length > 2) {
      let packages = localStorage.getItem("packages");
      if (packages.length != 2) {
        console.log("Display")
        console.log(this.state.data);

        return (
          <div>
            {this.state.data.map((val, index) => {
              console.log(val)
              console.log(this.state.data);
              return <TrackingInfoDisplay details={val} pack={index + 1}/>;
            })}
          </div>
        );
      }
    }
    // <ul>
    //   {
    //     items.map((val, index) => {
    //       return (
    //           <li key={index}>
    //             { val }
    //           </li>
    //       );
    //     })
    //   }
    // </ul>
    else {
      return <p style={{textAlign: "center"}}>No packages saved yet.</p>;
    }
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    console.log("Render")
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Your packages will be listed below{" "}
                <span style={{ fontFamily: "monospace" }}></span>
              </p>
            </h4>
            <div className="displayPackages">{this.displayPackages()}</div>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "25px",
                marginBottom: "90px",
                color: "white",
                background:"#0e67b5",
                transition: "all 400ms"
              }}
              onClick={this.onLogoutClick}
              className="b1"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
