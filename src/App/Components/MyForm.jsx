import React from 'react'
import "../../App.css"

const MyForm = ({dataOfForm, updateValues, uniqueAddition}) => {
  return (
    <div>
    <input  id='input' placeholder='Enter Your Name Here : ' value={dataOfForm.name} name= "name" onChange={updateValues}/>
    <br/>
    <input id='input' placeholder='Enter Your Age Here : ' value={dataOfForm.age} name = "age" onChange={updateValues}/>
    <br/>
    <input  id='input'placeholder='Enter Your Father Name Here : ' value={dataOfForm.fatherName} name = "fatherName" onChange={updateValues}/>
    <br/>
    <button id = 'btn' onClick = {() => uniqueAddition(dataOfForm)}>Add User</button>
    </div>
  )
}

export default MyForm