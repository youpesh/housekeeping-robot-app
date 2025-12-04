import { useNavigate } from 'react-router-dom'
import { AppState } from '../App'
import { ArrowLeft, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const SchedulerAdd = ({ state, setState }: Props) => {
  const navigate = useNavigate()

  // Reset temp task when entering
  const handleStart = () => {
    setState({
      ...state,
      tempTask: {
        name: '',
        taskType: '',
        frequency: '',
        rooms: []
      }
    })
    navigate('/scheduler-task-name')
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
            <p className="text-sm text-blue-100 mt-1">Create a new scheduled task</p>
          </div>
          <button
            onClick={() => navigate('/home')}
            className="ml-4"
          >
            <Home className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-md text-center">
          <p className="text-lg text-gray-700 mb-6">Create a new scheduled task in 3 simple steps</p>
          <button
            onClick={handleStart}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            Start Creating Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default SchedulerAdd

