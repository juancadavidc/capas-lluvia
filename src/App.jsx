import { useState } from 'react'

const colors = [
  { name: 'Púrpura', hex: '#8b5cf6', code: 'purple' },
  { name: 'Negro', hex: '#1f2937', code: 'black' },
  { name: 'Azul', hex: '#3b82f6', code: 'blue' },
  { name: 'Verde', hex: '#10b981', code: 'green' },
  { name: 'Amarillo', hex: '#fbbf24', code: 'yellow' },
  { name: 'Rojo', hex: '#ef4444', code: 'red' },
]

function App() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">RainStyle</h1>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Carrito (0)
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center p-8" style={{ backgroundColor: `${selectedColor.hex}15` }}>
                <div className="text-center">
                  <div className="w-full h-96 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(to bottom, ${selectedColor.hex}30, ${selectedColor.hex}10)` }}>
                    <svg className="w-48 h-48" style={{ color: selectedColor.hex }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L3 7v3c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 18.5c-4.05-1.01-7-5.24-7-10V8l7-3.87V20.5z"/>
                    </svg>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Capa impermeable larga con capucha
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-full h-full rounded-lg" style={{ background: `linear-gradient(135deg, ${selectedColor.hex}20, ${selectedColor.hex}40)` }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Capa Impermeable Premium
              </h1>
              <p className="text-gray-600 text-lg">
                Protección total contra la lluvia con estilo
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">(128 reseñas)</span>
            </div>

            {/* Price */}
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-purple-600">$89.900</span>
                <span className="text-xl text-gray-500 line-through">$129.900</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -31%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Envío gratis a toda Colombia
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color: <span className="text-purple-600">{selectedColor.name}</span>
              </h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.code}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${
                      selectedColor.code === color.code
                        ? 'border-purple-600 scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Talla</h3>
              <div className="grid grid-cols-4 gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="py-3 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors font-semibold"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cantidad</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold"
                >
                  −
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
                Comprar Ahora
              </button>
              <button className="w-full bg-white text-purple-600 py-4 rounded-xl font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transition-colors">
                Agregar al Carrito
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">100% Impermeable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Entrega 1-3 días</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Pago seguro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Características del Producto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Protección Total</h3>
              <p className="text-gray-600">
                Material impermeable de alta calidad que te mantiene completamente seco incluso bajo lluvia intensa.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diseño Moderno</h3>
              <p className="text-gray-600">
                Estilo elegante y contemporáneo disponible en 6 colores vibrantes para combinar con tu outfit.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comodidad Premium</h3>
              <p className="text-gray-600">
                Largo completo con capucha amplia, bolsillos funcionales y material ligero pero resistente.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Especificaciones</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-700">Material</span>
                <span className="text-gray-600">PVC de alta densidad</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-700">Largo</span>
                <span className="text-gray-600">120 cm</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-700">Peso</span>
                <span className="text-gray-600">450 gramos</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-700">Tallas disponibles</span>
                <span className="text-gray-600">S, M, L, XL</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-700">Lavado</span>
                <span className="text-gray-600">Lavar a mano</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-700">Garantía</span>
                <span className="text-gray-600">30 días</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">RainStyle</h4>
              <p className="text-gray-400">
                Protección premium contra la lluvia con estilo.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Comprar</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Productos</li>
                <li>Ofertas</li>
                <li>Nuevo</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Ayuda</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Envíos</li>
                <li>Devoluciones</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Términos</li>
                <li>Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 RainStyle. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
