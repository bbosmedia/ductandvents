import React from 'react'
import { useState } from 'react'

const Header = () => {
	const [toggle, setToggle] = useState(false)
	return (
		<>
			<nav className='nav'>
				<div>
					<button
						onClick={() => setToggle(!toggle)}
						className={`toggle ${toggle && 'active'}`}
					>
						<i className='fa-solid fa-bars'></i>
						<i className='fa-solid fa-xmark'></i>
					</button>
					<a className='logo' href='#'>
						Duct and Vents
					</a>
				</div>
				<ul className='nav-list'>
					{/* <li className="nav-item">
						<a>
							<i className="fa-solid fa-clipboard"></i> Get Quote
						</a>
					</li> */}
					<li className='nav-item phone'>
						<a href='tel:12402410401'>
							<i className='fa-solid fa-phone'></i> Call Now
						</a>
					</li>
				</ul>
			</nav>
			<div className={`sidebar ${toggle && 'active'}`}>
				<ul className='sidebar-menu'>
					<li className='sidebar-item'>
						<a
							onClick={() => setToggle(false)}
							href='#updates'
							className='sidebar-link'
						>
							Our Services
						</a>
					</li>
					<li className='sidebar-item'>
						<a
							onClick={() => setToggle(false)}
							href='#contact'
							className='sidebar-link'
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Header
