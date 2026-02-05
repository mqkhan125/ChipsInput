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
          {data != "" ?
            data.map((item, index) => (
                <div className ='chip-Box' key={index}>
                    <p>{item}</p>
                    <span onClick={() => setData(data.filter((item,id) => (
                        id !== index
                    )))}>❌</span>
                </div>
            )) : <p className="empty-message">No chips added yet</p>
          }
        </div>
    </div>
    </>
  )
}

export default ChipsInput