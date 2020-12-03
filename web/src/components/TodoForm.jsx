import React from 'react';
import Grid from './Grid';
import IconButton from './IconButton';

function TodoForm(props) {
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton styleProps="primary" icon="plus" />
      </Grid>
    </div>
  );
}

export default TodoForm;
