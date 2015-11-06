var React = require('react');
var Menu = require('./menu/menu.jsx');
var PreviewCard = require('./preview_card/preview_card.jsx')

var DormMap = require('./map/dormmap.jsx');

var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f8phwm', x: 11, y: 45, z: 9},
  // ...
];

var Main = React.createClass({

    getInitialState: function() {
        return {
            currentFloor: 0,
            pinPlacement: null,
            previewRoom: {
                room: "North Hall 111",
                group: "A",
                occupants: [
                    "Joe Smith",
                    "John Doe"
                ],
                contact: [
                    {
                        email: "joe.smith@students.olin.edu",
                        text: "555-555-5555",
                        note: "Texting is the best way to reach me."
                    },
                    {
                        email: "john.doe@students.olin.edu",
                        twitter: "@jdoe",
                        note: ""
                    }
                ]
            },
            isComparing: false
        }
    },

    setFloor: function(floor) {
        console.log('A')
        this.setState({
          currentFloor: floor
        });
    },

    setCompare: function() {
        this.setState({
          isComparing: !this.state.isComparing
        });
    },

    isComparing: function() {
        return this.state.isComparing;
    },

    setPin: function() {
        return;
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
                    <div className="app">
                        <DormMap 
                            width={600} 
                            height={600} 
                            // Update this to be west hall when we have that map working
                            dorm = {this.state.currentFloor >= 4? "EH" : "EH"}
                            floor = {(this.state.currentFloor % 4) + 1} 
                            />
                      </div>
                </div>
                <PreviewCard
                    previewRoom={this.state.previewRoom}
                    setCompare={this.setCompare}
                    isComparing={this.isComparing}
                    setPin={this.setPin}
                />
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

