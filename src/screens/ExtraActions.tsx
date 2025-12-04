import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Sofa, Square, AlertCircle, Droplets, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const ExtraActions = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedActions, setSelectedActions] = useState<string[]>(state.extraActions || [])

  const extraActions = [
    { id: 'under-furniture', name: 'Clean Under Furniture', icon: Sofa, description: 'Move and clean under tables, chairs, and other furniture' },
    { id: 'baseboards', name: 'Include Baseboards', icon: Square, description: 'Clean along baseboards and edges' },
    { id: 'stains', name: 'Treat Stains', icon: AlertCircle, description: 'Identify and treat visible stains' },
    { id: 'stain-removal', name: 'Deep Stain Removal', icon: Droplets, description: 'Intensive stain treatment and removal' },
  ]

  const toggleAction = (actionId: string) => {
    if (selectedActions.includes(actionId)) {
      setSelectedActions(selectedActions.filter(id => id !== actionId))
    } else {
      setSelectedActions([...selectedActions, actionId])
    }
  }

  const handleNext = () => {
    setState({ ...state, extraActions: selectedActions })
    navigate('/product-selection')
  }

  const handleSkip = () => {
    setState({ ...state, extraActions: [] })
    navigate('/product-selection')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/method-selection')}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Extra Actions</h1>
            <p className="text-sm text-blue-100 mt-1">Optional additional cleaning tasks</p>
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
          <span className="text-blue-700 font-semibold">Step 5 of 6</span>
          <span className="text-blue-600">Extra Actions</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '83%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">
        <div className="flex-1 space-y-4 mb-6">
          {extraActions.map((action) => {
            const Icon = action.icon
            const isSelected = selectedActions.includes(action.id)
            return (
              <label
                key={action.id}
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
                    onChange={() => toggleAction(action.id)}
                    className="w-6 h-6 mr-4 flex-shrink-0 accent-blue-600 cursor-pointer"
                  />
                  <Icon className={`w-10 h-10 mr-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`text-xl font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{action.name}</h3>
                    <p className={`text-sm mt-1 ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>{action.description}</p>
                  </div>
                </div>
              </label>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            Continue
          </button>
          <button
            onClick={handleSkip}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold border-2 border-gray-300"
          >
            Skip Extra Actions
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExtraActions
