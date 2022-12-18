import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { TimeTable } from './components/TimeTable/TimeTable';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="routes">
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path="/about-us" element={<About />} />
          <Route path="/timetable" element={<TimeTable />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
