import React from "react";
import "./App.css";
import AppFooter from "./AppFooter";
import AppForm from "./AppForm";
import AppList from "./AppList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { text: "study", complete: false },
        { text: "beat", complete: false },
        { text: "eat", complete: true }
      ],
      choosevalue: 1
    };
  }
  ChooseValue(id) {
    this.setState({ choosevalue: id });
  }
  ChangeComplete(dtext) {
    let newdata = this.state.data.map(item => {
      if (item.text === dtext) {
        item.complete = true;
      }
      return item;
    });
    this.setState({ data: newdata });
  }
  OnAddTodoItem(newItem) {
    for (var Item of this.state.data) {
      if (Item.text === newItem.text) {
        alert("duplicate input")
        return;
      }
    }
    let newdata = this.state.data.concat(newItem);
    this.setState({ data: newdata });
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="main">
        <h1>My TodoList</h1>
        <AppList
          data={this.state.data}
          choosevalue={this.state.choosevalue}
          ChangeComplete={this.ChangeComplete.bind(this)}
        />
        <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)} />
        <AppFooter SetChooseValue={this.ChooseValue.bind(this)} />
      </div>
    );
  }
}
