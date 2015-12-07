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

       
        <div> <br></br><h2><strong> CONTACT SETTINGS</strong></h2></div>
        <br></br>
        <p className= "settings"> Email </p> 
        <input className= "email" type="text" value= "sophia.seitz@students.olin.edu"></input>
		<p className= "settings">  <br></br>Phone </p>
		<div className = "phone">
		   (<input type="text" value= "555" className="phone1" maxlength="3"></input>)
		   <input type="text" value= "555" className="phone1" maxlength="3"></input>-
		   <input type="text" value= "5555" className="phone2" maxlength="4"></input>
		</div> <br></br>
   <p className= "settings"> Best way to contact </p>
    <textarea className= "contact" rows="4" cols="50"></textarea>
    <div><br></br>
         <button type="submit" className="save-button" class="button">SAVE</button>
    </div>
  
      </div>
    )
  }
});

module.exports = SettingsTab;
