import { useNavigate } from 'react-router-dom'
import { AppState } from '../App'
import { ArrowLeft, Trash2, Edit, ToggleLeft, ToggleRight, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const SchedulerEdit = ({ state, setState }: Props) => {
  const navigate = useNavigate()

  const toggleTask = (taskId: string) => {
    setState({
      ...state,
      scheduledTasks: state.scheduledTasks.map(task =>
        task.id === taskId ? { ...task, enabled: !task.enabled } : task
      )
    })
  }

  const deleteTask = (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setState({
        ...state,
        scheduledTasks: state.scheduledTasks.filter(task => task.id !== taskId)
      })
    }
  }

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
            <h1 className="text-2xl font-bold">Edit Tasks</h1>
            <p className="text-sm text-blue-100 mt-1">Manage your scheduled tasks</p>
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
            <Edit className="w-24 h-24 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Tasks to Edit</h2>
            <p className="text-gray-600 mb-6">Add tasks first to edit them</p>
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
                    <p className="text-sm text-gray-600 mt-1">{getFrequencyLabel(task.frequency)} • {task.rooms.length} {task.rooms.length === 1 ? 'room' : 'rooms'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mt-4">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-semibold ${
                      task.enabled
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {task.enabled ? (
                      <>
                        <ToggleRight className="w-5 h-5 mr-2" />
                        Enabled
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="w-5 h-5 mr-2" />
                        Disabled
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex items-center px-4 py-2 rounded-xl font-semibold bg-red-100 text-red-700"
                  >
                    <Trash2 className="w-5 h-5 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SchedulerEdit
