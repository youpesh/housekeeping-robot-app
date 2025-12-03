import { useNavigate } from 'react-router-dom'
import { AppState } from '../App'
import { ArrowLeft, CheckCircle, SkipForward, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const TidyUpOption = ({ state, setState }: Props) => {
  const navigate = useNavigate()

  const handleSelect = (choice: boolean) => {
    setState({ ...state, tidyUp: choice })
    navigate('/product-selection')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/cleaning-level')}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Tidy Up First?</h1>
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
          <span className="text-blue-700 font-semibold">
            Step {state.taskType === 'floor' ? '4' : '3'} of {state.taskType === 'floor' ? '6' : '5'}
          </span>
          <span className="text-blue-600">Tidy Up Option</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${(state.taskType === 'floor' ? 4 : 3) / (state.taskType === 'floor' ? 6 : 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">

        {/* Options */}
        <div className="w-full max-w-md space-y-4">
          <label className="w-full p-8 rounded-2xl shadow-lg bg-white hover:bg-gray-50 border-2 border-gray-200 cursor-pointer block">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="tidyUp"
                value="yes"
                onChange={() => handleSelect(true)}
                className="w-6 h-6 mr-3 flex-shrink-0 accent-blue-600 cursor-pointer"
              />
              <h3 className="text-2xl font-bold text-gray-800">Yes, Tidy Up First</h3>
            </div>
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-blue-600" />
            </div>
          </label>

          <label className="w-full p-8 rounded-2xl shadow-lg bg-white hover:bg-gray-50 border-2 border-gray-200 cursor-pointer block">
            <div className="flex items-center mb-4">
              <input
                type="radio"
                name="tidyUp"
                value="no"
                onChange={() => handleSelect(false)}
                className="w-6 h-6 mr-3 flex-shrink-0 accent-blue-600 cursor-pointer"
              />
              <h3 className="text-2xl font-bold text-gray-800">No, Skip Tidying</h3>
            </div>
            <div className="flex justify-center">
              <SkipForward className="w-16 h-16 text-blue-600" />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default TidyUpOption

