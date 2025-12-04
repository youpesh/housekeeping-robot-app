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
import LaundryCollect from './screens/LaundryCollect'
import LaundrySorting from './screens/LaundrySorting'
import LaundryWashSettings from './screens/LaundryWashSettings'
import LaundryDetergent from './screens/LaundryDetergent'
import LaundryAdditives from './screens/LaundryAdditives'
import LaundryDry from './screens/LaundryDry'
import LaundryTimer from './screens/LaundryTimer'
import LaundryStore from './screens/LaundryStore'
import SchedulerMenu from './screens/SchedulerMenu'
import SchedulerAdd from './screens/SchedulerAdd'
import SchedulerTaskName from './screens/SchedulerTaskName'
import SchedulerFrequency from './screens/SchedulerFrequency'
import SchedulerRooms from './screens/SchedulerRooms'
import SchedulerView from './screens/SchedulerView'
import SchedulerEdit from './screens/SchedulerEdit'
import CleaningMenu from './screens/CleaningMenu'
import CleaningRoomSelection from './screens/CleaningRoomSelection'
import ExtraActions from './screens/ExtraActions'
import AreaTypeSelection from './screens/AreaTypeSelection'

export interface AppState {
  selectedRooms: string[]
  floorType: string
  cleaningMethods: string[]
  surfaceMethods: string[]
  surfaces: string[]
  cleaningLevel: string
  tidyUp: boolean
  selectedProducts: string[]
  taskType: 'floor' | 'surface' | 'laundry' | ''
  extraActions: string[]
  areaType: string
  customPresets: {
    light: string[]
    medium: string[]
    deep: string[]
  }
  // Laundry state
  laundryCollectionLocation: string
  laundrySorting: {
    byColor: boolean
    byType: boolean
  }
  washSettings: {
    temperature: string
    loadSize: string
    detergent: string
    additives: string[]
  }
  drySettings: {
    setting: string
    timer: number
  }
  storageLocation: string
  // Scheduler state
  scheduledTasks: Array<{
    id: string
    name: string
    frequency: string
    rooms: string[]
    taskType: string
    enabled: boolean
  }>
  // Temporary task being created
  tempTask: {
    name: string
    taskType: 'floor' | 'surface' | 'laundry' | ''
    frequency: string
    rooms: string[]
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
    extraActions: [],
    areaType: '',
    customPresets: {
      light: ['Dust surfaces', 'Light vacuum', 'Quick sweep'],
      medium: ['Vacuum thoroughly', 'Mop floors', 'Wipe surfaces'],
      deep: ['Deep clean carpets', 'Polish surfaces', 'Move objects', 'Scrub floors']
    },
    laundryCollectionLocation: '',
    laundrySorting: {
      byColor: false,
      byType: false
    },
    washSettings: {
      temperature: '',
      loadSize: '',
      detergent: '',
      additives: []
    },
    drySettings: {
      setting: '',
      timer: 0
    },
    storageLocation: '',
    scheduledTasks: [],
    tempTask: {
      name: '',
      taskType: '',
      frequency: '',
      rooms: []
    }
  })

  return (
    <Router>
      <div className="mobile-container">
        <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/home" element={<Home />} />
              <Route path="/floor-plan" element={<FloorPlanUpload />} />
              <Route path="/room-selection" element={<RoomSelection state={appState} setState={setAppState} />} />
              <Route path="/house-setup-complete" element={<HouseSetupComplete />} />
              <Route path="/floor-type" element={<FloorTypeSelection state={appState} setState={setAppState} />} />
          <Route path="/method-selection" element={<MethodSelection state={appState} setState={setAppState} />} />
          <Route path="/extra-actions" element={<ExtraActions state={appState} setState={setAppState} />} />
          <Route path="/area-type" element={<AreaTypeSelection state={appState} setState={setAppState} />} />
          <Route path="/surface-cleaning" element={<SurfaceCleaning state={appState} setState={setAppState} />} />
          <Route path="/surface-method-selection" element={<SurfaceMethodSelection state={appState} setState={setAppState} />} />
          <Route path="/cleaning-level" element={<CleaningLevelPresets state={appState} setState={setAppState} />} />
          <Route path="/tidy-up" element={<TidyUpOption state={appState} setState={setAppState} />} />
          <Route path="/product-selection" element={<ProductSelection state={appState} setState={setAppState} />} />
          <Route path="/review" element={<ReviewConfirm state={appState} setState={setAppState} />} />
              <Route path="/progress" element={<Progress state={appState} />} />
              <Route path="/completion" element={<Completion />} />
              <Route path="/cancel-confirm" element={<CancelConfirm />} />
              
              {/* Cleaning Menu */}
              <Route path="/cleaning-menu" element={<CleaningMenu state={appState} setState={setAppState} />} />
              <Route path="/cleaning-room-selection" element={<CleaningRoomSelection state={appState} setState={setAppState} />} />
              
              {/* Laundry Feature */}
              <Route path="/laundry" element={<LaundryMenu />} />
              <Route path="/laundry-collect" element={<LaundryCollect state={appState} setState={setAppState} />} />
              <Route path="/laundry-sorting" element={<LaundrySorting state={appState} setState={setAppState} />} />
              <Route path="/laundry-wash-settings" element={<LaundryWashSettings state={appState} setState={setAppState} />} />
              <Route path="/laundry-detergent" element={<LaundryDetergent state={appState} setState={setAppState} />} />
              <Route path="/laundry-additives" element={<LaundryAdditives state={appState} setState={setAppState} />} />
              <Route path="/laundry-dry" element={<LaundryDry state={appState} setState={setAppState} />} />
              <Route path="/laundry-timer" element={<LaundryTimer state={appState} setState={setAppState} />} />
              <Route path="/laundry-store" element={<LaundryStore state={appState} setState={setAppState} />} />
              
              {/* Scheduler Feature */}
              <Route path="/scheduler" element={<SchedulerMenu />} />
              <Route path="/scheduler-add" element={<SchedulerAdd state={appState} setState={setAppState} />} />
              <Route path="/scheduler-task-name" element={<SchedulerTaskName state={appState} setState={setAppState} />} />
              <Route path="/scheduler-frequency" element={<SchedulerFrequency state={appState} setState={setAppState} />} />
              <Route path="/scheduler-rooms" element={<SchedulerRooms state={appState} setState={setAppState} />} />
              <Route path="/scheduler-view" element={<SchedulerView state={appState} />} />
              <Route path="/scheduler-edit" element={<SchedulerEdit state={appState} setState={setAppState} />} />
            </Routes>
          </div>
        </Router>
      )
    }
    
    export default App
