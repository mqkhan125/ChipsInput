import React, { useState } from 'react'

const ChipsInput = () => {

   const [input, setInput] = useState('')
   const [data, setData] = useState([])

   const handleInput = (event) => {
     setInput(event.target.value)
   }

   const ChipsInput = (event) => {
    if(event.key === "Enter" && input !== ""){
        setData([...data, input])
        setInput('')
    }
   }

  return (
    <>
    <div className="container">
        <div className="input-container">
            <h1>Chips Input</h1>
            <input type="text" placeholder='Add Chips' value={input} onChange={handleInput} onKeyUp={ChipsInput} />
        </div>

        <div className="chips-container">
        
        </div>
    </div>
    </>
  )
}

export default ChipsInput