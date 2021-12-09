import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  
  //attempt to make function to display array from local storage
  displayPackages() {
    var full = localStorage.getItem('packages');
    var converted = JSON.parse(full)
    if(converted.length > 0){
      for(const i = 0; i < converted.length;i++){
        <li>
          {converted[i]}
        </li>
      }
    }
    else{
      <p>
        No packages saved at the moment!
      </p>
    }
  }

  onLogoutClick = e => {
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
              <p>
                {/* {displayPackages} */}
                {localStorage.getItem('packages')}
                {/* {JSON.parse(localStorage.getItem('packages'))[0]} */}
                {/* {this.displayPackages} */}
                </p>          
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "200px",
                color:"white",
                background:"blue"
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
