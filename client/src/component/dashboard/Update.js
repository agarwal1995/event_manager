import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateEvent } from "../../actions/eventActions";
import axios from "axios";

class Update extends Component {
  constructor(props) {
    super(props);
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

    //this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /*onClick(e) {
    axios.post("../api/events/singleread", this.id).then(res => {
      this.setState({ Event: res.data });
      console.log(this.state.Event);
    });

    //this.setState({ Event });
  }
  */
  onSubmit(e) {
    e.preventDefault();

    const newEvent = {
      id: this.state.id,
      eventname: this.state.eventname,
      location: this.state.location,
      date: this.state.date,
      description: this.state.description
    };

    this.props.updateEvent(newEvent, this.props.history);

    console.log(newEvent);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="update">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Update Event</h1>
              <p className="lead text-center">
                Let's update Information for the Event
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

//export default Update;
Update.propTypes = {
  updateEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  event: state.event,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateEvent }
)(withRouter(Update));

/*
<div>
                  <button
                    onClick={this.state.bind(null)}
                    className="btn btn-info btn-block mt-4"
                  >
                    Search
                  </button>
                </div>*/
