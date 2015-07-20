var Card = React.createClass({
	getInitialState: function () {
		return {};
	},
	componentDidMount: function(){
		var component = this;
		$.get("https://api.github.com/users/" + this.props.login, function(data){
			component.setState(data);
		})
	},
	render: function() {
		return (
			<div>
				<img src={this.state.avatar_url} width="80px" />
				<h3>{this.state.name}</h3>
				<hr />
			</div>
			);
	}
});

var Main = React.createClass({
	getInitialState: function(){
		return {logins: ['mtklitgaard', 'EricFreeman']}
	},
	render: function(){
		var cards = this.state.logins.map(function(login) {
			return <Card login={login} />;
		});
		return (
			<div>
				{cards}
			</div>
			);
	}
});

React.render(<Main />, document.getElementById('root'));