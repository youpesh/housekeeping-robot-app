import { useNavigate } from 'react-router-dom'
import { Bot, Sparkles } from 'lucide-react'

const Splash = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer" onClick={handleStart}>
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full opacity-10"></div>
      </div>

      {/* Logo and branding */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none">
        {/* Robot icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Bot className="w-20 h-20 text-blue-600" />
          </div>
          {/* Sparkles around the robot */}
          <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-2 -right-2" />
          <Sparkles className="w-6 h-6 text-yellow-300 absolute -bottom-2 -left-2" />
        </div>

        {/* App name */}
        <h1 className="text-5xl font-bold text-white mb-8">
          CleanMate
        </h1>

        {/* Tap to continue */}
        <button 
          onClick={handleStart}
          className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl pointer-events-auto"
        >
          Tap to Start
        </button>
      </div>
    </div>
  )
}

export default Splash

