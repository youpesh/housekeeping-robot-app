import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Construction, Home } from 'lucide-react'

interface PlaceholderScreenProps {
  title: string
  backRoute: string
}

const PlaceholderScreen = ({ title, backRoute }: PlaceholderScreenProps) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate(backRoute)}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{title}</h1>
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
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <Construction className="w-32 h-32 text-gray-400 mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Feature Placeholder</h2>
        <p className="text-gray-600 text-center max-w-md">
          This screen will be developed next. Use this for Marvel prototype navigation.
        </p>
        
        <button
          onClick={() => navigate(backRoute)}
          className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default PlaceholderScreen

