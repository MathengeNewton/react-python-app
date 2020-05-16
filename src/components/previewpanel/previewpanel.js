import React from 'react'
import './previewpanel.css'

let Previewpanel =({data,style})=>{
    return(
        <section className="preview-panel">
            <h2>Preview comes here..</h2>
            {/* <img src={url} alt="" style={style}/> */}
            <p style={style}>
                {data}
            </p>
        </section>
    )
}
export default Previewpanel