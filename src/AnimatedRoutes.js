import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from './Components/HomePage/HomePage';
import ChoosePolicy from './Components/ChoosePolicy/ChoosePolicy';
import ReviewPage from './Components/ReviewPage/ReviewPage';
import NewQuotePage from './Components/NewQuotePage/NewQuotePage';
import ExistingDetailsPage from './Components/ExistingDetailsPage/ExistingDetailsPage';
import BuyPolicy from './Components/PaymentPage/Payment';
import ConfirmationPage from './Components/ConfirmationPage/ConfirmationPage';

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/"  element={<HomePage />} />
                <Route path="/existingdetailspage" element={<ExistingDetailsPage/>} />
                <Route path="/choosepolicy" element={<ChoosePolicy />} />
                <Route path="/newquote" element={<NewQuotePage/>} />
                <Route path="/reviewquote" element={<ReviewPage/>} />
                <Route path="/buypolicy" element={<BuyPolicy/>} />
                <Route path="/confirm" element={<ConfirmationPage/>} />
            </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes;