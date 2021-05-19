import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState((state)=>{
      return  {
        done: !state.done
      };
    });
  };
  onMarkImportant = () => {
    this.setState((state)=>{
      return  {
        important: !state.important
      };
    });
  };


  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if ( done ) {
      classNames += ' done';
    }
    if ( important ) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
      <span
        className="todo-list-item-label"
        onClick={ this.onLabelClick }>
        { label }
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm pull-right"
              onClick={ this.onMarkImportant }>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm pull-right">
        <i className="fa fa-trash-o"/>
      </button>
    </span>
    );
  }
}

export default TodoListItem;

/*const TodoListItemFunc = ({ label, important = false }) => {
 const { label, important = false }= this.props;
 const style = {
 color: important ? 'steelblue' : 'black',
 fontWeight: important ? 'bold' : 'normal'
 };
 return (
 <span className="todo-list-item">
 <span
 className="todo-list-item-label"
 style={style}>
 {label}
 </span>

 <button type="button"
 className="btn btn-outline-success btn-sm pull-right">
 <i className="fa fa-exclamation" />
 </button>

 <button type="button"
 className="btn btn-outline-danger btn-sm pull-right">
 <i className="fa fa-trash-o" />
 </button>
 </span>
 );
 };*/
