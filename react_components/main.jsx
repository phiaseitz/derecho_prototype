var React = require('react');
var Menu = require('./menu/menu.jsx');

var BarChart = require('./barchart.jsx');

var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
  // ...
];

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
                    <div className="App">
                        <BarChart width={600} height={300} />
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

