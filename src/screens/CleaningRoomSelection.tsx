import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const CleaningRoomSelection = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedRooms, setSelectedRooms] = useState<string[]>(state.selectedRooms || [])

  const rooms = [
    { id: 'living-room', name: 'Living Room', x: 20, y: 30, width: 35, height: 30 },
    { id: 'kitchen', name: 'Kitchen', x: 60, y: 30, width: 30, height: 25 },
    { id: 'bedroom-1', name: 'Bedroom 1', x: 20, y: 65, width: 30, height: 25 },
    { id: 'bedroom-2', name: 'Bedroom 2', x: 55, y: 65, width: 35, height: 25 },
  ]

  const toggleRoom = (roomId: string) => {
    if (selectedRooms.includes(roomId)) {
      setSelectedRooms(selectedRooms.filter(id => id !== roomId))
    } else {
      setSelectedRooms([...selectedRooms, roomId])
    }
  }

  const handleConfirm = () => {
    if (selectedRooms.length === 0) {
      alert('Please select at least one room')
      return
    }
    setState({ ...state, selectedRooms })
    
    // Navigate based on task type
    if (state.taskType === 'floor') {
      navigate('/floor-type')
    } else if (state.taskType === 'surface') {
      navigate('/surface-cleaning')
    } else {
      navigate('/cleaning-menu')
    }
  }

  const taskName = state.taskType === 'floor' ? 'Floor Cleaning' : 'Surface Cleaning'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/cleaning-menu')}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Select Rooms</h1>
            <p className="text-sm text-blue-100 mt-1">{taskName}</p>
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
          <span className="text-blue-700 font-semibold">Step 1 of {state.taskType === 'floor' ? '6' : '5'}</span>
          <span className="text-blue-600">Select Rooms</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${100 / (state.taskType === 'floor' ? 6 : 5)}%` }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">
        {/* Floor Plan Interactive Map */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 flex-shrink-0">
          <div className="relative w-full h-64 bg-gray-100 rounded-xl border-2 border-gray-300">
            {/* SVG Floor Plan */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Walls */}
              <rect x="15" y="25" width="75" height="70" fill="none" stroke="#666" strokeWidth="0.5" />
              <line x1="55" y1="25" x2="55" y2="60" stroke="#666" strokeWidth="0.5" />
              <line x1="15" y1="60" x2="90" y2="60" stroke="#666" strokeWidth="0.5" />
              <line x1="50" y1="60" x2="50" y2="95" stroke="#666" strokeWidth="0.5" />

              {/* Rooms */}
              {rooms.map((room) => (
                <g key={room.id} onClick={() => toggleRoom(room.id)} className="cursor-pointer">
                  <rect
                    x={room.x}
                    y={room.y}
                    width={room.width}
                    height={room.height}
                    fill={selectedRooms.includes(room.id) ? '#60a5fa' : '#f3f4f6'}
                    stroke={selectedRooms.includes(room.id) ? '#2563eb' : '#9ca3af'}
                    strokeWidth="0.8"
                    className="transition-all"
                    opacity={selectedRooms.includes(room.id) ? 0.8 : 0.6}
                  />
                  <text
                    x={room.x + room.width / 2}
                    y={room.y + room.height / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={selectedRooms.includes(room.id) ? 'white' : '#4b5563'}
                    fontSize="5"
                    fontWeight="bold"
                  >
                    {room.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Room List */}
        <div className="mb-4 flex-shrink-0">
          <h3 className="font-semibold text-gray-800 mb-3">Select Rooms ({selectedRooms.length})</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {rooms.map((room) => {
              const isSelected = selectedRooms.includes(room.id)
              return (
                <label
                  key={room.id}
                  className={`p-3 rounded-xl font-semibold cursor-pointer block ${
                    isSelected
                      ? 'bg-blue-50 border-2 border-blue-600'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleRoom(room.id)}
                      className="w-5 h-5 mr-3 flex-shrink-0 accent-blue-600 cursor-pointer"
                    />
                    <span className={`text-base ${isSelected ? 'text-blue-900 font-bold' : 'text-gray-800'}`}>
                      {room.name}
                    </span>
                  </div>
                </label>
              )
            })}
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          disabled={selectedRooms.length === 0}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
        >
          Continue ({selectedRooms.length} {selectedRooms.length === 1 ? 'room' : 'rooms'})
        </button>
      </div>
    </div>
  )
}

export default CleaningRoomSelection

