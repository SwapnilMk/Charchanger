import React, {useState} from 'react'
import propTypes from 'prop-types';


function Textarea(props) {
  
  const handleUpClick = () => {
    let upperText = text.toUpperCase()
    setText(upperText)
  }

  const handleLowClick = () => {
    let lowerText = text.toLowerCase()
    setText(lowerText)
  }


  const handleOnchange = (event) => {
    setText(event.target.value)
  }


  const [text, setText] = useState(` `);


  return (
    <>
      <div className="container my-4 text-dark">
      <h1 className='my-3'>{props.tittle}</h1>
      <textarea className="form-control" value={text}  onChange={handleOnchange} id="exampleFormControlTextarea1" rows="12"></textarea>
      <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert to Lowercase</button>
      </div>
    <div className="container">
      <h2>word counter</h2>
      <p className='my-3'>your text has {text.split(" ").length} words and {text.length} charecters</p>
      <p className= "my-2">{text}</p>
    </div>
    </>
  )
}


Textarea.propTypes = {
  tittle : propTypes.string
}

export default Textarea
