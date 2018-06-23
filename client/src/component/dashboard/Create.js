import React, { Component } from "react";
import classnames from "classnames";
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
      description: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    const { errors } = this.state;

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
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.id
                    })}
                    placeholder="Event ID"
                    name="id"
                    value={this.state.id}
                    onChange={this.onChange}
                  />
                  {errors.id && (
                    <div className="invalid-feedback">{errors.id}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.eventname
                    })}
                    placeholder="Name of The Event"
                    name="eventname"
                    value={this.state.eventname}
                    onChange={this.onChange}
                  />
                  {errors.eventname && (
                    <div className="invalid-feedback">{errors.eventname}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.location
                    })}
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                  />
                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.date
                    })}
                    placeholder="Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Description for The Event"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
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
  event: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  event: state.event,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createEvent }
)(withRouter(Create));
