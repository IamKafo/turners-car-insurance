import './App.css';
import React from 'react';

import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChoosePolicy from './Components/ChoosePolicy/ChoosePolicy';
import ReviewPage from './Components/ReviewPage/ReviewPage';
import NewQuotePage from './Components/NewQuotePage/NewQuotePage';
import ExistingDetailsPage from './Components/ExistingDetailsPage/ExistingDetailsPage';
import BuyPolicy from './Components/PaymentPage/Payment';
import ConfirmationPage from './Components/ConfirmationPage/ConfirmationPage';
import ScrollToTop from './Components/ScrollToTop';




function App() {
  return (
      <>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route path="/existingdetailspage" element={<ExistingDetailsPage/>} />
            <Route path="/choosepolicy" element={<ChoosePolicy />} />
            <Route path="/newquote" element={<NewQuotePage/>} />
            <Route path="/reviewquote" element={<ReviewPage/>} />
            <Route path="/buypolicy" element={<BuyPolicy/>} />
            <Route path="/confirm" element={<ConfirmationPage/>} />
          </Routes>
        </Router>
      </>

  );
}

export default App;