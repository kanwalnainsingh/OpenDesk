import React, { Component } from 'react';
import axios from 'axios';

class Seat extends Component {
	constructor(props) {
		super();
		this.state = {};
	}
	handleSeatChange = (e) => {
		this.setState({ selected: e.target.value });

		console.log('0000000000000000000000000000');
		var seat_id = e.target.value;
		// e.target.checked =  !e.target.checked;
		this.props.OnChangeSeat(e);
	};

	render() {
		let seat = this.props.seat;
		let count = parseInt(seat._id.charAt(0));
		let style = {
			float: 'left',
			width: 16 + '%'
		};
		if (this.props.reserved == true) {
			return (
				<li className="seat" style={style}>
					<input
						type="radio"
						ref={seat._id}
						id={seat._id}
						name="seat_id"
						key={seat._id}
						value={seat._id}
						onChange={(e) => this.handleSeatChange(e)}
					/>
					<label htmlFor={seat._id}>{seat._id}</label>
				</li>
			);
		}
		if (this.props.empty == true) {
			return (
				<li className="seat" style={style}>
					<input
						type="radio"
						ref={seat._id}
						id={seat._id}
						name="seat_id"
						key={seat._id}
						value={seat._id}
						onChange={(e) => this.handleSeatChange(e)}
					/>
					<label htmlFor={seat._id}>{seat._id}</label>
				</li>
			);
		} else if (seat.available == false) {
			return (
				<li className="seat" style={style}>
					<input type="radio" disabled key={seat._id} />
					<label>{seat._id}</label>
				</li>
			);
		} else if (seat.available == true) {
			return (
				<li className="seat" style={style}>
					{/* <li  style={style}> */}
					<input
						type="radio"
						ref={seat._id}
						id={seat._id}
						name="seat_id"
						key={seat._id}
						value={seat._id}
						//     checked={this.state.selected === seat._id}
						onChange={(e) => this.handleSeatChange(e)}
						// onChange={(e) => this.handleSeatChange(e)}
					/>
					<label htmlFor={seat._id}>{seat._id}</label>
				</li>
			);
		}
	}
}

export default Seat;
