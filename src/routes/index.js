import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Criar from '../pages/Criar';
import Deletar from '../pages/Deletar';
import Atualizar from '../pages/Atualizar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/criar" exact component={Criar} />
      <Route path="/deletar" exact component={Deletar} />
      <Route path="/atualizar" exact component={Atualizar} />
    </Switch>
  );
}