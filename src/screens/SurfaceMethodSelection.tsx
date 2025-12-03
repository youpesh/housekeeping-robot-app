import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Sparkles, Droplets, Wind, Target, Waves, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const SurfaceMethodSelection = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedMethods, setSelectedMethods] = useState<string[]>(state.surfaceMethods || [])

  const methods = [
    { id: 'dust', name: 'Dust', icon: Sparkles },
    { id: 'wipe', name: 'Wipe', icon: Droplets },
    { id: 'polish', name: 'Polish', icon: Sparkles },
    { id: 'sanitize', name: 'Sanitize', icon: Target },
  ]

  const toggleMethod = (methodId: string) => {
    if (selectedMethods.includes(methodId)) {
      setSelectedMethods(selectedMethods.filter(id => id !== methodId))
    } else {
      setSelectedMethods([...selectedMethods, methodId])
    }
  }

  const handleNext = () => {
    if (selectedMethods.length === 0) {
      alert('Please select at least one cleaning method')
      return
    }
    setState({ ...state, surfaceMethods: selectedMethods })
    navigate('/cleaning-level')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/surface-cleaning')}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Surface Cleaning Methods</h1>
            <p className="text-sm text-blue-100 mt-1">Select cleaning methods for surfaces</p>
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
          <span className="text-blue-700 font-semibold">Step 2 of 5</span>
          <span className="text-blue-600">Select Methods</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">
        <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
          {methods.map((method) => {
            const Icon = method.icon
            const isSelected = selectedMethods.includes(method.id)
            return (
              <label
                key={method.id}
                className={`w-full p-6 rounded-2xl shadow-lg cursor-pointer block ${
                  isSelected
                    ? 'bg-blue-50 border-2 border-blue-600'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleMethod(method.id)}
                    className="w-6 h-6 mr-4 flex-shrink-0 accent-blue-600 cursor-pointer"
                  />
                  <Icon className={`w-10 h-10 mr-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`text-xl font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{method.name}</h3>
                  </div>
                </div>
              </label>
            )
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={selectedMethods.length === 0}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Cleaning Level
        </button>
      </div>
    </div>
  )
}

export default SurfaceMethodSelection

