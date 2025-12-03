import { useNavigate } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, X, Home } from 'lucide-react'

const CancelConfirm = () => {
  const navigate = useNavigate()

  const handleConfirmCancel = () => {
    navigate('/home')
  }

  const handleGoBack = () => {
    navigate('/progress')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Warning Icon */}
      <div className="mb-6 flex justify-center">
        <AlertTriangle className="w-24 h-24 text-amber-500" />
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Cancel Cleaning?
        </h1>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoBack}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Cleaning
          </button>
          
          <button
            onClick={handleConfirmCancel}
            className="w-full bg-red-500 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center"
          >
            <X className="w-5 h-5 mr-2" />
            Yes, Cancel Cleaning
          </button>
        </div>
      </div>
    </div>
  )
}

export default CancelConfirm

