import React, {Component} from 'react'
import './About.css'


export default class About extends Component{
	render(){

		return(

				<div className ="About">
						<img src='https://i.imgur.com/0FlB2Nr.jpg?1' alt='my face' /> 
					<section className='bio-stuff'>
						<p> Hi, Im Teddy. </p> 
						<p> I'm a fullstack developer, and a UX/UI fanatic. I'm a recent graduate from Bloc's web developer track,
						 and prior to Bloc I've been doing web design in some form or another since I was a teenager.</p>
						<p>I love programming because it affords me the opportunity to bring beautiful ideas to the people, and I love solving problems.</p>
						<p>When I'm not coding, or trying to find new, innovative ways to breathe life to my projects,
						 I am a lifelong musician, I love biking, skating, hiking, and enjoying the outdoors in general.
						 My current learning projects (aside from programming!) are learning to knit, and teaching myself to play the drums.
						 </p>
					</section>
					<section className='contact'>
						<h2> Hit Me Up! </h2>
						<ul>
							<li>
								<a href='linkedin.com/in/teddygallion/'> linkedin</a>
							</li>
							<li>
								<a href='github.com/teddygallion'> github </a>
							</li>
						</ul>
					</section>
				</div>
			)
	}
}