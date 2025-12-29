import React, {component} from 'react'
import Child from './Child'

const Parent = () => {
  let data = [
    {id:1, name:"Ritik", designation:"Student"},
    {id:2, name:"Aryan", designation:"Trainer"},
    {id:3, name:"Raza", designation:"Student"},
    {id:4, name:"Prashant", designation:"Trainer"},
    {id:5, name:"Aakarsh", designation:"Student"},
    {id:6, name:"Harsh", designation:"Student"},
  ];
  return (
    <div>
      <Child data={data}/>
    </div>
  )
}

export default Parent