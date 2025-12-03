import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Splash from './screens/Splash'
import Home from './screens/Home'
import FloorPlanUpload from './screens/FloorPlanUpload'
import RoomSelection from './screens/RoomSelection'
import HouseSetupComplete from './screens/HouseSetupComplete'
import FloorTypeSelection from './screens/FloorTypeSelection'
import MethodSelection from './screens/MethodSelection'
import SurfaceMethodSelection from './screens/SurfaceMethodSelection'
import SurfaceCleaning from './screens/SurfaceCleaning'
import CleaningLevelPresets from './screens/CleaningLevelPresets'
import TidyUpOption from './screens/TidyUpOption'
import ProductSelection from './screens/ProductSelection'
import ReviewConfirm from './screens/ReviewConfirm'
import Progress from './screens/Progress'
import Completion from './screens/Completion'
import CancelConfirm from './screens/CancelConfirm'
import LaundryMenu from './screens/LaundryMenu'
import SchedulerMenu from './screens/SchedulerMenu'
import CleaningMenu from './screens/CleaningMenu'
import CleaningRoomSelection from './screens/CleaningRoomSelection'
import PlaceholderScreen from './screens/PlaceholderScreen'

export interface AppState {
  selectedRooms: string[]
  floorType: string
  cleaningMethods: string[]
  surfaceMethods: string[]
  surfaces: string[]
  cleaningLevel: string
  tidyUp: boolean
  selectedProducts: string[]
  taskType: 'floor' | 'surface' | ''
  customPresets: {
    light: string[]
    medium: string[]
    deep: string[]
  }
}

function App() {
  const [appState, setAppState] = useState<AppState>({
    selectedRooms: [],
    floorType: '',
    cleaningMethods: [],
    surfaceMethods: [],
    surfaces: [],
    cleaningLevel: '',
    tidyUp: false,
    selectedProducts: [],
    taskType: '',
    customPresets: {
      light: ['Dust surfaces', 'Light vacuum', 'Quick sweep'],
      medium: ['Vacuum thoroughly', 'Mop floors', 'Wipe surfaces'],
      deep: ['Deep clean carpets', 'Polish surfaces', 'Move objects', 'Scrub floors']
    }
  })

  return (
    <Router>
      <div className="mobile-container">
        <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/home" element={<Home />} />
              <Route path="/floor-plan" element={<FloorPlanUpload state={appState} setState={setAppState} />} />
              <Route path="/room-selection" element={<RoomSelection state={appState} setState={setAppState} />} />
              <Route path="/house-setup-complete" element={<HouseSetupComplete state={appState} />} />
              <Route path="/floor-type" element={<FloorTypeSelection state={appState} setState={setAppState} />} />
          <Route path="/method-selection" element={<MethodSelection state={appState} setState={setAppState} />} />
          <Route path="/surface-cleaning" element={<SurfaceCleaning state={appState} setState={setAppState} />} />
          <Route path="/surface-method-selection" element={<SurfaceMethodSelection state={appState} setState={setAppState} />} />
          <Route path="/cleaning-level" element={<CleaningLevelPresets state={appState} setState={setAppState} />} />
          <Route path="/tidy-up" element={<TidyUpOption state={appState} setState={setAppState} />} />
          <Route path="/product-selection" element={<ProductSelection state={appState} setState={setAppState} />} />
          <Route path="/review" element={<ReviewConfirm state={appState} setState={setAppState} />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/completion" element={<Completion />} />
              <Route path="/cancel-confirm" element={<CancelConfirm />} />
              
              {/* Cleaning Menu */}
              <Route path="/cleaning-menu" element={<CleaningMenu state={appState} setState={setAppState} />} />
              <Route path="/cleaning-room-selection" element={<CleaningRoomSelection state={appState} setState={setAppState} />} />
              
              {/* Laundry Feature */}
              <Route path="/laundry" element={<LaundryMenu />} />
              <Route path="/laundry-collect" element={<PlaceholderScreen title="Collect Laundry" backRoute="/laundry" />} />
              <Route path="/laundry-wash" element={<PlaceholderScreen title="Wash Settings" backRoute="/laundry" />} />
              <Route path="/laundry-dry" element={<PlaceholderScreen title="Dry Settings" backRoute="/laundry" />} />
              <Route path="/laundry-store" element={<PlaceholderScreen title="Storage Options" backRoute="/laundry" />} />
              
              {/* Scheduler Feature */}
              <Route path="/scheduler" element={<SchedulerMenu />} />
              <Route path="/scheduler-add" element={<PlaceholderScreen title="Add Task" backRoute="/scheduler" />} />
              <Route path="/scheduler-view" element={<PlaceholderScreen title="View Schedule" backRoute="/scheduler" />} />
              <Route path="/scheduler-edit" element={<PlaceholderScreen title="Edit Tasks" backRoute="/scheduler" />} />
            </Routes>
          </div>
        </Router>
      )
    }
    
    export default App

