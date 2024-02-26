import { BrowserRouter } from "react-router-dom" 
import { About, Contact,Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import { useState, useEffect } from "react"
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import { logo } from "./assets"


const App = () => {

  const [loading, setLoading ] = useState(false)
  // const [currentWordIndex, setCurrentWordIndex] = useState(0)
  // const words = ["Welcome", "to", "the", "portfolio", "of", "Tsion", "Molla"]
  // const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
       setLoading(false)
    }, 5000)
  }, [])
  

  return (
    <>
    {
      loading ? 
      <div className="flex justify-center items-center h-screen flex-col gap-5 bg-primary">
      
      <ClimbingBoxLoader size={20} color={'white'} loading={loading} />
      {/* <img className="w-10 h-10" src={logo}/> */}
      </div>
      :

    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-no-repeat bg-center bg-contain ">
           <Navbar/>
           <Hero/>
         </div>
         <About/>
         <Tech/>
         <Works/>
         <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
         </div>

      </div>
    </BrowserRouter>
  }
  </>
  )
}

export default App
