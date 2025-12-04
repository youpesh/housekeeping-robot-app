import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Repeat, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const SchedulerFrequency = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [frequency, setFrequency] = useState(state.tempTask.frequency || '')

  const frequencies = [
    { id: 'once', name: 'Once' },
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'biweekly', name: 'Bi-weekly' },
    { id: 'monthly', name: 'Monthly' },
  ]

  const handleNext = () => {
    if (!frequency) {
      alert('Please select a frequency')
      return
    }
    setState({
      ...state,
      tempTask: {
        ...state.tempTask,
        frequency
      }
    })
    navigate('/scheduler-rooms')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/scheduler-task-name')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Frequency</h1>
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
          <span className="text-blue-700 font-semibold">Step 2 of 3</span>
          <span className="text-blue-600">Frequency</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="space-y-4 mb-6">
          {frequencies.map((freq) => (
            <label
              key={freq.id}
              className={`flex items-center p-6 rounded-2xl shadow-lg cursor-pointer ${
                frequency === freq.id ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="frequency"
                value={freq.id}
                checked={frequency === freq.id}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-6 h-6 mr-4 accent-blue-600"
              />
              <Repeat className="w-10 h-10 mr-4 text-blue-600" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{freq.name}</h3>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-auto">
          <button
            onClick={handleNext}
            disabled={!frequency}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Rooms
          </button>
        </div>
      </div>
    </div>
  )
}

export default SchedulerFrequency
