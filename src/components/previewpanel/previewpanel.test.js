import React from 'react';
import ReactDOM from 'react-dom'
import Previewpanel from './previewpanel';

test('works just fine', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Previewpanel />,div);
});
