import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import weather from "../assets/weather.jpg";
import calendar from "../assets/simple-calendar.jpg";
import notes from "../assets/notes.jpg";
//Sets the list of projects with link and an image
function Projects() {
	return (
		<Container>
			<Row>
				<Col>
					<Image src={weather} thumbnail />
					<h4>Weather Dashboard</h4>
					<p>
						his Challenge was the creation of a Weather Dashboard that would
						utilize API calls from "OpenWeather API" to check the current
						weather and the five day forecast for s searched city.
					</p>
					<a href="https://github.com/Kaneknah/ch6_baxley_weather_page">
						GitHub Link
					</a>
				</Col>
				<Col>
					<Image src={calendar} thumbnail />
					<h4>Calendar App</h4>
					<p>
						This project was the creation of a simple Task-tracking Calendar
						that utilized day.js and jQuery to provide specific aspects to the
						Java script to make the page interactive. 
					</p>
					<a href="https://github.com/Kaneknah/ch5_baxley_calendar">
						GitHub Link
					</a>
				</Col>
				<Col>
					<Image src={notes} thumbnail />
					<h4>Note Taker App</h4>
					<p>
						This project was the creation of a note taker app that specifically
						utilized Express.js on the back end to save and retrieve data from
						JSON files. 
					</p>
					<a href="https://github.com/yourusername/project3">Github Link</a>
				</Col>
			</Row>
		</Container>
	);
}

export default Projects;
