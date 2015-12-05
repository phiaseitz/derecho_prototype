var React = require('react');
var Select = require('react-select');

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

  render: function() {
    var tagNodes = this.props.pin.tags.map(function (tag) {
      return (<TagCard
        tag={tag}
        onTagSlide={this.onTagSlide}
        key={tag.label}
      />)
    }.bind(this));
    return (
      <div className="tags-list">
        {tagNodes}
      </div>
    );
  }

})

TagCard = React.createClass({
  handleChange: function(event){
    this.props.onTagSlide(this.props.tag.label, event.target.value)
  },

  render: function () {
    return (
      <div className="tag">
        <div className="tagText"> {this.props.tag.label} </div>
        <input className="tagSlider"
          type="range"
          name={this.props.tag.label}
          onChange={this.handleChange}
          value={this.props.tag.value}
          min="0"
          max="4"
          step="1"
        />
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
        />
      </div>
    )
  }
});
module.exports = PinTab;
