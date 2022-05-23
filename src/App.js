import './App.css';

import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetQuote from './Components/GetQuote/GetQuote';
//import ReviewPage from './Components/ReviewPage/ReviewPage';
import NewQuotePage from './Components/NewQuotePage/NewQuotePage';



function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route  path="/getquote" element={<GetQuote />} />
            <Route path="/reviewpage" element={<NewQuotePage/>} />
          </Routes>
        </Router>
      </>

  );
}

export default App;