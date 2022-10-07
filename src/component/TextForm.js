import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase ();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase ();
        setText(newText)
    }
    const handleClenClick = ()=>{
        let newText = ('');
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    //copy text
    const handleCopy = ()=>{
        var text= document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    //end
    //extra spece
    const handleExtraSpases = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    //end
    const[text, setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>

            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClenClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpases}>Remove Extra Spases</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Work ang {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}