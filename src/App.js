import React from 'react';
import Header from './Componentes/header/Header';
import Arquivo from './Componentes/arquivo/Api';

function App() {
  const path = 'https://logodownload.org/wp-content/uploads/2016/08/mercado-livre-logo-7.png'

  return (
    <div>
      <Header path={path}/>
      <Arquivo />
    </div>
  );
}

export default App;
