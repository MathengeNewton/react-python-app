import React ,{useState}from 'react'
import './panel.css'
import Preview from '../previewpanel/previewpanel'
import ProgresBar from '../progressbar/progressbar'


let Panel = (props) =>{    
    let [string, setString] =  useState('')
    let [visibility,setVisibility] = useState(true)
    let [preview,setPreview] = useState('none')
    let [progres,setProgres] = useState('none')
    

    
    let src = {
        preview:string,
        excel:'./xlsx.jpg',
        csv:'./csv.jpg',
        json:'./json.jpg',
        word:'./word.jpg'
    }   
    let handlechange = () =>{
       let val = document.getElementById('myfile').value
       setVisibility(visibility = false)
       setProgres(progres = '')       
       setString(string ='./preview.png')
       setTimeout(()=>{
           setProgres(progres='none')
           setPreview(preview = '')
       },5000)
       console.log(val)
    }
       
    let style={}
    visibility ?
         style.display='block': style.display='none'
    let previewstyle={
        display:preview
    }    
    let progresbarstyle={
        marginLeft:'2%',
        marginTop:'5%',
        textAlign:'center',
        display:progres
    }
    
    return(
        <div id='divstyle'>
            <section className="panel" id="maincomponent" style={style}>
                <header>
                    <h3>Analysis your files</h3>
                </header>
                <form>
                    <div>
                        <h4>Choose file: </h4>
                    </div>
                    <div className="upload-btn-wrapper">
                        <button className="btn">Upload a file</button>
                         <input type="file" name="myfile" id="myfile" onChange={handlechange}/>
                    </div>
                    <div className="preview-section">
                        <img className="preview-icon" src={src.word} alt="" />
                        <img className="preview-icon" src={src.excel} alt="" />
                        <img className="preview-icon" src={src.csv} alt="" />
                        <img className="preview-icon" src={src.json} alt="" />
                    </div>
                </form>
            </section>
            <section id="previewcomponent" style={previewstyle}>
                <Preview                
                url = {src.preview}
                />                
            </section>
            <section style={progresbarstyle}>
                <h3>File being processed...</h3>
                <ProgresBar />
            </section>         
        </div>
    )
}
export default Panel