import React from 'react'
import './previewpanel.css'

let Previewpanel =({number,url})=>{
    return(
        <section className="preview-panel">
            <h2>Preview comes here..</h2>
            <img src={url} alt="" />
        </section>
    )
}
export default Previewpanel