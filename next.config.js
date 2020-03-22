const nextPluginSC = require('@explodingcamera/next-plugin-styled-components');

module.exports = nextPluginSC({
	exportPathMap: () => ({
		'/': { page: '/' },
	}),
});
