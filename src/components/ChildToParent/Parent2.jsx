import React, {useState} from 'react'
import Parent from "./Parent";
import Child from "./Child";

const Parent2 = () => {
  const [data,setData] = useState([])
  return (
    <>
    <Parent data={data}/>
    <Child setData={setData}/>
    </>
  )
}

export default Parent2