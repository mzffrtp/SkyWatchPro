import { useState } from "react"
import MapView from "./components/map-view"
import ListView from "./components/list-view"
import './index.css'
import Header from "./components/header"

function App() {
  const [showMap, setShowMap] = useState(true)

  return (
    <>
    <Header />
    <div className="view-select-btn">
      <button 
      className={`${showMap && "active"}`}
      onClick={()=> setShowMap(true)}>Map View</button>
      <button 
      className={`${!showMap && "active"}`}
      onClick={()=> setShowMap(false)}>List View</button>
    </div>
    {
      showMap ? <MapView /> : <ListView />
    }
    </>
  )
}

export default App
