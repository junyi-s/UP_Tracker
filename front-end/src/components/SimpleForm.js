import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class SimpleForm extends Component {
  render() {

    return (
            <div class="container">
                <div class="row">
                    <label for="tracking" id="track_text"> Start Tracking</label>
                </div>
                <div class="row">
                    <div class="col-10">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="trackid" placeholder="Tracking Number"/>
                            </div>
                        </form>
                    </div>
                    <div class = "col-2">
                        <button type="submit" id ="track_btn" class="btn btn-primary">Track</button>
                    </div>

                </div>
            </div>
             


      






       






    );
  };
};

export default SimpleForm;