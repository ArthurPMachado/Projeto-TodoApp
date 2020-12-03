import React from 'react';
import Routes from './routes';
import Menu from './components/Menu';

// Import bootstrap and font-awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
