import React from 'react'
import Navbar from './components/navbar/navbar'
import Repos from './pages/repo/repo'

export default () => {
  return (
    <div >
        <Navbar/>
        <div className="content">
            <Repos/>
        </div>
    </div>
  )
}

