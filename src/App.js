import React, { createContext, useState } from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
// import Room from './components/Room/Room';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
// import GoogleMaps from './components/GoogleMaps/GoogleMaps';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export const UserContext = createContext();
export const BookingInfoContext = createContext();
// 
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [booking,setBooking] = useState([])
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <BookingInfoContext.Provider value={[booking,setBooking]}>
       {
         console.log(booking)
       }
     <Router>
        <Header />
         <Switch>
         <Route path="/home">
           <Home />
          </Route>
          <Route exact path="/">
          <Home />
         </Route>
         <Route path="/bookingDetail/:numId/">
         <Booking />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
          {/* <PrivateRoute path="/room">
           <Room />
          // </PrivateRoute> */}
          {/* <Route path='/room'>
             <Room></Room>
          </Route> */}
         <Route path="*">
           <PageNotFound />
         </Route>
       </Switch>
     </Router>
    <div>
    </div>
    </BookingInfoContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
 

// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//=> AIzaSyDzS9YcSBpjDqunij1wOfU_j9wExzDJYHA

// class App extends Component{
//   render(){
//     return(
//         <div>
//     <Map google={this.props.google} zoom={4}>
//           <Marker onClick={this.onMarkerClick}
//                   name={'Bangladesh'} />
//           <InfoWindow onClose={this.onInfoWindowClose}>
//               <div>
//                 {/* <h1>{this.state.selectedPlace.name}</h1> */}
//           </div>
//        </InfoWindow>
//    </Map>
//         </div>
//     );

//   }
  
// };

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyDzS9YcSBpjDqunij1wOfU_j9wExzDJYHA")
// })(App)


 