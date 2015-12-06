var React = require('react');

SettingsTab = React.createClass({
  render: function(){
    return (
      <div className="tab">
        <div><h2><strong> NOTIFICATION SETTINGS</strong></h2></div>
        <form action="">

        <div className = "emails">
		<input className= "box1" type="checkbox">  </input>
		<p className = "checkboxes">Email when another pin has been placed where your pin has been placed.<br></br></p> 
		</div>

		<div className = "emails">
		<input className= "box2" type="checkbox"> </input>
		<p className = "checkboxes">Email when a neighbors pin moves in or out of the hallway where your pin is placed.</p>
		</div>

		 </form>

        
        <div><h2><strong> CONTACT SETTINGS</strong></h2></div>
        <br></br>
        <p className= "settings"> Email </p> 
        <input type="text" name="firstname"></input>
		<p className= "settings"> Phone </p>
		<input type="text" name="firstname"></input>
		<p className= "settings"> Best way to contact </p>
		<input type="text" name="firstname"></input>

  
      </div>
    )
  }
});

module.exports = SettingsTab;
