import React, { useState } from 'react'


export default function TextYour(props) {
  const handleUpClick = () => {
    //console.log("upppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" convert to upeercase","success");
  }
  const handleLoClick = () => {
    //console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" convert to lowecase","success");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert(" you try clear","success");
  }
  const handleCoClick = () => {
console.log("i am copy");
    let text=document.getElementById("mybox");
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert(" convert to copy","success");
   
  }
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  }
  const handleExtraspace = (event) => {
    let newText=text.split(/[ ]+/);
    setText(newText.join( " "));
    props.showAlert(" extra space clear","success");

  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control " style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="mybox" onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>UPERCASE</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>Lowerase</button>
        <button className="btn btn-success mx-2" onClick={handleCoClick}>Copy</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-success mx-2" onClick={handleExtraspace}>Extra Space</button>
        
      </div>
      <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>your text sumary</h2>
        <p>{text.split(" ").length}words and {text.length} charactes</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter someting to preview it here"}</p>
      </div>
    </>
  )
}
