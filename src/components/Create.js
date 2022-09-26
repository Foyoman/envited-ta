import React from 'react';
import Typed from 'react-typed';
import camera from '../images/Camera.svg'
import cog from '../images/cog.png'

export default function Create() {
	return (
		<div className='create'>
			<div className='top-bar'>
				<a href="/">
					<p className='greyed'>Cancel</p>
				</a>
				<img src={ cog } alt="settings cog" style={{ cursor: 'pointer' }} />
			</div>
			<div className='create-event'>
				<h1>
					Plan your {" "}
					<Typed
						className='typed'
						strings={[
							"movie night",
							"birthday party",
							"games night", 
							"picnic",
							"dinner",
							"house party",
							"lowkey gatho",
							"drinks night"
						]}
						typeSpeed={50}
						backSpeed={20}
						backDelay={3000}
						loop
					/>
				</h1>
				<div className='side-by-side'>
					<form className='event-form'>
						<p>🎉 My event is called</p>
						<input type="text" />

						<p>🗓 It starts at</p>
						<input type="date" />

						<p>🏁 It ends at <span className='optional'>(optional)</span></p>
						<input type="text" />

						<p>📍 It’s happening at <span className='optional'>(optional)</span></p>
						<input type="text" placeholder='Location' />

						<p>🔗 Add a URL link <span className='optional'>(optional)</span></p>
						<input type="text" placeholder='URL' />

						<p>✏️ Description <span className='optional'>(optional)</span></p>
						<input type="text" />
					</form>
					<div className='image-placeholder'>
						<img src={ camera } alt="image placeholder" style={{ cursor: 'pointer' }} />
						<p style={{ fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }}>Choose a photo</p> 
					</div>
				</div>
				<a href="/event">
					<button className='gradient-button create-button'>
						🎉 Create your event
					</button>
				</a>
			</div>
		</div >
	)
}
