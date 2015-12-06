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
        room: "09", 
        type: "double", 
        pathpoints: [{x :20, y: 100}, {x: 20, y: 180}, {x: 150, y: 180}, {x: 150, y:100}, {x :20, y: 100}], 
        labelx: 85, 
        labely: 150},
      { dorm: "EH", 
        room: "07", 
        type: "double", 
        pathpoints: [{x :20, y: 180}, {x: 20, y: 260}, {x: 150, y: 260}, {x: 150, y:180}, {x :20, y: 180}], 
        labelx: 85, 
        labely: 230},
      { dorm: "EH", 
        room: "05", 
        type: "double", 
        pathpoints: [{x :20, y: 260}, {x: 20, y: 340}, {x: 150, y: 340}, {x: 150, y:260}, {x :20, y: 260}], 
        labelx: 85, 
        labely: 310},
      { dorm: "EH", 
        room: "03", 
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

    var westfloordata = [
      { dorm: "WH", 
        room: "07", 
        type: "double", 
        pathpoints: [{x :20, y: 0}, {x: 20, y: 80}, {x: 150, y: 80}, {x: 150, y:0}, {x :20, y: 0}], 
        labelx: 85, 
        labely: 50},
      { dorm: "WH", 
        room: "05", 
        type: "double", 
        pathpoints: [{x :20, y: 80}, {x: 20, y: 160}, {x: 150, y: 160}, {x: 150, y:80}, {x :20, y: 80}], 
        labelx: 85, 
        labely: 130},
      { dorm: "WH", 
        room: "03", 
        type: "double", 
        pathpoints: [{x :20, y: 160}, {x: 20, y: 240}, {x: 150, y: 240}, {x: 150, y:160}, {x :20, y: 160}], 
        labelx: 85, 
        labely: 210},
      { dorm: "WH", 
        room: "01", 
        type: "double",  
        pathpoints: [{x :20, y: 240}, {x: 20, y: 300},  {x: 0, y: 300}, {x: 0, y: 350}, {x: 50 , y: 350}, {x: 50 , y: 330}, {x: 75 , y: 330}, {x: 150, y:330}, {x: 150, y: 240}, {x: 20, y:240}], 
        labelx: 85, 
        labely: 295},
      { dorm: "WH", 
        room: "06", 
        type: "double", 
        pathpoints: [{x :220, y: 80}, {x: 220, y: 160}, {x: 350, y: 160}, {x: 350, y:80}, {x :220, y: 80}], 
        labelx: 285, 
        labely: 130},
      { dorm: "WH", 
        room: "04", 
        type: "double", 
        pathpoints: [{x :220, y: 160}, {x: 220, y: 240}, {x: 350, y: 240}, {x: 350, y:160}, {x :220, y: 160}], 
        labelx: 285, 
        labely: 210},
      { dorm: "WH", 
        room: "02", 
        type: "double",  
        pathpoints: [{x :220, y: 240}, {x: 220, y: 330},  {x: 350, y:330}, {x: 350, y: 240}, {x: 220, y:240}], 
        labelx: 285, 
        labely: 295},
      { dorm: "WH", 
        room: "09", 
        type: "double", 
        pathpoints: [{x :20, y: 610}, {x: 20, y: 690}, {x: 150, y: 690}, {x: 150, y:610}, {x :20, y: 610}], 
        labelx: 85, 
        labely: 660},
      { dorm: "WH", 
        room: "11", 
        type: "double", 
        pathpoints: [{x :20, y: 690}, {x: 20, y: 770}, {x: 150, y: 770}, {x: 150, y:690}, {x :20, y: 690}], 
        labelx: 85, 
        labely: 740},
      { dorm: "WH", 
        room: "13", 
        type: "double", 
        pathpoints: [{x :20, y: 770}, {x: 20, y: 850}, {x: 150, y: 850}, {x: 150, y:770}, {x :20, y: 770}],
        labelx: 85, 
        labely: 820},
      { dorm: "WH", 
        room: "15", 
        type: "double", 
        pathpoints: [{x :20, y: 850}, {x: 20, y: 910},  {x: 0, y: 910}, {x: 0, y: 960}, {x: 50 , y: 960}, {x: 50 , y: 940}, {x: 150 , y: 940}, {x: 150, y:850}, {x: 20, y: 850}], 
        labelx: 85, 
        labely: 905},
      { dorm: "WH", 
        room: "10", 
        type: "double", 
        pathpoints: [{x :250, y: 550}, {x: 250, y: 690}, {x: 350, y: 690}, {x: 350, y:550}, {x :250, y: 550}], 
        labelx: 300, 
        labely: 630},
      { dorm: "WH", 
        room: "12", 
        type: "double", 
        pathpoints: [{x :220, y: 690}, {x: 220, y: 770}, {x: 350, y: 770}, {x: 350, y:690}, {x :220, y: 690}], 
        labelx: 285, 
        labely: 740},
      { dorm: "WH", 
        room: "14", 
        type: "double", 
        pathpoints: [{x :220, y: 770}, {x: 220, y: 850}, {x: 350, y: 850}, {x: 350, y:770}, {x :220, y: 770}],
        labelx: 285, 
        labely: 820},
      { dorm: "WH", 
        room: "31", 
        type: "double", 
        pathpoints: [{x: 866 , y: 198}, {x: 945 , y: 160}, {x: 1014 , y: 280}, {x: 935 , y: 318}, {x: 866 , y: 198}],
        labelx: 940, 
        labely: 240},
      { dorm: "WH", 
        room: "29", 
        type: "double", 
        pathpoints: [{x: 787 , y: 236}, {x: 866 , y: 198}, {x: 935 , y: 318}, {x: 856 , y: 356}, {x: 787 , y: 236}],
        labelx: 860, 
        labely: 280},
      { dorm: "WH", 
        room: "27", 
        type: "double", 
        pathpoints: [{x: 708 , y: 274}, {x: 787 , y: 236}, {x: 856 , y: 356}, {x: 777 , y: 394}, {x: 708 , y: 274}],
        labelx: 780, 
        labely: 320},
      { dorm: "WH", 
        room: "25", 
        type: "double", 
        pathpoints: [{x: 629 , y: 312}, {x: 708 , y: 274}, {x: 777 , y: 394}, {x: 698 , y: 432}, {x: 629 , y: 312}],
        labelx: 700, 
        labely: 360},
      { dorm: "WH", 
        room: "23", 
        type: "double", 
        pathpoints: [{x: 550 , y: 350}, {x: 629 , y: 312}, {x: 698 , y: 432}, {x: 619 , y: 470}, {x: 550 , y: 350}],
        labelx: 620, 
        labely: 400},
      { dorm: "WH", 
        room: "30", 
        type: "double", 
        pathpoints: [{x: 887 , y: 403}, {x: 948 , y: 518}, {x: 1024 , y: 474}, {x: 963 , y: 359}, {x: 887 , y: 403}],
        labelx: 960, 
        labely: 450},
      { dorm: "WH", 
        room: "28", 
        type: "double", 
        pathpoints: [{x: 811 , y: 447}, {x: 872 , y: 562}, {x: 948 , y: 518}, {x: 887 , y: 403}, {x: 811 , y: 447}],
        labelx: 880, 
        labely: 495},
      { dorm: "WH", 
        room: "26", 
        type: "double", 
        pathpoints: [{x: 735 , y: 491}, {x: 796 , y: 606}, {x: 872 , y: 562}, {x: 811 , y: 447}, {x: 735 , y: 491}],
        labelx: 800, 
        labely: 530},
      { dorm: "WH", 
        room: "24", 
        type: "double", 
        pathpoints: [{x: 659 , y: 535}, {x: 720 , y: 650}, {x: 796 , y: 606}, {x: 735 , y: 491}, {x: 659 , y: 535}],
        labelx: 725, 
        labely: 575},
      { dorm: "WH", 
        room: "20", 
        type: "double", 
        pathpoints: [{x: 533 , y: 552.5}, {x: 555 , y: 682.5}, {x: 650 , y: 670}, {x: 628 , y: 540}, {x: 533 , y: 552.5}],
        labelx: 590, 
        labely: 620},
      { dorm: "WH", 
        room: "18", 
        type: "double", 
        pathpoints: [{x: 440 , y: 565}, {x: 460 , y: 695}, {x: 555 , y: 682.5}, {x: 533 , y: 552.5}, {x: 440 , y: 565}],
        labelx: 500, 
        labely: 630},
      ];

    //These are for coloring -- don't want to have to do them over again
    var negscale = d3.scale.linear()
      .domain([0,0.5])
      .range([props.disagreeColor,props.middleColor]);
    var posscale = d3.scale.linear()
      .domain([0.5,1])
      .range([props.middleColor, props.agreeColor]);

    var currentUserTags = props.currentUserPinData.tags;

    var userPins = [];

    var currentdormdata = props.dorm === 'EH' ? eastfloordata : westfloordata;

    var rooms = _.map(currentdormdata, function(room, i) {
      var roomcolor = "#FFFFFF";
      // people living on every floor
      //The current user is living on this floor in this dorm.
      var userDorm = props.currentUserPinData.hall === 1 ? "EH" : "WH";
      // console.log()
      
      //Get the pin data for this room.
      userPins = props.pinData.filter(function(pin) {
        var pinDorm = pin.hall === 1 ? "EH" : "WH";
        return ((pinDorm + pin.room.toString()) === (props.dorm + props.floor + room.room)); 
      });
      if ((props.dorm + props.floor + room.room) === (userDorm + props.currentUserPinData.room.toString())){
        //The color for the room the user has selected
        var roomcolor = "#FFDB4D";
        //Also add the pins!
        userPins.push(props.currentUserPinData);
      }
      else {
        //Here we do the heatmapping
        if (userPins.length > 0){
          var differences = []
          //loop through all the users tags.
          currentUserTags.forEach(function(tag){
            //get the matching tag or another user. 
            matchingTags = userPins[0].tags.filter(function(otherUserTag){
              return otherUserTag.label === tag.label;
            });
            if (matchingTags.length > 0){
              differences.push(Math.abs(tag.value - matchingTags[0].value));
            }
          })
          ///This is a hack-y way to set 0 tags in common (two users have rated completely seperate
          /// tags) as getting a neutral score.
          if (differences.length === 0){
            differences.push(2);
          }
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
          setPreview = {props.setPreview}
          />
      )
    });

    return (
      <g>{rooms}</g>
    );
  },
});

module.exports = DormRooms;