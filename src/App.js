import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
function App() {
  return (
       <Router>
          <Header></Header>
        <Routes>
         <Route path="/" element={<Home />}/>
           
        
        </Routes>
        <Footer />
       </Router>
  );
}

export default App;
