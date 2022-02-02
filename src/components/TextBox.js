import React, {useState} from 'react';

export default function TextBox(props) {
    const [text, setText] = useState("");
const ChangeToUP = () =>{
    setText(text.toUpperCase());
}
const ChangeToLO = () =>{
    setText(text.toLowerCase());
}
const ReverseText = () =>{
    let textToReverse = text.split("").reverse().join("");
    setText(textToReverse);
}
const SortText = () =>{
    let textToSort = text.split("").sort().join("");
    setText(textToSort);
}
const removeExtraSpaces = () =>{
    const spaces = text.split(/[ ]+/);
    setText(spaces.join(" "));
}
const copyText = () => {
const text = document.getElementById('textBox');
text.select();
navigator.clipboard.writeText(text.value);
}
const ClearText = () =>{
    setText("");
}
const ChangeTextBox = (event) =>{
    setText(event.target.value);
}
  return (
      <>
    <div className="container" style={{"color": props.mode === "dark"?"#F4F7F7":"black"}}>
        <div className="TextBox mb-3 my-5">
             <h1>Enter Your Text here to Analyze:</h1>
            <textarea className="form-control" value={text} style={{"backgroundColor": props.mode ==="dark"?"#515160":"white","color": props.mode ==="dark"?"white":"black"}} placeholder='Enter your text here' id="textBox" onChange={ChangeTextBox} rows="6"></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={ChangeToUP}>Convert To UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={ChangeToLO}>Convert To Lower</button>
            <button className="btn btn-primary my-3 mx-1" onClick={ReverseText}>Reverse Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={SortText}>Sort Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary my-3 mx-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={ClearText}>Clear</button>
        </div>
    </div>
    <div className="container" style={{"color": props.mode === "dark"?"#F4F7F7":"black"}}>
        <h2>Your Text Summary: </h2>
        <p>{text.length===0 ?"0":text.split(' ').length} Words & {text.length} Characters.</p>
        <p>Reading time is: {text.length * 0.008} Minutes.</p>  
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textBox above to preview it here."}</p> 
    </div>
    </>
  );


}
