import React from 'react';
import './static/style/index.scss';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  document.title = 'SKY TV | 0800 219 8525';
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
