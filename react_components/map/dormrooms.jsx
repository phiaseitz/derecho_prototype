// map.jsx
var _ = require('underscore');
var React = require('react');

var Room = require('./room.jsx');


var DormRooms = React.createClass({
  getDefaultProps: function() {
    return {
      dorm: "EH",
      floor: "1",
      scaling: 1,
      margin: 100
    }
  },

  render: function() {
    var props = this.props;
    var eastfloordata = [
      { dorm: "EH", 
        room: "06", 
        type: "suite", 
        pathpoints: [{x :270, y: 0}, {x: 270, y: 480}, {x: 400, y: 480}, {x: 400, y:0}, {x: 270, y:0}], 
        labelx: 335, 
        labely: 240},
      { dorm: "EH", 
        room: "03", 
        type: "double", 
        pathpoints: [{x :20, y: 100}, {x: 20, y: 180}, {x: 150, y: 180}, {x: 150, y:100}, {x :20, y: 100}], 
        labelx: 85, 
        labely: 150},
      { dorm: "EH", 
        room: "05", 
        type: "double", 
        pathpoints: [{x :20, y: 180}, {x: 20, y: 260}, {x: 150, y: 260}, {x: 150, y:180}, {x :20, y: 180}], 
        labelx: 85, 
        labely: 230},
      { dorm: "EH", 
        room: "07", 
        type: "double", 
        pathpoints: [{x :20, y: 260}, {x: 20, y: 340}, {x: 150, y: 340}, {x: 150, y:260}, {x :20, y: 260}], 
        labelx: 85, 
        labely: 310},
      { dorm: "EH", 
        room: "09", 
        type: "double",  
        pathpoints: [{x :20, y: 340}, {x: 20, y: 400},  {x: 0, y: 400}, {x: 0, y: 450}, {x: 50 , y: 450}, {x: 50 , y: 430}, {x: 75 , y: 430}, {x: 150, y:430}, {x: 150, y: 340}, {x: 20, y:340}], 
        labelx: 85, 
        labely: 395},
      { dorm: "EH", 
        room: "16", 
        type: "suite", 
        pathpoints: [{x :250, y: 670}, {x :250, y: 800}, {x :270, y: 800}, {x: 270, y: 1090}, {x: 400, y: 1090}, {x: 400, y:800}, {x: 380, y:800}, {x: 380, y:670}, {x: 250, y:670}], 
        labelx: 335, 
        labely: 880},
      { dorm: "EH", 
        room: "13", 
        type: "double", 
        pathpoints: [{x :20, y: 660}, {x: 20, y: 740}, {x: 150, y: 740}, {x: 150, y:660}, {x :20, y: 660}], 
        labelx: 85, 
        labely: 710},
      { dorm: "EH", 
        room: "15", 
        type: "double", 
        pathpoints: [{x :20, y: 740}, {x: 20, y: 820}, {x: 150, y: 820}, {x: 150, y:740}, {x :20, y: 740}], 
        labelx: 85, 
        labely: 790},
      { dorm: "EH", 
        room: "17", 
        type: "double", 
        pathpoints: [{x :20, y: 820}, {x: 20, y: 900}, {x: 150, y: 900}, {x: 150, y:820}, {x :20, y: 820}],
        labelx: 85, 
        labely: 870},
      { dorm: "EH", 
        room: "19", 
        type: "double", 
        pathpoints: [{x :20, y: 900}, {x: 20, y: 960},  {x: 0, y: 960}, {x: 0, y: 1010}, {x: 50 , y: 1010}, {x: 50 , y: 990}, {x: 150 , y: 990}, {x: 150, y:900}, {x: 20, y: 900}], 
        labelx: 85, 
        labely: 955},
      { dorm: "EH", 
        room: "28", 
        type: "suite", 
        pathpoints: [{x: 940 , y: 457}, {x: 985 , y: 577}, {x: 1085 , y: 540}, {x: 1055 , y: 450}, {x: 1145 , y: 420}, {x: 1065 , y: 200}, {x: 870 , y: 253}, {x: 910 , y: 380}, {x: 968 , y: 360}, {x: 995 , y: 437}, {x: 940 , y: 457}], 
        labelx: 1050, 
        labely: 350},
      { dorm: "EH", 
        room: "29", 
        type: "suite", 
        pathpoints: [{x: 540 , y: 385}, {x: 640 , y: 350}, {x: 640 , y: 350}, {x: 630 , y: 320},{x: 870 , y: 253}, {x: 910 , y: 380}, {x: 695 , y: 450}, {x: 700 , y: 470}, {x: 580 , y: 510},{x: 540 , y: 385}], 
        labelx: 730, 
        labely: 370},
      { dorm: "EH", 
        room: "26", 
        type: "suite", 
        pathpoints: [{x: 610 , y: 587}, {x :655, y: 723}, {x: 785 , y: 675}, {x: 780 , y: 655}, {x: 985 , y: 577}, {x: 940 , y: 457}, {x: 725 , y: 530}, {x: 730 , y: 550}, {x: 610 , y: 587}], 
        labelx: 800, 
        labely: 597},
      { dorm: "EH", 
        room: "22", 
        type: "double", 
        pathpoints: [{x: 541 , y: 610}, {x :585, y: 750}, {x :655, y: 723}, {x: 610, y: 587}, {x: 541 , y: 610}], 
        labelx: 595, 
        labely: 670}];

    //These are for coloring -- don't want to have to do them over again
    var negscale = d3.scale.linear()
      .domain([0,0.5])
      .range([props.disagreeColor,props.middleColor]);
    var posscale = d3.scale.linear()
      .domain([0.5,1])
      .range([props.middleColor, props.agreeColor]);

    var currentUserTags = props.currentUserPinData.tags;

    var userPins = [];

    var rooms = _.map(eastfloordata, function(room, i) {
      var roomcolor = "#FFFFFF";
      // This will need to change when we actually have different
      // people living on every floor
      //The current user is living on this floor.
      if ((props.floor + room.room) === props.currentUserPinData.room.toString()){
        //The color for the room the user has selected
        var roomcolor = "#FFDB4D";
        userPins = [props.currentUserPinData];
      }
      else {
        //Get the pin data for this room.
        userPins = props.pinData.filter(function(pin) {
          return (pin.room.toString().substring(1,3) === room.room); 
        });
        //Here we do the heatmapping
        if (userPins.length > 0){
          var differences = []
          Object.keys(currentUserTags).forEach(function(tag){
            if (tag in userPins[0].tags){
              differences.push(Math.abs(currentUserTags[tag] - userPins[0].tags[tag]))
            }
          })
          var sumdiffs = differences.reduce(function(pv, cv) { return pv + cv; }, 0);
          //Get the average difference on categories rated by the user
          var averagediffs = sumdiffs/(differences.length);
          //Scale so it's between 0 and 1, and 1 is fully agree
          var score = 1 - averagediffs/4;
          var roomcolor = "#FFFFFF";
          //We disagree
          if (score < 0.5){
            roomcolor = negscale(score);
          //We agree
          } else {
            roomcolor = posscale(score);
          }
        //Just add a blank pin object ot userPins so that nothing breaks. 
        } else {
          var blankPin = {
            group: "",
            occupants: [],
            hall: 1,
            room: props.floor + room.room,
            tags: {}
          };
          userPins.push(blankPin);
        }
      }
      
      return (
        <Room 
          key = {room.dorm + props.floor + room.room} 
          floor = {props.floor} 
          margin = {props.margin} 
          scaling = {props.scaling} 
          roominfo = {room} 
          color = {roomcolor}
          roomPinData = {userPins}
          setPreviewPin = {props.setPreviewPin}
          setPreview = {props.setPreview}/>
      )
    });

    return (
      <g>{rooms}</g>
    );
  },
});

module.exports = DormRooms;