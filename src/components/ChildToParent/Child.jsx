import React from 'react'

const Child = ({setData}) => {
  var data = [
    {id:1, name:'Ritik', designation:'Intern'},
    {id:2, name:'Saurav', designation:'Student'},
    {id:3, name:'Nitin', designation:'Trainer'},
    {id:4, name:'Himanshu', designation:'Teacher'},
    {id:5, name:'Vinay', designation:'Officer'},
  ];
  function sendData(){
    setData(data)
  }
  return (
    <>
    <p>This id Child</p>
    <button type='button' onClick={sendData}>Send Data</button>
    </>
  )
}

export default Child