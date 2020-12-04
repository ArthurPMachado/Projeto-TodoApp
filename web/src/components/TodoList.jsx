/* eslint-disable react/style-prop-object */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import IconButton from './IconButton';

function TodoList(props) {
  const { list } = props || [];
  const { handleRemove } = props;

  function renderRows() {
    return (
      list.map((todo) => (
        <tr key={todo._id}>
          <td>{todo.description}</td>
          <td>
            <IconButton
              style="danger"
              icon="trash-o"
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
