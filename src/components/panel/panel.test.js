import React from 'react';
import ReactDOM from 'react-dom'
import Panel from './panel';

test('works just fine', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Panel />,div);
});
