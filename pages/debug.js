import React from 'react';
import calculate from './../lib/computation';

const DebugComponent = () => {
	const testData = {
		fruits: 10,
		vegetables: 100,
		grain: 100,
		dairy: 100,
		meatFishEggs: 100,
		sweets: 100,
	};

	const result = calculate({ gender: 'female', age: 38 }, testData) || {};

	return <pre>{JSON.stringify(result, null, 2)}</pre>;
};

export default DebugComponent;
