// dormoutline.jsx
var React = require('react');

var DormOutline = React.createClass({
  getDefaultProps: function() {
    return {
      scaling: 1,
      margin: 100
    }
  },

  render: function() {
    var props = this.props;
    var eastOutlineData = [
      //South Wall
      {x: 20, y: 100},
      {x: 20, y: 400},
      //The awkward corner in the West Hallway
      {x: 0, y: 400},
      {x: 0, y: 450},
      {x: 50 , y: 450},
      {x: 50 , y: 430},
      {x: 75 , y: 430},
      //The stuff by the stairs
      {x: 75 , y: 480},
      {x: 100 , y: 490},
      {x: 75 , y: 600},
      {x: 60 , y: 595},
      {x: 45 , y: 660},
      //The East Hallway
      {x: 20 , y: 660},
      {x: 20 , y: 960},
      //The awkward corner in the East Hallway
      {x: 0, y: 960},
      {x: 0, y: 1010},
      {x: 50 , y: 1010},
      {x: 50 , y: 990},
      {x: 100 , y: 990},
      //The East hallway continues
      {x: 100 , y: 1090},
      {x: 400 , y: 1090},
      {x: 400 , y: 800},
      {x: 380 , y: 800},
      {x: 380 , y: 670},
      {x: 560 , y: 670},
      //The North Hallway
      {x: 585 , y: 750},
      {x: 785 , y: 675},
      {x: 780 , y: 655},
      {x: 1085 , y: 540},
      {x: 1055 , y: 450},
      {x: 1145 , y: 420},
      {x: 1065 , y: 200},
      {x: 630 , y: 320},
      {x: 640 , y: 350},
      {x: 640 , y: 350},
      {x: 440 , y: 420},
      {x: 470 , y: 480},
      {x: 400 , y: 480},
      //The North wall of the West Hallway
      {x: 400 , y: 0},
      {x: 120, y: 0},
      {x: 120, y: 0},
      {x: 120, y: 100},
      {x: 20, y: 100},
    ];

    var westOutlineData = [
      //South Wall
      {x: 20, y: 0},
      {x: 20, y: 300},
      //The awkward corner in the West Hallway
      {x: 0, y: 300},
      {x: 0, y: 350},
      {x: 50 , y: 350},
      {x: 50 , y: 330},
      {x: 75 , y: 330},
      //The stuff by the stairs
      {x: 130 , y: 575},
      {x: 100 , y: 590},
      {x: 110 , y: 610},
      //The East Hallway
      {x: 20 , y: 610},
      {x: 20 , y: 910},
      //The awkward corner in the East Hallway
      {x: 0, y: 910},
      {x: 0, y: 960},
      {x: 50 , y: 960},
      {x: 50 , y: 940},
      {x: 350 , y: 940},
      //The East hallway continues
      {x: 350 , y: 640},
      {x: 450 , y: 630},
      //The North Hallway
      {x: 460 , y: 695},
      {x: 650 , y: 670},
      {x: 640 , y: 605},
      {x: 690 , y: 595},
      {x: 720 , y: 650},
      {x: 1100 , y: 430},
      {x: 945 , y: 160},
      {x: 550 , y: 350},
      {x: 480 , y: 355},
      {x: 350 , y: 300},
      //The North wall of the West Hallway
      {x: 350 , y: 0},
      {x: 20, y: 0}
    ];

    dormOutlineData = props.dorm === 'EH' ? eastOutlineData : westOutlineData;

    var lineFunction = d3.svg.line()
      .x(function(d) {return props.margin + props.scaling*d.x;})
      .y(function(d) {return props.margin + props.scaling*d.y;})
      .interpolate("linear");

    return (
      <path d = {lineFunction(dormOutlineData)} stroke={"black"} strokeWidth={2} fill="none"/>
    );
  }
});

module.exports = DormOutline;