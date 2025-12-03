import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Home, Save } from 'lucide-react'
import { AppState } from '../App'

interface HouseSetupCompleteProps {
  state: AppState
}

const HouseSetupComplete = ({ state }: HouseSetupCompleteProps) => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/home')
  }

  const handleStartCleaning = () => {
    navigate('/cleaning-menu')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-green-500 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-center">House Setup Complete!</h1>
          </div>
          <button
            onClick={handleGoHome}
            className="ml-4"
          >
            <Home className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-32 h-32 text-green-500" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Setup Saved!</h2>
          </div>
        </div>

        {/* Setup Summary */}
        <div className="w-full max-w-md space-y-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Home className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="font-bold text-lg">Configuration Saved</h3>
              </div>
            </div>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-semibold">Floor Plan:</span>
                <span className="text-blue-600 font-bold">Uploaded</span>
              </div>
              <p className="text-sm text-gray-600 pt-2">
                Your floor plan has been saved. You can select rooms when starting a cleaning task.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
            <div className="flex items-start">
              <Save className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-blue-800 text-base">
                Your house configuration has been saved. You can now start cleaning tasks.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-md space-y-3">
          <button
            onClick={handleStartCleaning}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Start Cleaning Now
          </button>

          <button
            onClick={handleGoHome}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-bold shadow-lg border-2 border-gray-300 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default HouseSetupComplete

