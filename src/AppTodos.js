import React from "react";
import './AppTodos.css'
export default class AppForm extends React.Component {
    ChangeComplete(text){
        var dtext=this.props.text
        this.props.ChangeCompleteItem(dtext)
    }
  render() {
    if (this.props.complete === true)
      return (
        <p className="done-item">
           {this.props.text} (finished)
        </p>
      );
    else
      return (
        <p className="item">
          {this.props.text} (no finish)
          <button onClick={this.ChangeComplete.bind(this)}>finish</button>
        </p>
      );
  }
}
