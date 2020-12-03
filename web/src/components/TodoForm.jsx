import React from 'react';

function TodoForm(props) {
  return (
    <div role="form" className="todoForm">
      <div className="col-xs-12 col-md-9 col-md-10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
        />

        <div className="col-xs-12 col-sm-3 col-md-2">
          <button type="button" className="btn btn-primary">
            <i className="fa fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
