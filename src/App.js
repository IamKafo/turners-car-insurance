import './App.css';

import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetQuote from './Components/GetQuote/GetQuote';
import ReviewPage from './Components/ReviewPage/ReviewPage';



function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route  path="/getquote" element={<GetQuote />} />
            <Route path="/reviewpage" element={<ReviewPage/>} />
          </Routes>
        </Router>
      </>

  );
}

export default App;