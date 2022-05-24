import './App.css';

import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExQuote from './Components/ExQuote/ExQuote';
import ChoosePolicy from './Components/ChoosePolicy/ChoosePolicy';
import ReviewPage from './Components/ReviewPage/ReviewPage';
import NewQuotePage from './Components/NewQuotePage/NewQuotePage';




function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route path="/existingquote" element={<ExQuote />} />
            <Route path="/choosepolicy" element={<ChoosePolicy />} />
            <Route path="/newquote" element={<NewQuotePage/>} />
            <Route path="/reviewquote" element={<ReviewPage/>} />

          </Routes>
        </Router>
      </>

  );
}

export default App;