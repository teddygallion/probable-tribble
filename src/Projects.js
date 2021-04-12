import React, {Component} from 'react'
import './Projects.css'

const projectsArr = [
	/*{	

		'title': 'Dreami', 
		'blurb': 'lil dream journal sleep app thing idk',
		'live-app': '',
		'repo': 'https://github.com/teddygallion/dreami-ting',
		'image1': 'https://i.stack.imgur.com/ZME5U.jpg',
		'image2': 'https://i.stack.imgur.com/ZME5U.jpg'
	},
	{
		'title': 'Timely', 
		'blurb': 'All in one Productivity suite with Pomodoro Timer and a to do list, designed to help you get organized and stay organized',
		'live-app': 'https://timely.teddygallion.vercel.app/',
		'repo': 'https://github.com/teddygallion/timely-ting',
		'image1': 'https://i.stack.imgur.com/ZME5U.jpg',
		'image2': 'https://i.stack.imgur.com/ZME5U.jpg'

	},*/
	{
		'title': 'FindMySound', 
		'blurb': 'Spotify app designed to help you find your new favorite band',
		'live-app': '',
		'repo': 'https://github.com/teddygallion/findmysound',
		'image1': 'https://i.imgur.com/YDB60EJ.png',
		'image2': 'https://i.imgur.com/QPhtSb4.png'

	},
	{
		'title': 'MyMelody', 
		'blurb': 'Simple Jquery keyboard',
		'live': '/Keyboard/index.html',
		'repo': 'https://github.com/teddygallion/mymelody',
		'image1': 'https://i.imgur.com/R7OKzwo.png',
		'image2': 'https://i.imgur.com/R7OKzwo.png'

	},


]

export default class Projects extends Component{
	renderProjects = projectsArr.map(project =>{
			return(
				<section className ={project.title} key={project.title}>
					<h2> {project.title} </h2>
					<div className ='{project-title}-img-container'>
						<img className='image1' alt={project.title} src= {project.image1}/>
						<img className='image2'alt={project.title} src = {project.image2}/>
					</div>
					<p> {project.blurb} </p>
					<ul>
						<li>
							<a href={project.live}> live app </a>
						 </li>
						<li>
						 	<a href={project.repo}> repo </a>
						 </li>
					</ul>
				</section>
				);
		})
		
	render(){
		return(
			<div className ="Projects">
					{this.renderProjects}
			</div>
		)
	}
}