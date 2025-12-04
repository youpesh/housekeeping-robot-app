import { useNavigate } from 'react-router-dom'
import { Sparkles, Home as HomeIcon, Bot, ShoppingBasket, Calendar } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()

  const menuItems = [
    {
      id: 1,
      title: 'House Setup',
      icon: HomeIcon,
      description: 'Configure rooms and floor plan',
      route: '/floor-plan'
    },
    {
      id: 2,
      title: 'Floor & Surface Cleaning',
      icon: Sparkles,
      description: 'Clean floors and surfaces',
      route: '/cleaning-menu'
    },
    {
      id: 3,
      title: 'Laundry Assistance',
      icon: ShoppingBasket,
      description: 'Collect, wash, dry, and store',
      route: '/laundry-collect'
    },
    {
      id: 4,
      title: 'Task Scheduler',
      icon: Calendar,
      description: 'Schedule and manage tasks',
      route: '/scheduler'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Bot className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center">CleanMate</h1>
      </div>

      {/* Main Menu */}
      <div className="flex-1 p-6">
        
        <div className="space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.route)}
                className="w-full p-6 rounded-2xl shadow-lg text-left bg-white hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Icon className="w-8 h-8 mr-4 flex-shrink-0 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
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

export default Home

