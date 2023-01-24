import React from 'react'

import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'

const Updates = () => {
	return (
		<section className="updates" id="updates">
			<div className="line"></div>
			<h2>Our Services</h2>
			<div className="updates-cards">
				<div className="updates_card">
					<img src={img4} alt="" />
					<h4>$200 Chimney Inspection and Cleaning</h4>
					<ul className="updates_card-content">
						<li>Detailed cleaning for chimney:</li>
						<li>Crown</li>
						<li>Linear</li>
						<li>Dumper</li>
						<li>Firebox</li>
					</ul>
				</div>
				<div className="updates_card">
					<img src="https://lh3.googleusercontent.com/p/AF1QipMiK7K6OmpWTtQpW_86_lqYhRbn866Yd_41lmuR=s1280-p-no-v1" alt="" />
					<h4>$310 Air Duct Cleaning</h4>
					<ul className="updates_card-content">
						<li>Cleaning all supply vents</li>
						<li>Cleaning Cold Air Return</li>
						<li>Furnace inspection</li>
						<li>Filter check</li>
						<li>No partial cleaning</li>
						<li>Complimentary deodorizing</li>
					</ul>
				</div>
				<div className="updates_card">
					<img src="https://lh3.googleusercontent.com/p/AF1QipMO9XK_Nzstd3JejRKwpRqcFV0q2kkH1KuIXZuG=w960-h960-n-o-v1" alt="" />
					<h4>$179 Dryer Vent Cleaning</h4>

					<ul className="updates_card-content">
						<li>Dryer vent cleaning for 6 feet</li>
						<li>Dryer unit and dryer vent inspection</li>
						<li>Airflow effective test</li>
						<li>No partial cleaning</li>
					</ul>
				</div>
				<div className="updates_card">
					<img src={img3} alt="" />
					<h4>$395 Air Duct and Dryer Vent Cleaning</h4>
					<ul className="updates_card-content">
						<li>Cleaning all supply vents</li>
						<li>Cleaning Cold Air Return</li>
						<li>Furnace inspection</li>
						<li>Filter check</li>
						<li>No partial cleaning</li>
						<li>Complimentary deodorizing</li>
						<li>Dryer vent cleaning for 6 feet</li>
						<li>Dryer unit and dryer vent inspection</li>
						<li>Airflow effective test</li>
						<li>No partial cleaning</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Updates
