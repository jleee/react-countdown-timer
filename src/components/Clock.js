import React, { Component } from 'react';
import 'styles/Clock.css';

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0		
		}
	}

	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}
	
	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000) % 60);
		const minutes = Math.floor((time/1000/60) % 60);
		const hours = Math.floor(time/(1000*60*70) % 24);
		const days = Math.floor(time/(1000*60*60*24));
		
		this.setState({days, hours, minutes, seconds});
	}

	leadingZero(num) {
		if(num < 10) {
			return '0' + num;
		}
		return num;
	}

	render() {
		return (
			<div className="clock-container">
				<div className="clock-days"><span className="number">{this.leadingZero(this.state.days)}</span> Days</div>
				<div className="clock-hours"><span className="number">{this.leadingZero(this.state.hours)}</span> Hours</div>
				<div className="clock-minutes"><span className="number">{this.leadingZero(this.state.minutes)}</span> Minutes</div>
				<div className="clock-seconds"><span className="number">{this.leadingZero(this.state.seconds)}</span> Seconds</div>
			</div>
		)
	}
}