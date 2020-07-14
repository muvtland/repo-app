import React from 'react'
import Navbar from './components/navbar/navbar'
import Repos from './pages/repo/repo'

function App() {
  return (
    <div >
        <Navbar/>
        <div className="content">
            <Repos/>
        </div>
    </div>
  )
}

export default App
