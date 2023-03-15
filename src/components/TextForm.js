import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }
  const handleReClick = ()=>{
    let newText="";
    for(let i = text.length-1; i>=0;i--){
      newText = newText + text[i];
      props.showAlert("Rotation of text", "success");
    };
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  
  const handleCopy =() => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard", "success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces", "success");
  }

  // this is a State text we use useState Hook
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
         <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange= {handleOnChange} style={{background:props.mode==='dark'?'white':'gray',
          color:props.mode==='light'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>     
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>     
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>     
            <button className='btn btn-primary mx-1' onClick={handleReClick}>Reverse</button>     
            <button className='btn btn-primary mx-1' onClick={handleCopy}>CopyText</button>     
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>     
    </div>
    <div className="container my-3">
      <h2>Your Text Summery</h2>
      <p>{text===""?0:text[text.length-1]===" "?text.split(" ").length-1:text.split(" ").length} words, {text.length} characters</p>
      <p>{text.length===0?0:0.008 * text.split(" ").length } Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
