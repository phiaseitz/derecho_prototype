var React = require('react');

MessageList = React.createClass({
  render: function() {
    var messageNodes = this.props.messages.map(function (message) {
      return (<MessageCard
        message={message}
      />)
    }.bind(this));
    return (
      <div className="messageList">
        {messageNodes}
      </div>
    );
  }

})

MessageCard = React.createClass({
  render: function () {
    return (
      <div className="message">
        <div className="messageSubjectright">{this.props.message.subjectright}</div>
        <div className="messageSubjectleft">{this.props.message.subjectleft}</div>
        <br></br>
        <hr></hr>
        <div className="messageBody"> {this.props.message.body} </div>
         <br></br>
      </div>
     
    )
  }
})

NotificationsTab = React.createClass({
  render: function(){
    return (
      <div className="tab">
        <div><h2><strong> NOTIFICATIONS</strong></h2></div>
        <br></br>
        <MessageList
          messages={this.props.messages}
        />        
      </div>
    )
  }
});
module.exports = NotificationsTab;
