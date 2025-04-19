import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <button className='btn btn-error'>Submit</button>
      <Outlet></Outlet>
    </>
  )
}

export default App
