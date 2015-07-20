var Card = React.createClass({
	render: function() {
		return (
			<div>
				<img src="" />
				<h3>Name here</h3>
				<hr />
			</div>
			);
	}
});

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Card />
			</div>
			);
	}
});

React.render(<Main />, document.getElementById('root'));