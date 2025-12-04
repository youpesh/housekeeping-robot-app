import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Palette, Shirt, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundrySorting = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [sorting, setSorting] = useState({
    byColor: state.laundrySorting.byColor || false,
    byType: state.laundrySorting.byType || false
  })

  const handleNext = () => {
    setState({
      ...state,
      laundrySorting: sorting
    })
    navigate('/laundry-wash-settings')
  }

  const handleSkip = () => {
    setState({
      ...state,
      laundrySorting: { byColor: false, byType: false }
    })
    navigate('/laundry-wash-settings')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/laundry-collect')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Sorting Options</h1>
            <p className="text-sm text-blue-100 mt-1">How should laundry be sorted?</p>
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
          <span className="text-blue-700 font-semibold">Step 2 of 8</span>
          <span className="text-blue-600">Sorting Options</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="space-y-4 mb-6">
          <label className="flex items-center p-6 bg-white rounded-2xl shadow-lg cursor-pointer border-2 border-gray-200 hover:border-blue-400">
            <input
              type="checkbox"
              checked={sorting.byColor}
              onChange={(e) => setSorting({ ...sorting, byColor: e.target.checked })}
              className="w-6 h-6 mr-4 accent-blue-600"
            />
            <Palette className="w-10 h-10 mr-4 text-blue-600" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">Sort by Color</h3>
              <p className="text-sm text-gray-600 mt-1">Separate whites from colors</p>
            </div>
          </label>
          
          <label className="flex items-center p-6 bg-white rounded-2xl shadow-lg cursor-pointer border-2 border-gray-200 hover:border-blue-400">
            <input
              type="checkbox"
              checked={sorting.byType}
              onChange={(e) => setSorting({ ...sorting, byType: e.target.checked })}
              className="w-6 h-6 mr-4 accent-blue-600"
            />
            <Shirt className="w-10 h-10 mr-4 text-blue-600" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">Sort by Type</h3>
              <p className="text-sm text-gray-600 mt-1">Separate delicate from heavy fabrics</p>
            </div>
          </label>
        </div>

        <div className="mt-auto space-y-3">
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            Continue to Wash Settings
          </button>
          <button
            onClick={handleSkip}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold border-2 border-gray-300"
          >
            Skip Sorting
          </button>
        </div>
      </div>
    </div>
  )
}

export default LaundrySorting

