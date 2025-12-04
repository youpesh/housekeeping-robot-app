import { useNavigate } from 'react-router-dom'
import { AppState } from '../App'
import { ArrowLeft, Calendar, Repeat, CheckCircle, XCircle, Home } from 'lucide-react'

interface Props {
  state: AppState
}

const SchedulerView = ({ state }: Props) => {
  const navigate = useNavigate()

  const getFrequencyLabel = (freq: string) => {
    const labels: Record<string, string> = {
      'once': 'Once',
      'daily': 'Daily',
      'weekly': 'Weekly',
      'biweekly': 'Bi-weekly',
      'monthly': 'Monthly'
    }
    return labels[freq] || freq
  }

  const getTaskTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'floor': 'Floor Cleaning',
      'surface': 'Surface Cleaning',
      'laundry': 'Laundry'
    }
    return labels[type] || type
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
            <h1 className="text-2xl font-bold">View Schedule</h1>
            <p className="text-sm text-blue-100 mt-1">Your scheduled tasks</p>
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
      <div className="flex-1 p-6 overflow-y-auto">
        {state.scheduledTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Calendar className="w-24 h-24 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Scheduled Tasks</h2>
            <p className="text-gray-600 mb-6">Add tasks to see them here</p>
            <button
              onClick={() => navigate('/scheduler-add')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Add Task
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {state.scheduledTasks.map((task) => (
              <div
                key={task.id}
                className={`p-6 rounded-2xl shadow-lg ${
                  task.enabled ? 'bg-white border-2 border-blue-200' : 'bg-gray-100 border-2 border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{task.name}</h3>
                    <p className="text-sm text-gray-600">{getTaskTypeLabel(task.taskType)}</p>
                  </div>
                  {task.enabled ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Repeat className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="font-semibold">{getFrequencyLabel(task.frequency)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Home className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{task.rooms.length} {task.rooms.length === 1 ? 'room' : 'rooms'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SchedulerView
