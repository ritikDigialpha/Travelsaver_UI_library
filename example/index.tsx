import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AirlineLogo } from '../.';

const App = () => {
  return (
    <div>
      <AirlineLogo AirlineCode={1} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
