var React = require('react');
var FloorButton = require('./buttons/floor_button.jsx');
var LogoutButton = require('./buttons/logout_button.jsx');
var HomeButton = require('./buttons/home_button.jsx');

var Menu = React.createClass({

    render: function() {
        return (
            <div id="menu">
                <HomeButton
                    userPin = {this.props.userPin}
                    setFloor={this.props.setFloor}
                    className="menuButton"
                />
                <div id="buttonContainer">
                    <FloorButton
                        floorName="WH1"
                        floorNumber={0}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                    <FloorButton
                        floorName="WH2"
                        floorNumber={1}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                    <FloorButton
                        floorName="WH3"
                        floorNumber={2}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                    <FloorButton
                        floorName="WH4"
                        floorNumber={3}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                    <FloorButton
                        floorName="EH1"
                        floorNumber={4}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                    <FloorButton
                        floorName="EH2"
                        floorNumber={5}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                    <FloorButton
                        floorName="EH3"
                        floorNumber={6}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                    <FloorButton
                        floorName="EH4"
                        floorNumber={7}
                        currentFloor={this.props.currentFloor}
                        setFloor={this.props.setFloor}
                    />
                </div>
                <LogoutButton
                    className="menuButton"
                />
            </div>
        );
    }
});

module.exports = Menu