import React, { useState } from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

import Slider from 'rc-slider';
import sliderCSS from './../lib/rc-slider-css';

import foodCategories from './../lib/food';

const GlobalStyles = createGlobalStyle`
	* {
		font-family: Sen;
	}

	h1, h2, h3, h4, h5, p, body {
		margin: 0;
		padding: 0;
	}

	${sliderCSS}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	background-image: linear-gradient(135deg, #90f7ec 10%, #32ccbc 100%);
`;

const Header = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;

	h1 {
		background-image: linear-gradient(
			90deg,
			rgb(255, 255, 255),
			rgb(184, 255, 253)
		);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: calc(2rem + 2vw);
		-webkit-background-clip: text;
		color: white;
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));

		font-size: calc(2rem + 2vw);
	}
`;

const Main = styled.div`
	display: flex;
	flex-direction: column;

	width: 50rem;
	max-width: calc(100vw - 2rem);
`;

const Sliders = styled.div`
	display: flex;
	flex-direction: column;

	div {
		p {
			margin-top: 1rem;
			font-size: 1.8rem;
			color: white;
			filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));
		}
	}
`;

let defaultSliderValues = {};
let sliders = [];

// eslint-disable-next-line guard-for-in
for (const category in foodCategories) {
	defaultSliderValues[category] = 50;
	sliders.push({ key: category, ...foodCategories[category] });
}

const Home = () => {
	const [sliderValues, setSliderValues] = useState(defaultSliderValues);

	const updateSlider = key => value =>
		setSliderValues(s => ({ ...s, [key]: value }));

	return (
		<Wrapper>
			<GlobalStyles />
			<Head>
				<title>TwoWeeksOfFood</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header>
				<h1>TwoWeeksOfFood</h1>
			</Header>
			<Main>
				<Sliders>
					{sliders.map(({ key, icon, name, color }) => (
						<div key={key}>
							<p>
								<span style={{ color }}>{icon}</span> {name}
							</p>
							<Slider
								onChange={updateSlider(key)}
								defaultValue={50}
								startPoint={50}
							/>
						</div>
					))}
				</Sliders>
				<p>{JSON.stringify(sliderValues, null, 2)}</p>
			</Main>
		</Wrapper>
	);
};

export default Home;
