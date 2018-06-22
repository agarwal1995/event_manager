import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { readEvent } from "../../actions/eventActions";

class Read extends Component {
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
      <div>
        <hr />
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Event CATALOG</h3>
            </div>
          </div>
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
                    <td>{Event.id}</td>
                    <td>{Event.eventname}</td>
                    <td>{Event.location}</td>
                    <td>{Event.date}</td>
                    <td>{Event.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
/*
Read.propTypes = {
  readEvent: PropTypes.func.isRequired
  // event: PropTypes.arrayOf.isRequired
};
const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { readEvent }
)(withRouter(Read));
*/

export default connect(
  null,
  { readEvent }
)(Read);
//export default Read;

//this.state.

/*
<Link to="/dashboard" className="btn btn-light">
          Go Back
        </Link>
        */

//54 <Link to={`/single/${Event._id}`}>{Event.id}</Link>
