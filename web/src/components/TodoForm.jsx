import React from 'react';
import Grid from './Grid';
import IconButton from './IconButton';

function TodoForm(props) {
  const { handleAddTask, description, handleChange } = props;

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={description}
          onChange={handleChange}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          styleProps="primary"
          icon="plus"
          onClick={handleAddTask}
        />
      </Grid>
    </div>
  );
}

export default TodoForm;
