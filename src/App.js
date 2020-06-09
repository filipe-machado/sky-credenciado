import React from 'react';
import './static/style/index.scss';
import Header from './Header';
import Body from './Body';

function App() {
  document.title = 'SKY TV | 0800 219 8525';
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
