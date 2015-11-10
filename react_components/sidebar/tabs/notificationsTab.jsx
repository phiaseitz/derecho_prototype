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
        <div className="messageSubject"><strong>{this.props.message.subject}</strong></div>
        <div className="messageFrom"><strong>From: </strong>{this.props.message.from}</div>
        <div className="messageTo"><strong> To:</strong> {this.props.message.to.join(", ")} </div>
        <div className="messageBody"> {this.props.message.body} </div>
      </div>
    )
  }
})

NotificationsTab = React.createClass({
  render: function(){
    return (
      <div className="tab">
        <MessageList
          messages={this.props.messages}
        />
      </div>
    )
  }
});
module.exports = NotificationsTab;
