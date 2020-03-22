import React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

import Slider from 'rc-slider';
import sliderCSS from './../lib/rc-slider-css';
import foodCategories from './../lib/food';
import calculate from './../lib/computation';

import createPersistedState from 'use-persisted-state';
import NoSSR from 'react-no-ssr';
import Map from './../lib/map-component';

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

	@media print {
		background: white;
	}

	button {
		cursor: pointer;
		display: flex;
		border: none;
		justify-content: center;
		font-size: calc(0.5rem + 2vw);
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
	margin-bottom: 2rem;

	width: 50rem;
	max-width: calc(100vw - 2rem);

	@media print {
		display: none;
	}

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

	p {
		color: white;
		font-size: calc(1rem + 1vw);
		margin-bottom: 1rem;
	}
`;

const Results = styled.div`
	display: flex;
	flex-direction: column;
	filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3));

	@media print {
		filter: none;
		h1,
		h2,
		p,
		li,
		ul li:before {
			color: black;
		}
	}

	h1 {
		color: white;
		font-size: calc(2.5rem + 2vw);

		@media print {
			margin-top: 4rem;
			font-size: 3.5rem;
		}
	}

	h2 {
		font-size: calc(1.5rem + 2vw);
		color: white;
		margin-left: 0.5rem;
	}

	p {
		font-size: calc(1.2rem + 2vw);
		color: white;
		margin-left: auto;
	}

	ul {
		list-style: none;
		padding: 0;

		li {
			display: flex;
			align-items: center;
		}
	}

	ul li:before {
		font-size: calc(3rem + 2vw);
		content: '✓';
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

const Settings = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	h2 {
		margin-top: 1.5rem;
		color: white;
		font-size: 2.5rem;
		text-align: center;
	}

	div.gender {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	div.age {
		display: flex;
		justify-content: center;
		align-items: center;

		h3 {
			color: white;
			margin-left: 0.5rem;
			font-size: 2rem;
		}
	}

	button {
		margin: 0.5rem;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		opacity: 1;
	}

	input {
		width: 4rem;
		display: flex;
		border: none;
		justify-content: center;
		font-size: calc(0.5rem + 2vw);
		border-radius: 9px;
		padding: 0.5rem 0.8rem;
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
const useSettingsState = createPersistedState('settings');

const defaultSettingsState = {
	gender: null,
	age: 18,
};

const capitalize = s => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

const Home = () => {
	const [sliderValues, setSliderValues] = useSliderState(defaultSliderValues);
	const [settingsState, setSettingsState] = useSettingsState(
		defaultSettingsState,
	);

	const [page, setPage] = usePageSlider(1);

	const updateSetting = (setting, value) => ({ target }) =>
		setSettingsState(s => ({
			...s,
			[setting]: value ? value : target.value,
		}));
	const switchPage = page => () => setPage(page);
	const updateSlider = key => value =>
		setSliderValues(s => ({ ...s, [key]: value }));
	const reset = () =>
		setSliderValues(defaultSliderValues) &&
		setSettingsState(defaultSettingsState) &&
		switchPage(1);

	return (
		<Wrapper>
			<GlobalStyles />
			<Head>
				<title>TwoWeeksOfFood</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header>
				<h1>TwoWeeksOfFood</h1>

				<NoSSR>
					<div>
						<button
							className={`page ${page === 1 && 'active'}`}
							type="button"
							onClick={switchPage(1)}
						>
							Start
						</button>
						<button
							className={`page ${page === 2 && 'active'} `}
							type="button"
							onClick={switchPage(2)}
						>
							Preferences
						</button>
						<button
							className={`page ${page === 3 && 'active'} `}
							type="button"
							onClick={switchPage(3)}
						>
							Results
						</button>
						<button className="reset" type="button" onClick={reset}>
							Reset
						</button>
					</div>
				</NoSSR>
			</Header>
			<Main>
				<NoSSR>
					{page === 1 && (
						<Intro>
							<h1>Introduction</h1>
							<p>
								TwoWeeksOfFood helps you to have a healthy balanced of food in
								times of crisis. By only having extra food for 2 weeks, you
								relieve supermarkets and prevent hamster purchases. In the
								following, we will ask a couple of questions to see how many
								calories you need per day. Don't worry, the answers are not
								being collected anywhere.
							</p>
							<Settings>
								<h2>Your Gender</h2>
								<div className="gender">
									<button
										className={`${settingsState.gender === 'female' &&
											'active'} `}
										type="button"
										onClick={updateSetting('gender', 'female')}
									>
										♀️ Female
									</button>
									<button
										className={`${settingsState.gender === 'male' &&
											'active'} `}
										type="button"
										onClick={updateSetting('gender', 'male')}
									>
										♂️ Male
									</button>
									<button
										className={`${settingsState.gender === 'other' &&
											'active'} `}
										type="button"
										onClick={updateSetting('gender', 'other')}
									>
										⚪ Other / Prefer not to specify
									</button>
								</div>
								<h2>Your Age</h2>
								<div className="age">
									<input
										type="number"
										min="0"
										max="100"
										value={settingsState.age}
										onChange={updateSetting('age')}
									/>
									<h3> Years</h3>
								</div>
							</Settings>
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
									<Slider
										onChange={updateSlider(key)}
										value={sliderValues[key]}
										defaultValue={50}
										startPoint={0}
									/>
								</div>
							))}
							<button type="button" className="next" onClick={switchPage(3)}>
								Next
							</button>
						</Sliders>
					)}

					{page === 3 && (
						<Results>
							<h1>Your Shopping List</h1>
							<ul>
								{Object.entries(calculate(settingsState, sliderValues))
									.filter(([_, v]) => v !== undefined)
									.map(([, v]) =>
										Object.entries(v).map(([name, grams]) => (
											<li key={name}>
												<h2>{capitalize(name.split(/(?=[A-Z])/).join(' '))}</h2>
												<p>{grams}g</p>
											</li>
										)),
									)}
								<li>
									<h2>Water</h2>
									<p>24x 1l</p>
								</li>
							</ul>
							<br />
							<h1>Nearby Supermarkets</h1>
							<Map />
							<br />
							<br />
							<br />
						</Results>
					)}
				</NoSSR>
			</Main>
		</Wrapper>
	);
};

export default Home;
