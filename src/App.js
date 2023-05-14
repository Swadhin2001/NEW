import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Recommendations from './Pages/Recommendations.jsx';
import Analyzer from './Pages/Analyzer.jsx';
import Calculator from './Pages/Calculator.jsx';
import Vitality from './Pages/Vitality.jsx';
import Insights from './Pages/Insights.jsx';
// import {BrowsesrRouter as Router, Routes} from 'react-router-dom';
// import News from './Pages/Home.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index Component={Home} />
          <Route exact path='/Recommendations' Component={Recommendations} />
          <Route exact path='/Analyzer' Component={Analyzer} />
          <Route exact path='/Calculator' Component={Calculator} />
          <Route exact path='/Vitality' Component={Vitality} />
          <Route exact path='/Insights' Component={Insights} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
