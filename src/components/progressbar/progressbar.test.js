import React from 'react'
import ReactDOM from 'react-dom'
import ProgresBar from './progressbar'

test('Progress bar working just fine',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<ProgresBar />,div)
})