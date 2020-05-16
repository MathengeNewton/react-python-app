import React from 'react'
import './button.css'

let Button = ({stext}) =>{
    
    return (
        <button type="submit" className="btn-primary">
            <h3>{stext}</h3>
        </button>
    )
}

export default Button