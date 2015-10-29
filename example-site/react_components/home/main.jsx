var React = require('react');
var AppBar = mui.AppBar;

var Main = React.createClass({

    render: function() {
        return (
            <div className="home">
                <div className="parent">
                    <Title/>
                </div>
            </div>
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

