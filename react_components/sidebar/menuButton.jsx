var React = require('react');

MenuButton = React.createClass({
    handleClick: function() {
        this.props.onMenuClick(
            this.props.name
        );
    },

    render: function(){
        var buttonClass = "nohighlight tabButton";
        if (this.props.name == this.props.selectedTab) {
            buttonClass = buttonClass + " menuButtonSelected";
        }

        return (
            <div className={buttonClass} onClick={this.handleClick}>
                <span className="menuButtonText">
                    {this.props.name}
                </span>
            </div>
        )
    }
});

module.exports = MenuButton;
