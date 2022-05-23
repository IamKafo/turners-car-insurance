import './App.css';

import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetQuote from './Components/GetQuote/GetQuote';


function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route  path="/getquote" element={<GetQuote />} />
          </Routes>
        </Router>

      </>

  );
}

export default App;