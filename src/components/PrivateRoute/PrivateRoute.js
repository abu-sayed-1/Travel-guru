// import React, { useContext } from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { UserContext } from '../../App';

// const PrivateRoute = ({children, ...rest}) => {
//     const [loggedInUser,setLoggedInUser] = useContext(UserContext)

//     return (
//      <Route
//       {...rest}
//       render={({ location }) =>
//       loggedInUser.email ? (
//           children
//         ) : (
//           <Redirect
//             to={{ 
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//     );
// };

// export default PrivateRoute;


// {
//     "id": 2,
//     "roomDetail": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum voluptate sunt tempore. Consequatur dolor aspernatur eius nostrum officia vero esse corporis unde nulla",
//     "roomInfo": "3 guests  2 bedrooms  2 beds 2 baths",
//     "convenience": "Wif air conditiontng Kitchen Cancellation fexibilith",
//     "rating": "6.9 (30)",
//     "price": "$90",
//     "totalPrice": "/Night $120 total",
//     "roomImg1": "https://tse2.mm.bing.net/th?id=OIP._xUfhKxR7WTa-Ujpe-fCgQHaHI&pid=Api&P=0&w=167&h=161",
//     "roomImg2": "https://cdn.decoist.com/wp-content/uploads/2012/08/travel-inspired-bedroom-with-fancy-home-office.jpg",
//     "roomImg3": "https://tse2.mm.bing.net/th?id=OIP.H-TBmZx1GdXb3c9FhEJc2wHaDt&pid=Api&P=0&w=347&h=174",
//     "currentLocation": "SREEMANGAL"
//   }, {
//     "id": 3,
//     "roomDetail": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum voluptate sunt tempore. Consequatur dolor aspernatur eius nostrum officia vero esse corporis unde nulla",
//     "roomInfo": " guests  2 bedrooms  2 beds 2 baths",
//     "convenience": "Wif air conditiontng Kitchen Cancellation ",
//     "rating": "4.9 (20)",
//     "price": "$100",
//     "totalPrice": "/Night $180 total",
//     "roomImg1": "https://i.pinimg.com/originals/09/e0/9d/09e09d3a8fe8bd53c71f83bc52acd2fa.jpg",
//     "roomImg2": "https://tse1.mm.bing.net/th?id=OIP.nWSxrcpCFxB0_F-iDH_MyAHaEo&pid=Api&P=0&w=264&h=166",
//     "roomImg3": "https://tse2.mm.bing.net/th?id=OIP.YI3rUP-2lExM5mlpqfn3gAAAAA&pid=Api&P=0&w=235&h=166",
//     "currentLocation": "SUNDARBAN"
//   }

// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

