import Container from './components/Container'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import Updates from './components/Updates'
import bg from './images/bg.png'
import './index.css'

function App() {
	return (
		<div>
			<Header></Header>
			<Container>
				<div className="main-content">
					
					<div className="center-content">
						
					</div>
					{/* <button className="main-btn">Get Quote</button> */}
				</div>
				<img className="head-img" src={bg} alt="" />
				<Updates />
        <Testimonials />
				<section className="contact-us" id='contact'>
					<div className="line"></div>
					<h2>Contact Us</h2>
          <div className="contact-cards">
            <div>
              <h4>Contact</h4>
              <a href="tel:12402450909" className='main-btn'>Call Now</a>
              <p className='tel'>(240) 245 09 09</p>
            </div>
            <div>
              <h4>Business Hours</h4>
              <ul className="table">
                <li>Mon:	8:00 AM – 6:00 PM</li>
                <li>Tue:	8:00 AM – 6:00 PM</li>
                <li>Wed:	8:00 AM – 6:00 PM</li>
                <li>Thu:	8:00 AM – 6:00 PM</li>
                <li>Fri:	8:00 AM – 6:00 PM</li>
                <li>Sat:	8:00 AM – 6:00 PM</li>
                <li>Sun:	8:00 AM – 6:00 PM</li>
              </ul>
            </div>
          </div>
				</section>
			</Container>
      <footer>
        Green Services &copy; 2015
      </footer>
		</div>
	)
}

export default App
