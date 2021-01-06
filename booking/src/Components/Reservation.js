import React, { Component } from 'react';
import Seat from '../Components/Seat';
import uuid from 'uuid';
import axios from 'axios';
class Reservation extends Component {
	constructor(props) {
		super();
		this.state = {};
		this.seat = '';
		this.reservedSeats = [];
		this.emptySeats = [];
		this.changeSeat = this.changeSeat.bind(this);
	}
	handleSubmit = (event) => {
		var email = this.refs.email.value;
		var name = this.refs.name.value;
		var telephone = this.refs.telephone.value;

		let seatData = {
			email: email,
			telephone: telephone,
			name: name,
			seat_number: this.seat
		};
		axios.post('reservation', seatData).then((response) => {
			// this.forceUpdate();

			if (response.data.error) {
				event.preventDefault();
			}

			// if(response.errorCode)
		});
	};
	changeSeat = (e) => {
		//problem with setState
		// this.setState({selected:e.target.value});
		this.seat = e.target.value;
	};

	render() {
		console.log('this.props.seats');
		console.log(this.props.seats);
		let reservations;
		if (this.props.reservations) {
			reservations = this.props.reservations.map((reserv) => {
				return (
					<div className="plane cabin fuselage">
						<br />
						<br />
						<br />
						<h4>
							<label> Name: </label>
							{reserv.name}
						</h4>
						<h4>
							<label>Email: </label> {reserv.email}
						</h4>
						<h4>
							<label> Telephone: </label>
							{reserv.telephone}
						</h4>
						<h4>
							<label>Ticket ID:</label>
							{reserv.ticket_id}
						</h4>
					</div>
				);
			});
		}
		if (this.props.seats && this.props.reservations) {
			return (
				<div>
					<div className="plane">
						<div className="cockpit">
							<h1>Please select a seat</h1>
						</div>
						<div className="exit exit--front fuselage" />
						<form onSubmit={this.handleSubmit}>
							<div className="userform" style={{ paddingLeft: 10 + 'px' }}>
								<label>Name: </label>
								<input ref="name" />
								<br />
								<label>Email: </label> <input ref="email" />
								<br />
								<label>Telephone: </label>
								<input ref="telephone" />
								<br />
							</div>

							<ol className="cabin fuselage" type="A">
								{this.props.seats.map((seat) => {
									console.log(seat.available);
									if (seat.available === false) this.reservedSeats.push(seat);
									else this.emptySeats.push(seat);
									return <Seat key={uuid.v4()} seat={seat} OnChangeSeat={this.changeSeat} />;
								})}
								{console.log('ssssssssssssss')}

								{console.log(this.reservedSeats)}
							</ol>
							<input type="submit" value="Save" />
						</form>

						<div className="exit exit--back fuselage" />
					</div>

					<div style={{ float: 'center' }}>
						<div className="plane">
							<div className="cockpit">
								<h1>Reserved Seats</h1>
							</div>
							<div className="exit exit--front fuselage" />
							<ol className="cabin fuselage" type="A">
								{this.reservedSeats.map((seat) => {
									return <Seat key={uuid.v4()} seat={seat} reserved={true} />;
								})}
								<br />
							</ol>
							<div className="exit exit--back fuselage" />
						</div>
					</div>
					<br />

					<div>
						List of reservations
						<div>{reservations}</div>
					</div>
				</div>
			);
		}
		return null;
	}
}

export default Reservation;
