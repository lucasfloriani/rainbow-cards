import React from 'react';
import Rainbow from './components/Rainbow';

const App: React.FC = () => {
  return <Rainbow
    list={[
      {
        secondaryColor: 'red',
        primaryColor: 'blue',
        message: 'Gordon\'s London Dry',
        title: 'Fresco',
      },
      {
        secondaryColor: 'red',
        primaryColor: 'blue',
        message: 'Gordon\'s Elderflower',
        title: 'Floral',
      },
      {
        secondaryColor: 'red',
        primaryColor: 'blue',
        message: 'Gordon\'s Pink',
        title: 'Adocicado',
      },
      {
        secondaryColor: 'red',
        primaryColor: 'blue',
        message: 'Tanqueray London Dry',
        title: 'Equilibrado',
      },
      {
        secondaryColor: 'red',
        primaryColor: 'blue',
        message: 'Tanqueray Ten',
        title: 'Cítrico',
      },
      {
        secondaryColor: 'red',
        primaryColor: 'blue',
        message: 'Tanqueray Sevilla',
        title: 'Frutado',
      },
      {
        secondaryColor: 'red',
        primaryColor: 'blue',
        message: 'Tanqueray Rangpur',
        title: 'Suave',
      },
    ]}
  />
}

export default App;
