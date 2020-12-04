/* eslint-disable no-underscore-dangle */
import React from 'react';
import IconButton from './IconButton';

import '../assets/styles/todoList.css';

function TodoList(props) {
  const { list } = props || [];
  const { handleRemove, handleMarkAsDone, handleMarkAsPending } = props;

  function renderRows() {
    return (
      list.map((todo) => (
        <tr key={todo._id}>
          <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
          <td>
            <IconButton
              styleProps="success"
              icon="check"
              hide={todo.done}
              onClick={() => handleMarkAsDone(todo)}
            />
            <IconButton
              styleProps="warning"
              icon="undo"
              hide={!todo.done}
              onClick={() => handleMarkAsPending(todo)}
            />
            <IconButton
              styleProps="danger"
              icon="trash-o"
              hide={!todo.done}
              onClick={() => handleRemove(todo)}
            />
          </td>
        </tr>
      ))
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}

export default TodoList;
