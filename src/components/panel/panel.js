import React from 'react'
import './panel.css'
import Button from '../button/button'


let Panel = (props) =>{
    let src = {
        excel:'./img.jpg',
        csv:'./csv.jpg',
        xlsx:'./xlsx.jpg'
    } 
    return(
        <section className="panel">
            <header>
                <h3>Analysis your files</h3>
            </header>
            <form>
                <div>
                <label className="file">
                    <input type="file" id="file" className="file-input" />                    
                </label>
                </div>
                <div className="preview-section">
                    <img className="preview" src={src.excel} alt=""/>
                    <img className="preview" src={src.csv} alt=""/>  
                    <img className="preview" src={src.xlsx} alt=""/> 
                </div>        
                <Button stext = 'Submit'/>
            </form>
        </section>
    )
}
export default Panel