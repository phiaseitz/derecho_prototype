var React = require('react');
var Select = require('react-select');
var ReactSlider = require('react-slider');

TagsList = React.createClass({
  onTagSlide: function(tagLabel, tagValue){
    updatedPin = this.props.pin;
    updatedPin.tags.forEach(function(pinTag, index){
      if (pinTag.label === tagLabel){
        updatedPin.tags[index].value = tagValue;
        this.props.onPinUpdate(updatedPin);
      }
    }, this);
  },

  onTagRemove: function(tagLabel){
    updatedPin = this.props.pin;
    updatedPin.tags.forEach(function(pinTag, index){
      if (pinTag.label === tagLabel){
        delete updatedPin.tags[index]
        this.props.onPinUpdate(updatedPin);
      }
    }, this);
  },

  render: function() {
    var tagNodes = this.props.pin.tags.map(function(tag){
      var comparing = this.props.comparing;
      if(comparing){
        console.log(comparing)
        comparing.tags.forEach(function (testTag){
          if(testTag.label === tag.label){
            comparing = testTag;
          }
        }, this);
      }
      return (<TagCard
        tag={tag}
        comparing={comparing}
        onTagSlide={this.onTagSlide}
        onTagRemove={this.onTagRemove}
        key={tag.label}
      />)
    }.bind(this));
    return (
      <div className="tags-list">
        <h2 className="tagsListLabel"><strong>Tags</strong></h2>
        <div className="tagScale">
          <svg id="tagLabelSVG" width="100" height="30">
            <line x1 ={"6%"} x2 ={"6%"} y1 = {"50%"} y2 = {"100%"} stroke = "black" strokeWidth = {2}/>
            <line x1 ={"27.5%"} x2 ={"27.5%"} y1 = {"75%"} y2 = {"100%"} stroke = "black" strokeWidth = {1}/>
            <line x1 ={"50%"} x2 ={"50%"} y1 = {"85%"} y2 = {"100%"} stroke = "black" strokeWidth = {1}/>
            <line x1 ={"72.5%"} x2 ={"72.5%"} y1 = {"75%"} y2 = {"100%"} stroke = "black" strokeWidth = {1}/>
            <line x1 ={"94%"} x2 ={"94%"} y1 = {"50%"} y2 = {"100%"} stroke = "black" strokeWidth = {2}/>
            <text x = {"5%"} y = {10}>{"Must Avoid"}</text>
            <text x = {"95%"} y = {10} textAnchor="end">{"Must Have"}</text>
          </svg>
        </div>
        {tagNodes}
      </div>
    );
  }
})

TagCard = React.createClass({
  handleSlide: function(value){
    this.props.onTagSlide(this.props.tag.label, value);
  },

  handleRemove: function(){
    console.log("removed!");
    this.props.onTagRemove(this.props.tag.label);
  },

  render: function () {
    if(this.props.comparing){
      var comparisonSlider =
        <ReactSlider
          className="comparisonSlider"
          min={0}
          max={4}
          step={1}
          value={parseFloat(this.props.comparing.value)}
          disabled={true}
          handleClassName="staticHandle"
        />
    } else{
      var comparisonSlider = null;
      value = parseFloat(this.props.tag.value);
    }
    return (
      <div className="tag">
        <div className="tagText"> {this.props.tag.label} </div>
        <ReactSlider
          className="tagSlider"
          min={0}
          max={4}
          step={1}
          defaultValue={parseFloat(this.props.tag.value)}
          onChange={this.handleSlide}
          handleClassName="moveableHandle"
          withBars
        />
        {comparisonSlider}
        <div className="tagRemoveBtn"
          onClick={this.handleRemove}
        >
          <i className="material-icons">cancel</i>
        </div>
      </div>
    )
  }
})

PinTab = React.createClass({
  onUserTagAdd: function(values, newTag){
    newTag = newTag[0];
    updatedPin = this.props.pin;
    updatedPin.tags.push({label:newTag.label, value:2});
    this.props.onPinUpdate(updatedPin);

    //Update User with new Tags
    tagLabels = this.props.tags.map(function(tag){
      return tag.label
    },this);

    //Add Tag to Master List if New
    if (tagLabels.indexOf(newTag.label) === -1){
      this.props.onTagAdd({label:newTag.label, value:Math.random()})
    }
  },

  render: function(){
    tagOptions = []
    pinTagLabels = this.props.pin.tags.map(function(tag){
      return tag.label
    },this);

    //Add Tag to Master List if New
    this.props.tags.forEach(function(tag){
      if (pinTagLabels.indexOf(tag.label) === -1){
        tagOptions.push(tag)
      }
    });

    var hall = this.props.pin.hall ? "EH" : "WH";
    return (
      <div className="tab">
        <h2><strong> Name: </strong></h2>
        <h4> {this.props.pin.occupants[0].firstName} {this.props.pin.occupants[0].lastName} &  {this.props.pin.occupants[1].firstName} {this.props.pin.occupants[1].lastName}</h4>
        <br/>
        <h2><strong> Room: </strong></h2>
        <h4> {hall}{this.props.pin.room} </h4>
        <br/>
        <h2><strong> Tags: </strong></h2>
        <Select
          name="tagSearch"
          placeholder="Search for Tags"
          options={tagOptions}
          mulit={true}
          allowCreate={true}
          onChange={this.onUserTagAdd}
        />
        <TagsList
          pin={this.props.pin}
          onPinUpdate={this.props.onPinUpdate}
          comparing={this.props.comparing}
        />
      </div>
    )
  }
});
module.exports = PinTab;
