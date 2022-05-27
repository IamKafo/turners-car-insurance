import './App.css';
import React from 'react';


import { BrowserRouter as Router} from "react-router-dom";

import AnimatedRoutes from './AnimatedRoutes';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
      <>
        <Router>
          <ScrollToTop/>
          <AnimatedRoutes/>
        </Router>
      </>

  );
}

export default App;