var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var Colors = mui.Styles.Colors;
var ThemeManager = new mui.Styles.ThemeManager();

var palette = {
    primary1Color: Colors.deepOrange900,
    primary2Color: Colors.deepOrange700,
    primary3Color: Colors.deepOrange100,
    accent1Color: Colors.brown200,
    accent2Color: Colors.brown400,
    accent3Color: Colors.brown100,
    textColor: Colors.darkBlack,
    canvasColor: Colors.white,
    borderColor: Colors.darkBlack,
};

var Main = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object

    },


    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    getInitialState: function() {
        return {
            projects: [],
            selectedProject: {links:[]}
        }
    },

    componentWillMount() {
        ThemeManager.setPalette(palette)
        ThemeManager.setComponentThemes({
            appBar: {
                textColor: Colors.grey100,
                color: Colors.grey900,
            }
        });
    },

    componentDidMount: function() {
        $.get('/projects/')
        .done(function(data){
            console.log(data);
            if(this.isMounted()){
                this.setState({
                    projects: data.projects,
                    selectedProject: data.projects[0]
                });
            }
        }.bind(this))
        .error(function (data, status){
            console.log(status);
            console.log(data);
        })
    },

    onForwardClick: function (){
        console.log("Going Forwards");
        window.location.href = '/gallery';
    },

    onBackwardClick: function (){
        console.log("Going Backwards");
        window.location.href = '/resume.pdf';
    },

    render: function() {
        console.log("Main Rendering, state:", this.state)
        appBarStyle = {
            margin: '0',
            fontFamily: 'Playfair Display, serif',
        }
        return (
            <div className="home">
                <AppBar
                    title="Example Site"
                    style={appBarStyle}
                    onLeftIconButtonTouchTap={this.onBackwardClick}
                    onRightIconButtonTouchTap={this.onForwardClick}
                />
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

