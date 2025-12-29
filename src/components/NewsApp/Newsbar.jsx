import React, {useRef, useContext} from 'react'
import {NewsContext} from '../../context/NewsAppContext'
import {Link} from 'react-router-dom'

const Newsbar = () => {
  const {setInput, language, setLanguage} = useContext(NewsContext)
  const inputRef = useRef()
  function getInput(){
    const result = inputRef.current.value.trim();
    setInput(result)
    inputRef.current.value = ''
  }
  function changeLanguage(e){
    setLanguage(e.target.value)
  }
  return (
    <>
    <div className='d-flex justify-content-around align-items-center p-4'>
      <div className='input-group'>
      <input type="text" ref={inputRef} placeholder="Search here.." className='form-control'/>
      <button type='submit' onClick={getInput} className='btn btn-primary'>Search</button>
      </div>
      <select name="language" value={language} onChange={changeLanguage} className='form-select' style={{width:'120px'}}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
    <div className='d-flex justify-content-around align-items-center'>
      <ul className='d-flex justify-content-around align-items-center list-unstyled nav'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/politics' className='nav-link'>Politics</Link>
        </li>
        <li className='nav-item'>
          <Link to='/economy' className='nav-link'>Economy</Link>
        </li>
        <li className='nav-item'>
          <Link to='/sports' className='nav-link'>Sports</Link>
        </li>
        <li className='nav-item'>
          <Link to='/cricket' className='nav-link'>Cricket</Link>
        </li>
        <li className='nav-item'>
          <Link to='/technology' className='nav-link'>Technology</Link>
        </li>
        <li className='nav-item'>
          <Link to='/career' className='nav-link'>Career</Link>
        </li>
        <li className='nav-item'>
          <Link to='/market' className='nav-link'>Markets</Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Newsbar