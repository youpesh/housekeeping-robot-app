import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Package, Droplets, Wind, Home as HomeIcon } from 'lucide-react'

const LaundryMenu = () => {
  const navigate = useNavigate()

  const laundryOptions = [
    { id: 1, name: 'Collect Laundry', icon: Package, route: '/laundry-collect' },
    { id: 2, name: 'Wash Settings', icon: Droplets, route: '/laundry-wash-settings' },
    { id: 3, name: 'Dry Settings', icon: Wind, route: '/laundry-dry' },
    { id: 4, name: 'Storage Options', icon: HomeIcon, route: '/laundry-store' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/home')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Laundry Assistance</h1>
          </div>
          <button
            onClick={() => navigate('/home')}
            className="ml-4"
          >
            <HomeIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          {laundryOptions.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => navigate(option.route)}
                className="w-full p-6 rounded-2xl shadow-lg bg-white hover:bg-gray-50 text-left"
              >
                <div className="flex items-center">
                  <Icon className="w-8 h-8 mr-4 flex-shrink-0 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{option.name}</h3>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LaundryMenu
