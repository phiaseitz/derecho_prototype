var React = require('react');
var Menu = require('./menu/menu.jsx');

var DormMap = require('./map/dormmap.jsx');

var currentUserData =  {
  username: "sseitz",
  password: "password",
  name: "Sophia Seitz",
  email: "sophia.seitz@students.olin.edu",
  roommates: [{
          name: "Tenzin Choetso",
          id: 1234,
  }],
  pin: "EH403",
  roomdrawgroup: "A",
  tags: [{test: "test"}]
};

var userData = [
  {
    username: "sseitz",
    password: "password",
    name: "Sophia Seitz",
    email: "sophia.seitz@students.olin.edu",
    roommates: [{
            name: "Tenzin Choetso",
            id: 1234,
    }],
    pin: "EH403",
    roomdrawgroup: "A",
    tags: [{test: "test"}]
  },
  {
    username: "tchoetso",
    password: "password",
    name: "Tenzin Choetso",
    email: "tenzin.choetso@students.olin.edu",
    roommates: [{
            name: "Sophia Seitz",
            id: 1234,
    }],
    pin: "EH403",
    roomdrawgroup: "A",
    tags: [{test: "test"}]
  },
  {
    username: "ihill",
    password: "password",
    name: "Ian Hill",
    email: "ian.hill@students.olin.edu",
    roommates: [{
            name: "Austin Greene",
            id: 1234,
    }],
    pin: "EH405",
    roomdrawgroup: "B",
    tags: [{test: "test"}]
  },
  {
    username: "jgreene",
    password: "password",
    name: "Austin Greene",
    email: "john.greene@students.olin.edu",
    roommates: [{
            name: "Ian Hill",
            id: 1234,
    }],
    pin: "EH405",
    roomdrawgroup: "B",
    tags: [{test: "test"}]
  },
  {
    username: "aagram",
    password: "password",
    name: "Anne Agram",
    email: "anne.agram@students.olin.edu",
    roommates: [{
            name: "Pikov Andropov",
            id: 1234,
    }],
    pin: "EH407",
    roomdrawgroup: "C",
    tags: [{test: "test"}]
  },
  {
    username: "pandropov",
    password: "password",
    name: "Pikov Andropov",
    email: "pikov.andropov@students.olin.edu",
    roommates: [{
            name: "Anne Agram",
            id: 1234,
    }],
    pin: "EH407",
    roomdrawgroup: "C",
    tags: [{test: "test"}]
  },
  {
    username: "abadman",
    password: "password",
    name: "Avery Badman",
    email: "avery.badman@students.olin.edu",
    roommates: [{
            name: "Joe King",
            id: 1234,
    }],
    pin: "EH409",
    roomdrawgroup: "D",
    tags: [{test: "test"}]
  },
  {
    username: "jking",
    password: "password",
    name: "Joe King",
    email: "joe.king@students.olin.edu",
    roommates: [{
            name: "Avery Badman",
            id: 1234,
    }],
    pin: "EH409",
    roomdrawgroup: "D",
    tags: [{test: "test"}]
  },
  {
    username: "ceshobo",
    password: "password",
    name: "Carl Eshobo",
    email: "carl.eshobo@students.olin.edu",
    roommates: [{
            name: "Sam Whicheter",
            id: 1234,
    }],
    pin: "EH413",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },
  {
    username: "swhicheter",
    password: "password",
    name: "Sam Whicheter",
    email: "sam.whicheter@students.olin.edu",
    roommates: [{
            name: "Carl Eshobo",
            id: 1234,
    }],
    pin: "EH413",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  }, 
  {
    username: "anormal",
    password: "password",
    name: "Abby Normal",
    email: "abby.normal@students.olin.edu",
    roommates: [{
            name: "Anne Publsom",
            id: 1234,
    }],
    pin: "EH413",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },
  {
    username: "apublsom",
    password: "password",
    name: "Anne Publsom",
    email: "anne.publsom@students.olin.edu",
    roommates: [{
            name: "Abby Normal",
            id: 1234,
    }],
    pin: "EH413",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  }, 
  {
    username: "anormal",
    password: "password",
    name: "Abby Normal",
    email: "abby.normal@students.olin.edu",
    roommates: [{
            name: "Anne Publsom",
            id: 1234,
    }],
    pin: "EH413",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },
  {
    username: "apublsom",
    password: "password",
    name: "Anne Publsom",
    email: "anne.publsom@students.olin.edu",
    roommates: [{
            name: "Abby Normal",
            id: 1234,
    }],
    pin: "EH413",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  }, 
  {
    username: "adetires",
    password: "password",
    name: "Aaron DeTires",
    email: "aaron.detires@students.olin.edu",
    roommates: [{
            name: "Arthur Sifartsi",
            id: 1234,
    }],
    pin: "EH415",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },
  {
    username: "pdetanc",
    password: "password",
    name: "Phillipe DeTanc",
    email: "phillipe.detanc@students.olin.edu",
    roommates: [{
            name: "Aaron DeTires",
            id: 1234,
    }],
    pin: "EH415",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  }, 
  {
    username: "jeration",
    password: "password",
    name: "Jen Eration",
    email: "jen.eration@students.olin.edu",
    roommates: [{
            name: "Faye Kinnitt",
            id: 1234,
    }],
    pin: "EH417",
    roomdrawgroup: "F",
    tags: [{test: "test"}]
  },
  {
    username: "fkinnitt",
    password: "password",
    name: "Faye Kinnitt",
    email: "faye.kinnitt@students.olin.edu",
    roommates: [{
            name: "Jen Eration",
            id: 1234,
    }],
    pin: "EH417",
    roomdrawgroup: "F",
    tags: [{test: "test"}]
  }, 
  {
    username: "asifartsi",
    password: "password",
    name: "Arthur Sifartsi",
    email: "arthur.sifartsi@students.olin.edu",
    roommates: [{
      name: "Mack Aroni",
      id: 1234,
    },
    {
      name: "Mina Mizar",
      id: 1234,
    },
    {
      name: "Mary Thon",
      id: 1234,
    },
    {
      name: "Sal Ladd",
      id: 1234,
    },
    {
      name: "Susan Vanegglestin",
      id: 1234,
    }],
    pin: "EH416",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },
  {
    username: "maroni",
    password: "password",
    name: "Mack Aroni",
    email: "mack.arnoi@students.olin.edu",
    roommates: [{
      name: "Arthur Sifartsi",
      id: 1234,
    },
    {
      name: "Mina Mizar",
      id: 1234,
    },
    {
      name: "Mary Thon",
      id: 1234,
    },
    {
      name: "Sal Ladd",
      id: 1234,
    },
    {
      name: "Susan Vanbedersen",
      id: 1234,
    }],
    pin: "EH416",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },  
  {
    username: "mmizar",
    password: "password",
    name: "Mina Mizar",
    email: "mina.mizar@students.olin.edu",
    roommates: [{
      name: "Arthur Sifartsi",
      id: 1234,
    },
    {
      name: "Mack Aroni",
      id: 1234,
    },
    {
      name: "Mary Thon",
      id: 1234,
    },
    {
      name: "Sal Ladd",
      id: 1234,
    },
    {
      name: "Susan Vanbedersen",
      id: 1234,
    }],
    pin: "EH416",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },  
  {
    username: "mthonn",
    password: "password",
    name: "Mary Thonn",
    email: "mary.thonn@students.olin.edu",
    roommates: [{
      name: "Arthur Sifartsi",
      id: 1234,
    },
    {
      name: "Mack Aroni",
      id: 1234,
    },
    {
      name: "Mina Mizar",
      id: 1234,
    },
    {
      name: "Sal Ladd",
      id: 1234,
    },
    {
      name: "Susan Vanbedersen",
      id: 1234,
    }],
    pin: "EH416",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },
  {
    username: "svanbedersen",
    password: "password",
    name: "Susan Vanbedersen",
    email: "susan.vanbedersen@students.olin.edu",
    roommates: [{
      name: "Arthur Sifartsi",
      id: 1234,
    },
    {
      name: "Mack Aroni",
      id: 1234,
    },
    {
      name: "Mina Mizar",
      id: 1234,
    },
    {
      name: "Mary Thon",
      id: 1234,
    },
    {
      name: "Sal Ladd",
      id: 1234,
    }],
    pin: "EH416",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  },
  {
    username: "sladd",
    password: "password",
    name: "Sal Ladd",
    email: "sal.ladd@students.olin.edu",
    roommates: [{
      name: "Arthur Sifartsi",
      id: 1234,
    },
    {
      name: "Mack Aroni",
      id: 1234,
    },
    {
      name: "Mina Mizar",
      id: 1234,
    },
    {
      name: "Mary Thon",
      id: 1234,
    },
    {
      name: "Susan Vanbedersen",
      id: 1234,
    }],
    pin: "EH416",
    roomdrawgroup: "E",
    tags: [{test: "test"}]
  }

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
                    <div className="app">
                        <DormMap 
                            width={600} 
                            height={600} 
                            // Update this to be west hall when we have that map working
                            dorm = {this.state.currentFloor >= 4? "EH" : "EH"}
                            floor = {(this.state.currentFloor % 4) + 1} 
                            margin = {100}
                            userData = {userData}
                            currentUserData = {currentUserData}
                            />
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

