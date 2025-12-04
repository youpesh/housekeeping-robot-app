import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Home, Upload, Image } from 'lucide-react'

const FloorPlanUpload = () => {
  const navigate = useNavigate()

  const handleUpload = () => {
    // Simulate upload - floor plan is saved, go to setup complete
    // Room selection will happen in the cleaning feature, not during setup
    navigate('/house-setup-complete')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/home')}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Upload Floor Plan</h1>
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
      <div className="flex-1 p-6 flex flex-col">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Upload Your Floor Plan</h2>
        </div>

        {/* Upload Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md border-4 border-dashed border-blue-300 rounded-2xl p-8 bg-white transition-colors cursor-pointer"
               onClick={handleUpload}>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Upload className="w-16 h-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Tap to Upload
              </h3>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              Use Sample Floor Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloorPlanUpload
