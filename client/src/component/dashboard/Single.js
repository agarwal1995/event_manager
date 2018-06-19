import React, { Component } from "react";
import axios from "axios";

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: {}
    };
  }

  componentDidMount() {
    axios.get("../api/events/" + this.props.match.params.id).then(res => {
      this.setState({ Event: res.data });
      console.log(this.state.Event);
    });
  }

  delete(id) {
    console.log(id);
    axios.delete("/api/events/" + id).then(result => {
      this.props.history.push("/read");
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.Event.title}</h3>
          </div>
          <div className="panel-body">
            <h4> Event Detail </h4>
            <dl>
              <dt>ID:</dt>
              <dd>{this.state.Event.id}</dd>
              <dt>Name:</dt>
              <dd>{this.state.Event.eventname}</dd>
              <dt>Date:</dt>
              <dd>{this.state.Event.date}</dd>
              <dt>Location:</dt>
              <dd>{this.state.Event.location}</dd>
              <dt>Description:</dt>
              <dd>{this.state.Event.description}</dd>
            </dl>
            <button
              onClick={this.delete.bind(this, this.state.Event._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
