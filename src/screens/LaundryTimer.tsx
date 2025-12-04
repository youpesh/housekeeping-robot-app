import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Clock, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundryTimer = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [timer, setTimer] = useState(state.drySettings.timer || 0)

  const handleNext = () => {
    setState({
      ...state,
      drySettings: {
        ...state.drySettings,
        timer
      }
    })
    navigate('/laundry-store')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/laundry-dry')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Dry Timer</h1>
            <p className="text-sm text-blue-100 mt-1">Set drying time</p>
          </div>
          <button
            onClick={() => navigate('/home')}
            className="ml-4"
          >
            <Home className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-blue-50 px-6 py-3 border-b border-blue-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-700 font-semibold">Step 7 of 8</span>
          <span className="text-blue-600">Dry Timer</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '87.5%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-6">
            <Clock className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Timer (minutes)</h2>
            <p className="text-gray-600">Set how long to dry</p>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <button
              onClick={() => setTimer(Math.max(0, timer - 5))}
              className="w-16 h-16 rounded-xl bg-gray-200 text-gray-700 font-bold text-2xl hover:bg-gray-300"
            >
              -
            </button>
            <div className="text-center">
              <input
                type="number"
                value={timer}
                onChange={(e) => setTimer(Math.max(0, parseInt(e.target.value) || 0))}
                min="0"
                className="w-32 h-16 text-center text-4xl font-bold border-2 border-gray-300 rounded-xl"
              />
              <p className="text-sm text-gray-600 mt-2">
                {timer === 0 ? 'Auto-dry (until dry)' : `${timer} minutes`}
              </p>
            </div>
            <button
              onClick={() => setTimer(timer + 5)}
              className="w-16 h-16 rounded-xl bg-gray-200 text-gray-700 font-bold text-2xl hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            Continue to Storage Options
          </button>
        </div>
      </div>
    </div>
  )
}

export default LaundryTimer

