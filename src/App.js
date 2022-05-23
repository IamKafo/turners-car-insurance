import './App.css';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from './Components/Footer/Footer'

function App() {
  return (
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/"  element={<HomePage />} />
            {/* <Route  path="/getaquote" element={< />} /> */}
          </Routes>
        </Router>
      </>

  );
}

export default App;
