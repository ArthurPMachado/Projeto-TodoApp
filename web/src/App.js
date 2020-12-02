import React from 'react';
import Todo from './pages/Todo';
import About from './pages/About';

// Import bootstrap and font-awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="container">
      <Todo />
      <About />
    </div>
  );
}

export default App;
