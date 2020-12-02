import React from 'react';
import Todo from './pages/Todo';
import About from './pages/About';
import Menu from './components/Menu';

// Import bootstrap and font-awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="container">
      <Menu />
      <Todo />
      <About />
    </div>
  );
}

export default App;
