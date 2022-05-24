import './App.css';

import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetQuote from './Components/GetQuote/GetQuote';
import ExQuote from './Components/ExQuote/ExQuote';
import NewQoute from './Components/NewQuote/NewQoute';


function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route  path="/getquote" element={<GetQuote />} />
            <Route  path="/existingquote" element={<ExQuote />} />
            <Route  path="/newquote" element={<NewQoute />} />
          </Routes>
        </Router>

      </>

  );
}

export default App;