import React, { useState } from 'react';
import Form from './components/form/Form';
import Resultado from './components/resultado/Resultado';
import './styles.css';
const MainContainer = () => {
  const [resultado, setResultado] = useState(null);

  return (
    <main className="main-container">
      <h2 className="main-container__titulo">Formulario</h2>
      <Form setResultado={setResultado} />
      <Resultado resultado={resultado} />
    </main>
  );
};

export default MainContainer;
