import React from "react";

export default class AppFooter extends React.Component {
  ChooseAll(){
    this.props.SetChooseValue(1);
  }
  ChooseActive(){
    this.props.SetChooseValue(2);
  }
  CHooseComplete(){
    this.props.SetChooseValue(3);
  }
  render() {
    return (
      <div>
        <button onClick={this.ChooseAll.bind(this)}>All</button>
        <button onClick={this.ChooseActive.bind(this)}>Active</button>
        <button onClick={this.CHooseComplete.bind(this)}>Completed</button>
      </div>
    );
  }
}