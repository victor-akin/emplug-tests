import React from 'react';
import { shallow, mount, render } from "enzyme";

import TodoList from './TodoList'
import TodoItems from './TodoItems'

let todo_list = [
  'list item one',
  'list item two',
  'list item three',
  'list item four',
  'list item five'
]

describe('TodoItems', () => {

  it('should render list of items and not throw errors', () => {
    expect(
      shallow(<TodoList entries={todo_list} />).contains(
        <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
      )
    ).toBe(true)
  })

});