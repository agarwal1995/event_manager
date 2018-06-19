import React, { Component } from "react";
import { Link } from "react-router-dom";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      eventname: "",
      location: "",
      date: "",
      description: ""
    };
    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    //this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
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

              <form action={this.onSubmit}>
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
                <div>
                  <button
                    //onClick={this.delete.bind(null)}
                    className="btn btn-info btn-block mt-4"
                  >
                    Search
                  </button>
                </div>
                <hr />
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name of The Event"
                    name="name"
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
                    type="text"
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

export default Update;
