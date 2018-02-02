import React, { Component } from 'react';
import Clock from 'components/Clock';
import 'styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: '12/25/2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  render() {
    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
          <div className="col-md-12">
            <Clock deadline={this.state.deadline}/>
            <input 
              placeholder ="Enter date here"
              onChange={event => this.setState({newDeadline: event.target.value})}
            />
            <button onClick={() => this.changeDeadline()}>Submit</button>
            <div className="instruction">
              <p><strong>Enter date. E.g. MM/DD/YYYY</strong></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}