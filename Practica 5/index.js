import React from 'react';
import ReactDOM from 'react-dom';
import { Hooks } from './Hooks';
import { Formulario } from './hooks/effect/Formulario';
import { Contador } from './hooks/state/Contador';
import { ContadorConCustomHook } from './hooks/state/ContadorConCustomHook';

ReactDOM.render(
    <Formulario/>,
  document.getElementById('root')
);

