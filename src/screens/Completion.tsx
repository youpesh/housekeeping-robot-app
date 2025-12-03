import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Home, Check } from 'lucide-react'

const Completion = () => {
  const navigate = useNavigate()

  // Static completion data for Marvel prototype
  const actualTime = '42 minutes'
  const roomsCount = 3
  const cleaningLevel = 'medium'

  const handleHome = () => {
    navigate('/home')
  }


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-green-500 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-center">Cleaning Complete!</h1>
          </div>
          <button
            onClick={handleHome}
            className="ml-4"
          >
            <Home className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        {/* Success Animation */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-32 h-32 text-green-500" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">All Done!</h2>
          </div>
        </div>

        {/* Completion Details */}
        <div className="w-full max-w-md space-y-4 mb-8">
          <div className="bg-green-50 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Time Taken:</span>
                <span className="text-green-900 font-bold">{actualTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Rooms Cleaned:</span>
                <span className="text-green-900 font-bold">{roomsCount} rooms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Cleaning Level:</span>
                <span className="text-green-900 font-bold capitalize">{cleaningLevel}</span>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-white border-2 border-green-500 rounded-xl p-6 text-center">
            <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <p className="text-gray-700 font-semibold">
              All cleaning tasks completed successfully!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-md space-y-3">
          <button
            onClick={handleHome}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center"
          >
            <Home className="w-6 h-6 mr-2" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Completion

