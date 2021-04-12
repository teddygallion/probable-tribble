import React, {Component} from 'react'
import './Home.css'


export default class Home extends Component{
	render(){
		return(
				<div className='Home'> 
					<div className ='container'>
					  <div className="hero-image">	
					  	<div className="hero-text">
				            <h1>Hi, I'm Teddy</h1>
				            <p>My passions include coding, coffee, and cats </p>
				          </div>	          
				      </div>
				    </div>
				</div>
			)
	}
}