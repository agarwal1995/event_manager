import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { connect } from "react-redux";

import { readEvent } from "../../actions/eventActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: []
    };
  }

  componentDidMount() {
    //this.props.readEvent();
    // this.setState({ Event: this.props.readEvent() });

    axios.get("../api/events/").then(res => {
      this.setState({ Event: res.data });
      console.log(this.state.Event);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4 text-center">Concerts</h1>
          </div>
        </div>
        <div className="panel panel-default" />
        <div className="panel-body">
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Event.map(Event => (
                <tr>
                  <td>
                    <Link to={`/single/${Event._id}`}>{Event.id}</Link>
                  </td>
                  <td>{Event.eventname}</td>
                  <td>{Event.location}</td>
                  <td>{Event.date}</td>
                  <td>{Event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div>
          <Link to="/create" className="btn btn-lg btn-info mr-2">
            Create Event
          </Link>

          <Link to="/update" className="btn btn-lg btn-light">
            Update Event
          </Link>
        </div>
      </div>
    );
  }
}
/*
 <div className="dashboard ">
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4 text-center">Concerts</h1>
                  <p className="lead text-center display-5">
                    {" "}
                    Anything From Create To Delete
                  </p>
                  <div>
                    <Link
                      to="/read"
                      className="btn btn-lg btn- btn-block btn-link"
                    >
                      Read Event
                    </Link>

                    <Link
                      to="/create"
                      className="btn btn-lg btn- btn-block btn-link"
                    >
                      Create Event
                    </Link>

                    <Link
                      to="/update"
                      className="btn btn-lg  btn-block btn-link"
                    >
                      Update Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/

export default connect(
  null,
  { readEvent }
)(Dashboard);
//export default Dashboard;
