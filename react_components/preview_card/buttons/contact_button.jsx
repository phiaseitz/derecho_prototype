var React = require('react');

var ContactButton = React.createClass({
  handleClick: function() {
    this.props.setContactInfoShown();
  },

  render: function() {
    return (
      <div id="contactButton"
          className="nohighlight previewButton"
          onClick={this.handleClick}
          title="Show contact info">
      </div>
    );
  }
});

module.exports = ContactButton