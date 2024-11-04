import React from 'react'
import Home from './pages/landing/home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App