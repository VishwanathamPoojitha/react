import React from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'

import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'

import FridgePage from './stores/pages/FridgePage'


import MobileSingle from './singles/MobileSingle'
import ComputersSingle from './singles/ComputersSingle'
import WatchSingle from './singles/WatchSingle'
import MenSingle from './singles/MenSingle'
import WomenSingle from './singles/WomenSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import AcSingle from './singles/AcSingle'
import KitchenSingle from './singles/KitchenSingle'

import FridgeSingle from './singles/FridgeSingle'


import UserCart from './stores/UserCart'


const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<LandingPage />} />
        
        <Route  path='/mobiles' element={<MobilePage/>}/>
        <Route  path='/computers' element={<ComputerPage/>}/>
        <Route  path='/watches' element={<WatchPage/>}/>
        <Route  path='/men' element={<MenPage/>}/>
        <Route  path='/women' element={<WomanPage/>}/>
        <Route  path='/furniture' element={<FurniturePage/>}/>
        <Route  path='/ac' element={<AcPage/>}/>
        <Route  path='/kitchen' element={<KitchenPage/>}/>
        
        <Route  path='/fridge' element={<FridgePage/>}/>
        
        
        <Route  path='/mobile/:id' element={<MobileSingle/>}/>
        <Route  path='/computers/:id' element={<ComputersSingle/>}/>
        <Route  path='/watch/:id' element={<WatchSingle/>}/>
        <Route  path='/men/:id' element={<MenSingle/>}/>
        <Route  path='/women/:id' element={<WomenSingle/>}/>
        <Route  path='/furniture/:id' element={<FurnitureSingle/>}/>
        <Route  path='/ac/:id' element={<AcSingle/>}/>
        <Route  path='/kitchen/:id' element={<KitchenSingle/>}/>
        
        <Route  path='/fridge/:id' element={<FridgeSingle/>}/>
        
        
        <Route  path='/cart' element={<UserCart/>}/>
        

        



        


      
      </Routes>
    </div>
  )
}

export default App
