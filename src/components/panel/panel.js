import React ,{useState}from 'react'
import './panel.css'
import Preview from '../previewpanel/previewpanel'
import Button from '../button/button'
import axios from 'axios'



let Panel = () =>{ 
    let [visibility,setVisibility] = useState(true)
    let [data,setData] = useState([])  
    
    let style={}
    const dataProcessUrl = 'http://localhost:5000/python.app/api/data-center';
    const requestHeader = {
        headers:{
            contentType:'application/json'
        }
    } 
    let pstyle={
        display:'none',        
    }
    let prs = {
        width:'70%'
    }
    if(visibility){
        style.display='block'
        pstyle.display='none'
    }else{
        style.display='none'
        pstyle.display='block'
    }        
  //image urls       
    let src = {        
        excel:'./xlsx.jpg',
        csv:'./csv.jpg',
        json:'./json.jpg',
        word:'./word.jpg'
    }
    let checkfile =(filename)=>{
        let extension = filename.split('.')
        let ext = extension[1]
        ext.toLowerCase()
        if (ext === 'csv') {
            return true
        } else if(ext ==='docx'){
            return true
        }else if(ext ==='xlsx'){
            return true
        }else if(ext ==='json'){
            return true
        }else{
            return false
        }
    }
    let checkform = (e)=> {
        e.preventDefault()
        let val = document.querySelector('#myfile')
        let actualFile = val.files[0]
        console.log(actualFile.name)
        if (!actualFile){
            alert('no file chosen!')
            e.preventDefault()
        }else if(!checkfile(actualFile.name)){
            let extension = actualFile.split('.')
            let ext = extension[1]
            alert(`the system does not handle .${ext} file types`)
        } else {
            handlechange(actualFile)
            setVisibility(visibility = false)        
        }
    }
    let handlechange = (mydata) =>{
        let dataDict = {
            file:mydata
        }
        console.log(mydata)            
                axios.post(dataProcessUrl,dataDict,requestHeader)
                .then((response)=>{               
                    let outcome = response.data[0]
                    console.log(outcome)
                    setData(data = data.push(outcome))
                    console.log(data)
                    return outcome              
                })
                .catch(()=>{
                console.log('error');
                return false
            })
        }
    return(
        <div id='divstyle'>
            <section className="panel" id="maincomponent" style={style}>
                <header>
                    <h3>Analysis your files</h3>
                </header>
                <form onSubmit={checkform}>
                    <div>
                        <h4>Choose file: </h4>
                    </div>
                    <div className="upload-btn-wrapper">
                        <button className="btn">Upload a file</button>
                         <input type="file" name="myfile" id="myfile"/>
                    </div>
                    <div className="preview-section">
                        <img className="preview-icon" src={src.word} alt="" />
                        <img className="preview-icon" src={src.excel} alt="" />
                        <img className="preview-icon" src={src.csv} alt="" />
                        <img className="preview-icon" src={src.json} alt="" />
                    </div>
                    <Button stext = 'submit' />
                </form>
            </section>
            <section id="previewcomponent" style={pstyle}>
                <Preview                
                data = {data}
                style = {prs}                
                />             
            </section>                     
        </div>
    )
}

export default Panel