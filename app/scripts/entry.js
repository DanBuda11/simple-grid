// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const TestComponent = React.createClass({
	render: function() {
		return (
			<div>
			<div className="a1 col-1 col-2 col-3 col-4"></div>
			<div className="a2 col-1 col-2 col-3 col-4"></div>
			<div className="a3 col-1 col-2 col-3 col-4"></div>
			<div className="a4 col-1 col-2 col-3 col-4"></div>
			<div className="a5 col-1 col-2 col-3 col-4"></div>
			<div className="a6 col-1 col-2 col-3 col-4"></div>
			<div className="a7 col-1 col-2 col-3 col-4"></div>
			<div className="a8 col-1 col-2 col-3 col-4"></div>
			<div className="a9 col-1 col-2 col-3 col-4"></div>
			<div className="a10 col-1 col-2 col-3 col-4"></div>
			<div className="a11 col-1 col-2 col-3 col-4"></div>
			<div className="a12 col-1 col-2 col-3 col-4"></div>
			</div>
		);
	}
});

ReactDOM.render(<TestComponent />, document.querySelector('main'));