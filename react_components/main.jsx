var React = require('react');
var Menu = require('./menu.jsx');

var Main = React.createClass({

    getInitialState: function() {
        return {
            currentFloor: 0
        }
    },

    setFloor: function(floor) {
        this.setState({
          currentFloor: floor
        });
    },

    render: function() {
        return (
            <body>
                <Menu
                    setFloor={this.setFloor}
                    currentFloor={this.state.currentFloor}
                />
                <div className="home">
                    <div className="parent">
                        <Title/>
                    </div>
                </div>
            </body>
        );
    }
});



function run() {
    React.render(<Main />, document.body);
}

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}

