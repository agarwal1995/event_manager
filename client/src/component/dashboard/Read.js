import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: []
    };
  }

  componentDidMount() {
    axios.get("../api/events/").then(res => {
      this.setState({ Event: res.data });
      console.log(this.state.Event);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Event CATALOG</h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
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
                      <Link to={`/${Event._id}`}>{Event.id}</Link>
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
        </div>
      </div>
    );
  }
}

export default Read;
