import React,{useState} from 'react'

const HomeComponent = ({prop}) => {
  return (
    <div className='page_1'>
        <div>
            <h1>Quiz App</h1>
            <br/>
            <button onClick={()=>prop(false)}>Play</button>
        </div>
    </div>
  )
}

export default HomeComponent