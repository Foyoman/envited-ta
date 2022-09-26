import React from 'react';
import date from '../images/date.png';
import address from '../images/address.png';
import stroke from '../images/stroke.png';

export default function Event() {
	return (
		<div className='event'>
			<div className='event-container'>
				<div className='event-desc'>
					<h1>Birthday Bash</h1>
					<p className='greyed'>Hosted by <strong>Elysia</strong></p>

					<div className='details'>
						<div className='detail'>
							<div className='detail-info'>
								<img src={ date } alt="date icon" />
								<div>
									<p>18 August 6:00PM</p>
									<p>to <strong>19 August 1:00PM</strong> UTC +10</p>
								</div>
							</div>
							<img src={ stroke } alt="right arrow" />
						</div>
						<div className='detail'>
							<div className='detail-info'>
								<img src={ address } alt="address icon" />
								<div>
									<p><strong>Street name</strong></p>
									<p>Suburb, State, Postcode</p>
								</div>
							</div>
							<img src={ stroke } alt="right arrow" />
						</div>
					</div>
				</div>
				<div className='event-image'>

				</div>
			</div>
		</div>
	)
}
