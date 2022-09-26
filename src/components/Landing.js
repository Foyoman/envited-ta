import React from 'react'
import screenshot from '../images/header-screenshot.webp'
import Typed from 'react-typed'

export default function Landing() {
	return (
		<div className='landing'> 
			<div className='container'>
				<div className='screenshot-container desktop'>
					<img className='screenshot' src={ screenshot } alt="landing screenshot" />
				</div>
				<div className='content right-flex landing-container'>
					<div className='content-container right-flex'>
						<div className='primary-text right-align'>
							<p>
								<span style={{ display: 'block' }}>Imagine if</span>  
								<span className='red'>
									<Typed 
										style={{ display: 'block' }}
									  className='typed'
										strings={[
											"Instagram",
											"Snapchat",
											"WhatsApp", 
											"Messenger",
											"Discord",
											"Twitter",
											"Group chats",
										]}
										typeSpeed={50}
										backSpeed={20}
										backDelay={3000}
										loop
									/>
								</span> 
								had events.
							</p>
						</div>
						<div className='subheading'>
							<p>Easily host and share events with your friends across any social media.</p>
						</div>
						<div className='screenshot-container ipad-sc-contain'>
							<img className='screenshot ipad-sc' src={ screenshot } alt="landing screenshot" />
						</div>
						<a href="/create">
							<button id='landing-button' className='gradient-button'>
								🎉 Create my event
							</button>
						</a>
					</div>
				</div>
			</div>
	  </div>
	)
}
