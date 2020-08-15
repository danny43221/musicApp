const redirect = url => {
	return (req, res, next) => {
		res.writeHead(301, { Location: url });
		res.end();
	};
};

module.exports = redirect;
