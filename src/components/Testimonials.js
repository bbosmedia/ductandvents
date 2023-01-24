import React from 'react'
import './Testemonial.css'
import videoone from '../videos/IMG_0774.MP4'
import videotwo from '../videos/IMG_0775.MP4'
import videothree from '../videos/IMG_0776.MP4'
import videofour from '../videos/IMG_0777.MP4'

const Testimonials = () => {
	return (
		<section className="testimonials">
			<div className="line"></div>
			<h2 className="secondary-title">TESTIMONIALS</h2>
			<div className="inner_testimonials">
				<div className="videos">
					<div>
						<video style={{ width: '100%', height: 'auto' }} controls>
							<source src={videoone} type="video/mp4" />
						</video>
					</div>
					<div>
						<video style={{ width: '100%', height: 'auto' }} controls>
							<source src={videotwo} type="video/mp4" />
						</video>
					</div>
					<div>
						<video style={{ width: '100%', height: 'auto' }} controls>
							<source src={videothree} type="video/mp4" />
						</video>
					</div>
					<div>
						<video style={{ width: '100%', height: 'auto' }} controls>
							<source src={videofour} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
