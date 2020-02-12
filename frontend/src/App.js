import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import SearchPage from './Components/Search';
import UploadPage from './Components/Upload';
import AboutPage from './Components/About';

function App() {
  return (
    <div className="App">
        <div className="container is-fluid">
          <Router>
            <NavBar />
            <Route path = "/" exact><SearchPage/></Route>
            <Route path="/search" exact><SearchPage/></Route>
            <Route path="/upload" exact><UploadPage/></Route>
            <Route path="/about" exact><AboutPage/></Route>
          </Router>
        </div>
      
    </div>
  );
}

export default App;
