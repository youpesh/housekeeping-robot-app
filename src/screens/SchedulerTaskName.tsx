import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const SchedulerTaskName = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [taskName, setTaskName] = useState('')
  const [taskType, setTaskType] = useState<'floor' | 'surface' | 'laundry'>('floor')

  const handleNext = () => {
    if (!taskName) {
      alert('Please enter a task name')
      return
    }
    setState({
      ...state,
      tempTask: {
        name: taskName,
        taskType,
        frequency: '',
        rooms: []
      }
    })
    navigate('/scheduler-frequency')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/scheduler')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Add Task</h1>
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
          <span className="text-blue-700 font-semibold">Step 1 of 3</span>
          <span className="text-blue-600">Task Name & Type</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Task Name */}
        <div className="mb-6">
          <label className="block text-xl font-bold text-gray-800 mb-4">Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="e.g., Weekly Deep Clean"
            className="w-full p-4 rounded-xl border-2 border-gray-300 text-lg"
          />
        </div>

        {/* Task Type */}
        <div className="mb-6">
          <label className="block text-xl font-bold text-gray-800 mb-4">Task Type</label>
          <div className="space-y-3">
            {[
              { id: 'floor', name: 'Floor Cleaning' },
              { id: 'surface', name: 'Surface Cleaning' },
              { id: 'laundry', name: 'Laundry' },
            ].map((type) => (
              <label
                key={type.id}
                className={`flex items-center p-4 rounded-xl shadow-lg cursor-pointer ${
                  taskType === type.id ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="taskType"
                  value={type.id}
                  checked={taskType === type.id}
                  onChange={(e) => setTaskType(e.target.value as 'floor' | 'surface' | 'laundry')}
                  className="w-6 h-6 mr-4 accent-blue-600"
                />
                <span className="text-lg font-semibold">{type.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleNext}
            disabled={!taskName}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Frequency
          </button>
        </div>
      </div>
    </div>
  )
}

export default SchedulerTaskName

