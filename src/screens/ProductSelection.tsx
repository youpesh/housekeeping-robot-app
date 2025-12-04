import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Sparkles, Wind, Droplets, SprayCan, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const ProductSelection = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedProducts, setSelectedProducts] = useState<string[]>(state.selectedProducts)

  // Product selection based on cleaning methods (floor or surface)
  const getProductsForMethods = () => {
    const products = []
    const methods = state.taskType === 'floor' ? state.cleaningMethods : state.surfaceMethods
    
    // If no cleaning methods selected (e.g., direct navigation for Marvel screenshots),
    // show demo products
    if (!methods || methods.length === 0) {
      return [
        { id: 'vacuum', name: 'Vacuum', category: 'Cleaning Tools', icon: Wind },
        { id: 'mop', name: 'Mop & Bucket', category: 'Cleaning Tools', icon: Droplets },
        { id: 'polish', name: 'Polish & Scrub Brush', category: 'Cleaning Tools', icon: Sparkles },
        { id: 'cleaning-solution', name: 'Cleaning Solution', category: 'Cleaning Supplies', icon: SprayCan }
      ]
    }
    
    if (methods.includes('mop')) {
      products.push(
        { id: 'mop', name: 'Mop & Bucket', category: 'Cleaning Tools', icon: Droplets }
      )
    }
    
    if (methods.includes('vacuum') || methods.includes('steam-vacuum')) {
      products.push(
        { id: 'vacuum', name: 'Vacuum', category: 'Cleaning Tools', icon: Wind }
      )
    }
    
    if (methods.includes('polish') || methods.includes('scrub')) {
      products.push(
        { id: 'polish', name: 'Polish & Scrub Brush', category: 'Cleaning Tools', icon: Sparkles }
      )
    }

    if (methods.includes('spot-clean')) {
      products.push(
        { id: 'spot-cleaner', name: 'Spot Cleaner', category: 'Cleaning Tools', icon: Droplets }
      )
    }

    if (methods.includes('carpet-freshener')) {
      products.push(
        { id: 'freshener', name: 'Carpet Freshener', category: 'Cleaning Tools', icon: Sparkles }
      )
    }

    // Surface cleaning specific products
    if (state.taskType === 'surface') {
      if (methods.includes('dust')) {
        products.push(
          { id: 'duster', name: 'Duster', category: 'Cleaning Tools', icon: Sparkles }
        )
      }
      if (methods.includes('wipe')) {
        products.push(
          { id: 'cleaning-cloth', name: 'Cleaning Cloth', category: 'Cleaning Tools', icon: Droplets }
        )
      }
      if (methods.includes('sanitize')) {
        products.push(
          { id: 'sanitizer', name: 'Sanitizer', category: 'Cleaning Supplies', icon: SprayCan }
        )
      }
    }

    // Always include general cleaning supplies
    products.push(
      { id: 'cleaning-solution', name: 'Cleaning Solution', category: 'Cleaning Supplies', icon: SprayCan }
    )

    return products
  }

  const products = getProductsForMethods()
  const floorStep = 5
  const floorTotal = 6
  const surfaceStep = 5
  const surfaceTotal = 7
  const currentStep = state.taskType === 'floor' ? floorStep : surfaceStep
  const totalSteps = state.taskType === 'floor' ? floorTotal : surfaceTotal
  const progressWidth = (currentStep / totalSteps) * 100

  const toggleProduct = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId))
    } else {
      setSelectedProducts([...selectedProducts, productId])
    }
  }

  const handleNext = () => {
    if (selectedProducts.length === 0) {
      alert('Please select at least one product')
      return
    }
    setState({ ...state, selectedProducts })
    if (state.taskType === 'floor') {
      navigate('/review')
    } else {
      navigate('/tidy-up')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => {
              if (state.taskType === 'floor') {
                navigate('/extra-actions')
              } else {
                navigate('/surface-method-selection')
              }
            }}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Select Products</h1>
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
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-blue-600">Select Products</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">

        <div className="space-y-4 mb-6 flex-1">
          {products.map((product) => {
            const Icon = product.icon
            const isSelected = selectedProducts.includes(product.id)
            return (
              <label
                key={product.id}
                className={`w-full p-6 rounded-xl shadow-lg cursor-pointer block ${
                  isSelected
                    ? 'bg-blue-50 border-2 border-blue-600'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleProduct(product.id)}
                    className="w-6 h-6 mr-4 flex-shrink-0 accent-blue-600 cursor-pointer"
                  />
                  <Icon className={`w-10 h-10 mr-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`text-lg font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{product.name}</h3>
                  </div>
                </div>
              </label>
            )
          })}
        </div>


        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={selectedProducts.length === 0}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Review & Confirm
        </button>
      </div>
    </div>
  )
}

export default ProductSelection
