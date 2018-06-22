import React, { Component } from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createEvent } from "../../actions/eventActions";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      eventname: "",
      location: "",
      date: "",
      description: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newEvent = {
      id: this.state.id,
      eventname: this.state.eventname,
      location: this.state.location,
      date: this.state.date,
      description: this.state.description
    };

    this.props.createEvent(newEvent, this.props.history);

    //this.props.registerUser(newUser, this.props.history);

    // axios
    // .post("/api/events/create", newEvent)
    //.then(res => console.log(res.data))
    //.catch(err => console.log(err));

    console.log(newEvent);
  }

  render() {
    return (
      <div className="create">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Create Event</h1>
              <p className="lead text-center">
                Let's add some Basic Information for the Event
              </p>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Event ID"
                    name="id"
                    value={this.state.id}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name of The Event"
                    name="eventname"
                    value={this.state.eventname}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    placeholder="Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Description for The Event"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    required
                  />
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Create.propTypes = {
  createEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { createEvent }
)(withRouter(Create));
