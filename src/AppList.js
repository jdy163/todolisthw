import React from "react";
import AppTodos from "./AppTodos";
export default class AppList extends React.Component {
  ChangeDone(text){
    this.props.ChangeComplete(text)
  }
  render() {
    var value = this.props.choosevalue;
    const a = this.props.data.map(({ text, complete }) => {
      if (value === 1) {
        return <AppTodos text={text} complete={complete} ChangeCompleteItem={this.ChangeDone.bind(this)}/>;
      }
      if (value === 2 && complete === false) {
        return <AppTodos text={text} complete={complete} ChangeCompleteItem={this.ChangeDone.bind(this)}/>;
      }
      if (value === 3 && complete === true) {
        return <AppTodos text={text} complete={complete} ChangeCompleteItem={this.ChangeDone.bind(this)}/>;
      }
      return<br/>
    });
    return <div>{a}</div>;
  }
}
