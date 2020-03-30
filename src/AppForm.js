import React from "react";

export default class AppForm extends React.Component {
    onSubmit(event){
        event.preventDefault()
        let text=this.refs.text.value
        if(text !== ""){
            this.props.AddTodoItem({text,complete:false})
        }
    }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type= 'text' ref="text" />
        <button type="submit">Add</button>
      </form>
    );
  }
}
