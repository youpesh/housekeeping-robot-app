import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Home as HomeIcon, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const SchedulerRooms = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedRooms, setSelectedRooms] = useState<string[]>(state.tempTask.rooms || [])

  const rooms = [
    { id: 'living-room', name: 'Living Room' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bedroom-1', name: 'Bedroom 1' },
    { id: 'bedroom-2', name: 'Bedroom 2' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'all', name: 'All Rooms' },
  ]

  const toggleRoom = (roomId: string) => {
    if (roomId === 'all') {
      setSelectedRooms(rooms.filter(r => r.id !== 'all').map(r => r.id))
    } else {
      if (selectedRooms.includes(roomId)) {
        setSelectedRooms(selectedRooms.filter(id => id !== roomId))
      } else {
        setSelectedRooms([...selectedRooms, roomId])
      }
    }
  }

  const handleSave = () => {
    if (selectedRooms.length === 0) {
      alert('Please select at least one room')
      return
    }
    const newTask = {
      id: Date.now().toString(),
      name: state.tempTask.name,
      frequency: state.tempTask.frequency,
      rooms: selectedRooms,
      taskType: state.tempTask.taskType,
      enabled: true
    }
    setState({
      ...state,
      scheduledTasks: [...state.scheduledTasks, newTask],
      tempTask: {
        name: '',
        taskType: '',
        frequency: '',
        rooms: []
      }
    })
    navigate('/scheduler')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/scheduler-frequency')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Select Rooms</h1>
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
          <span className="text-blue-700 font-semibold">Step 3 of 3</span>
          <span className="text-blue-600">Select Rooms</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="space-y-3 mb-6">
          {rooms.map((room) => {
            const isSelected = selectedRooms.includes(room.id) || (room.id === 'all' && selectedRooms.length === rooms.length - 1)
            return (
              <label
                key={room.id}
                className={`flex items-center p-4 rounded-xl shadow-lg cursor-pointer ${
                  isSelected ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleRoom(room.id)}
                  className="w-6 h-6 mr-4 accent-blue-600"
                />
                <HomeIcon className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg font-semibold">{room.name}</span>
              </label>
            )
          })}
        </div>

        <div className="mt-auto">
          <button
            onClick={handleSave}
            disabled={selectedRooms.length === 0}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default SchedulerRooms

