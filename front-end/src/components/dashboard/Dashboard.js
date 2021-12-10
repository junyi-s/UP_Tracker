import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import TrackingInfo from "../trackingInfo";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { converted: JSON.parse(localStorage.getItem("packages")), data: [] };
  }

  async componentDidMount() {
    let packages = localStorage.getItem("packages");
    if (packages) {
      let items = this.state.converted;
      let apiURL = "http://localhost:5000/api";

      items.map(async (val, index) => {
        await axios.get(`${apiURL}/tracking/` + val).then((response) => {
          this.setState({data: [...this.state.data, response.data.tracking]});
          console.log(this.state.data);
        });
      });
    }
  }

  //attempt to make function to display array from local storage
  displayPackages() {
    let packages = localStorage.getItem("packages");

    if (packages) {
      console.log(this.state.data);

      return (
        <div>
          {this.state.data.map((val, index) => {
            console.log(val)
            console.log(this.state.data);
            return <TrackingInfo details={val} />;
          })}
        </div>
      );
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
                background: "blue",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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
