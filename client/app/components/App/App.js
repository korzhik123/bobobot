import React, { Component } from 'react';

import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <>
    <Header />

    <Calendar>

    </Calendar>
    <main>{children}</main>

  </>
);

export default App;
