import React from 'react';
import fakeData from '../data.json' 
import HomeChild from './HomeChild';
import './Home.css'

const Home = () => {
  const data = fakeData;
  return (
   <section>
      <div style={{display:'flex'}} className="overlay">
      {
        data.map(allData => <HomeChild allData={allData}></HomeChild>)
      }
      </div>
   </section>
  );
};

export default Home;