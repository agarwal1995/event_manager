import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
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
                  className="btn btn-lg btn- btn-block btn-outline-primary"
                >
                  Read Event
                </Link>

                <Link
                  to="/create"
                  className="btn btn-lg btn- btn-block btn-outline-primary"
                >
                  Create Event
                </Link>

                <Link
                  to="/update"
                  className="btn btn-lg  btn-block btn-outline-primary"
                >
                  Update Event
                </Link>

                <Link
                  to="/delete"
                  className="btn btn-lg btn- btn-block btn-outline-primary"
                >
                  Delete Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
