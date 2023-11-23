import React from 'react'
import '../Header/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav_container'>
      <div className="logo">
        <img src="https://camo.githubusercontent.com/b6d3cb71ee9d8fac41aac3c24c3553a1385f5263e75e8eb0af01239c79601a43/68747470733a2f2f7777772e636962632e636f6d2f636f6e74656e742f64616d2f676c6f62616c2d6173736574732f69636f6e732f696c6c7573747261746976652f677265792d636972636c652f6465766963652f6f6e6c696e652d62616e6b696e672d323536783235362e737667" alt="" />
        <h1>Virtual transactions</h1>
      </div>
      <div className="links">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/history_details">History details</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
