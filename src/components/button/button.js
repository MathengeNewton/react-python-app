import React from 'react'
import './button.css'

let Button = ({stext}) =>{
    
    return (
        <button className="btn-primary">
            {stext}
        </button>
    )
}

export default Button