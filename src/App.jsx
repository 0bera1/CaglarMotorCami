import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Photos from './components/Photos'

function App() {

  return (
    <div className=' bg-gray-200'>
      <NavBar/>
      <Home/>
      <Contact/>
      {/* <About/> */}
      <Photos/>
    </div>
  )
}

export default App
