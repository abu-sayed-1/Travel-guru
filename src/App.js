import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
function App() {
  return (
    <div >
     <Router>
       <Header />
       <Switch>
         <Route path="/home">
           <Home />
          </Route>
          <Route exact path="/">
          <Home />
         </Route>
         <Route path="/detail/:numId">
         <Booking />
         </Route>
         <Route path="*">
           <PageNotFound />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
