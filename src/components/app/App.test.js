import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

test('works just fine', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />,div);
});
