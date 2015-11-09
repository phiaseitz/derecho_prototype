var React = require('react');
var Menu = require('./menu/menu.jsx');
var PreviewCard = require('./preview_card/preview_card.jsx')
var DormMap = require('./map/dormmap.jsx');

var currentUserPinData =  {
  group: "A",
  occupants: [
    {
      firstName: "Sophia",
      lastName: "Seitz",
      contactMethods: ["Email", "Text"],
      contactValues: [
          "sophia.seitz@students.olin.edu",
          "555-555-5555"
      ]
    },
    {
      firstName: "Tenzin",
      lastName: "Choetso",
      contactMethods: ["Email", "Text"],
      contactValues: [
          "tenzin.choetso@students.olin.edu",
          "555-555-5556"
      ]
    }
  ],
  hall: 1,
  room: 403,
  tags: {party: 1,
    loud: 1,
    study: 5,
    movies: 5}
};

var PinData = [
  {
    group: "B",
    occupants: [
      {
        firstName: "Ian",
        lastName: "Hill",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "ian.hill@students.olin.edu",
            "555-555-5555"
        ]
      },
      {
        firstName: "Austin",
        lastName: "Greene",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "john.greene@students.olin.edu",
            "555-555-5556"
        ]
      }   
    ],
    hall: 1,
    room: 405,
    tags: {party: 5,
      loud: 5,
      study: 1,
      movies: 1}
  },
  {
    group: "C",
    occupants: [
      {
        firstName: "Anne",
        lastName: "Agram",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "anne.agram@students.olin.edu",
            "555-555-5555"
        ]
      },
      {
        firstName: "Pikov",
        lastName: "Andropov",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "pikov.andropv@students.olin.edu",
            "555-555-5556"
        ]
      }   
    ],
    hall: 1,
    room: 407,
    tags: {party: 5,
      loud: 4,
      study: 3,
      movies: 2}
  },
  {
    group: "D",
    occupants: [
      {
        firstName: "Avery",
        lastName: "Badman",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "avery.badman@students.olin.edu",
            "555-555-5555"
        ]
      },
      {
        firstName: "Joe",
        lastName: "King",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "joeseph.king@students.olin.edu",
            "555-555-5556"
        ]
      }   
    ],
    hall: 1,
    room: 409,
    tags: {party: 1,
      loud: 1,
      study: 1,
      movies: 1}
  },
  {
    group: "E",
    occupants: [
      {
        firstName: "Carl",
        lastName: "Eshobo",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "carlos.eshobo@students.olin.edu",
            "555-555-5555"
        ]
      },
      {
        firstName: "Sam",
        lastName: "Whicheter",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "samuel.whicheter@students.olin.edu",
            "555-555-5556"
        ]
      }   
    ],
    hall: 1,
    room: 413,
    tags: {party: 1,
      loud: 1,
      study: 1}
  },
  {
    group: "F",
    occupants: [
      {
        firstName: "Aaron",
        lastName: "DeTires",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "aaron.detires@students.olin.edu",
            "555-555-5555"
        ]
      },
      {
        firstName: "Phillipe",
        lastName: "DeTanc",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "phillipe.detanc@students.olin.edu",
            "555-555-5556"
        ]
      }   
    ],
    hall: 1,
    room: 415,
    tags: {party: 3,
      loud: 3,
      study: 3,
      movies: 3}
  }, 
  {
    group: "G",
    occupants: [
      {
        firstName: "Jen",
        lastName: "Eration",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "jennifer.eration@students.olin.edu",
            "555-555-5555"
        ]
      },
      {
        firstName: "Faye",
        lastName: "Kinnitt",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "phillipe.detanc@students.olin.edu",
            "555-555-5556"
        ]
      }   
    ],
    hall: 1,
    room: 417,
    tags: {party: 4,
      loud: 4,
      study: 4,
      movies: 4}
  },
  {
    group: "G",
    occupants: [
      {
        firstName: "Abby",
        lastName: "Normal",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "abigail.normal@students.olin.edu",
            "555-555-5555"
        ]
      },
      {
        firstName: "Anne",
        lastName: "Publsom",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "anne.publsom@students.olin.edu",
            "555-555-5556"
        ]
      }   
    ],
    hall: 1,
    room: 419,
    tags: {party: 1,
      loud: 1,
      study: 1,
      movies: 1,
      food: 5}
  }, 
  {
    group: "H",
    occupants: [
      {
        firstName: "Arthur",
        lastName: "Sifartsi",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "arthur.sifartsi@students.olin.edu",
            "555-555-5554"
        ]
      },
      {
        firstName: "Mack",
        lastName: "Aroni",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "mack.aroni@students.olin.edu",
            "555-555-5554"
        ]
      },
      {
        firstName: "Mina",
        lastName: "Mizar",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "mina.mizar@students.olin.edu",
            "555-555-5556"
        ]
      },
      {
        firstName: "Mary",
        lastName: "Thonn",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "mary.thonn@students.olin.edu",
            "555-555-5557"
        ]
      },
      {
        firstName: "Sal",
        lastName: "Ladd",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "sal.ladd@students.olin.edu",
            "555-555-5558"
        ]
      },
      {
        firstName: "Susan",
        lastName: "Vanegglestin",
        contactMethods: ["Email", "Text"],
        contactValues: [
            "susan.Vanegglestin@students.olin.edu",
            "555-555-5559"
        ]
      }   
    ],
    hall: 1,
    room: 416,
    tags: {party: 5,
      loud: 5,
      study: 5,
      movies: 5}
  }
];  

var Main = React.createClass({

    getInitialState: function() {
        return {
            currentFloor: 7,
            userPin: currentUserPinData,
            previewPin: currentUserPinData,
            isComparing: false
        }
    },

    setFloor: function(floor) {
        console.log('A')
        this.setState({
          currentFloor: floor
        });
    },

    setPreviewPin: function(pin){
      console.log('Preview Pin Set')
      this.setState({
        previewPin: pin
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

    setPin: function(pin) {
        console.log('Preview Pin Set');
        console.log("pin");
        this.setState({
          userPin: pin,
          previewPin: pin
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
                  <DormMap 
                      width={600} 
                      height={600} 
                      // Update this to be west hall when we have that map working
                      dorm = {this.state.currentFloor >= 4? "EH" : "EH"}
                      floor = {(this.state.currentFloor % 4) + 1} 
                      margin = {100}
                      pinData = {PinData}
                      currentUserPinData = {this.state.userPin}
                      setPreviewPin = {this.setPreviewPin}
                  />
                </div>
                <PreviewCard
                    previewPin={this.state.previewPin}
                    setCompare={this.setCompare}
                    isComparing={this.isComparing}
                    setPin={this.setPin}
                    userPin = {this.state.userPin}
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