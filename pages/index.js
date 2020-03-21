import React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

import Slider from 'rc-slider';
import sliderCSS from './../lib/rc-slider-css';

import foodCategories from './../lib/food';
import createPersistedState from 'use-persisted-state';

import NoSSR from 'react-no-ssr';

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
	background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);

	button {
		cursor: pointer;
		display: flex;
		border: none;
		justify-content: center;
		font-size: 1.4rem;
		border-radius: 9px;
		padding: 0.5rem 0.8rem;

		transform: translateY(0);

		&:hover {
			transform: translateY(-2px);
		}

		transition: all 0.1s ease-in-out;

		&.page {
			margin-right: 0.5rem;
		}

		&.active {
			background-image: linear-gradient(135deg, #69ff97 10%, #00e4ff 100%);
			color: white;
		}

		&.reset {
			margin-left: auto;
			background-image: linear-gradient(135deg, #69ff97 10%, #00e4ff 100%);
			color: white;
		}

		&.next {
			background-image: linear-gradient(135deg, #69ff97 10%, #00e4ff 100%);
			margin-top: 3rem;
			margin-bottom: 2rem;
			color: white;
		}
	}
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 3rem;

	width: 50rem;
	max-width: calc(100vw - 2rem);

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

		text-align: center;
		margin-bottom: 3rem;
	}

	div {
		display: flex;
	}
`;

const Main = styled.div`
	display: flex;
	flex-direction: column;

	width: 50rem;
	max-width: calc(100vw - 2rem);
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;

	h1 {
		color: white;
	}
`;

const Results = styled.div`
	display: flex;
	flex-direction: column;

	h1 {
		color: white;
	}
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

const useSliderState = createPersistedState('slider-values');
const usePageSlider = createPersistedState('page');

const Home = () => {
	const [sliderValues, setSliderValues] = useSliderState(defaultSliderValues);
	const [page, setPage] = usePageSlider(1);

	const switchPage = page => () => setPage(page);

	const updateSlider = key => value =>
		setSliderValues(s => ({ ...s, [key]: value }));

	const reset = () => setSliderValues(defaultSliderValues) && switchPage(1);

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

				<div>
					<button
						className={`page ${page === 1 && 'active'}`}
						type="button"
						onClick={switchPage(1)}
					>
						Start
					</button>
					<button
						className={`page ${page === 2 && 'active'}`}
						type="button"
						onClick={switchPage(2)}
					>
						Preferences
					</button>
					<button
						className={`page ${page === 3 && 'active'}`}
						type="button"
						onClick={switchPage(3)}
					>
						Results
					</button>
					<button className="reset" type="button" onClick={reset}>
						Reset
					</button>
				</div>
			</Header>
			<Main>
				{page === 1 && (
					<Intro>
						<h1>Introduction</h1>
						<button type="button" className="next" onClick={switchPage(2)}>
							Next
						</button>
					</Intro>
				)}
				{page === 2 && (
					<Sliders>
						{sliders.map(({ key, icon, name, color }) => (
							<div key={key}>
								<p>
									<span style={{ color }}>{icon}</span> {name}
								</p>
								<NoSSR>
									<Slider
										onChange={updateSlider(key)}
										value={sliderValues[key]}
										defaultValue={50}
										startPoint={0}
									/>
								</NoSSR>
							</div>
						))}
						<button type="button" className="next" onClick={switchPage(3)}>
							Next
						</button>
					</Sliders>
				)}

				{page === 3 && (
					<Results>
						<h1>Your Results</h1>
					</Results>
				)}
			</Main>
		</Wrapper>
	);
};

export default Home;
