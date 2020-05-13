import React from 'react';
import ReactDOM from 'react-dom'
import Button from './button.js'

test('works correct',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Button />,div)
})