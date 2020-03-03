import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageVerification from 'containers/ImageVerification';
import './App.scss';

function App() {
  return (
    <div className="id-proofing-app">
      <Router>
        <Route path="/" component={ImageVerification} />
      </Router>
    </div>
  );
}

export default App;
