import React,{useState} from 'react'

function Todoinput(props) {
    const[inputText,setInputText] = useState('');
  return (
    <div className="input-container">
        <input type="text" 
        className='input-box-todo'
        placeholder='Enter Your Todo'
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        />
        <button className='add-btn' 
        onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }
        }>+</button>
        {/* <div>{inputText}</div> */}

    </div>
  )
}

export default Todoinput