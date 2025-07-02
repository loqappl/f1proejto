import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Instagram, 
  Facebook, 
  Twitter,
  Star
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  year: string;
  team: string;
  driver: string;
  price: string;
  image: string;
  teamColor: string;
  accentColor: string;
}

const F1LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  useEffect(() => {
    console.log('[LandingF1] Component mounted');
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log('[LandingF1] Loading complete');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const products: Product[] = [
    {
      id: 'red-bull-rb19',
      name: 'McDonalds F1',
      year: '2023',
      team: 'Vermelho',
      driver: 'Max Verstappen',
      price: 'R$ 199,90',
      image: '/src/images/vermelha.webp',
      teamColor: 'from-blue-900 to-red-600',
      accentColor: 'border-blue-500'
    },
    {
      id: 'mclaren-mcl60',
      name: 'APXGP F1',
      year: '2023',
      team: 'Preto',
      driver: 'Lando Norris',
      price: 'R$ 179,90',
      image: '/src/images/preta.webp',
      teamColor: 'from-orange-500 to-blue-600',
      accentColor: 'border-orange-500'
    }
  ];



  const handleProductClick = (productId: string) => {
    console.log('[LandingF1] Product clicked:', productId);
    // Here you would navigate to /produto/[id]
    alert(`Redirecionando para produto: ${productId}`);
  };

  const handleCTAClick = () => {
    console.log('[LandingF1] CTA clicked');
    // Here you would navigate to checkout or product selection
    alert('Redirecionando para checkout...');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Titillium_Web']">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/12789667/pexels-photo-12789667.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-['Orbitron'] text-4xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-wider">
              Não achou a sua mini <span className="text-red-600">F1</span> do McDonald's?
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-300 font-semibold">
              A gente correu por você e garantiu o estoque.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleCTAClick}
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                COMPRAR AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-gray-300">4.9/5 (2.847 avaliações)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Orbitron'] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Coleção completa
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Miniaturas exclusivas para você que perdeu a sua no drive-thru!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative bg-gradient-to-br ${product.teamColor} p-1 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <div className="bg-gray-900 rounded-xl p-6 h-full">
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.teamColor}`}></div>
                        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                          {product.team}
                        </span>
                      </div>
                      
                      <h3 className="font-['Orbitron'] text-2xl lg:text-3xl font-bold mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-400 mb-2">
                        {product.year} • {product.driver}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-red-500">
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          R$ {parseInt(product.price.replace('R$ ', '').replace(',', '')) + 50},90
                        </span>
                      </div>
                      
                      <button
                        onClick={() => handleProductClick(product.id)}
                        className={`w-full lg:w-auto px-6 py-3 bg-white text-black font-bold rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-lg transform hover:-translate-y-1 ${activeProduct === product.id ? 'animate-pulse' : ''}`}
                      >
                        Comprar
                      </button>
                    </div>
                    
                    <div className="flex-1 relative">
                      <div className="relative transform transition-transform duration-500 group-hover:rotate-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Orbitron'] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Veja a <span className="text-red-600">DIFERENÇA</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conheça a qualidade das nossas miniaturas F1
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <video
                controls
                className="w-full h-full object-cover"
                poster=""
              >
                <source src="/src/images/video.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
            
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl opacity-20 blur-lg animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-red-600" />
                <span className="font-['Orbitron'] text-xl font-bold">F1 Miniaturas</span>
              </div>
              <p className="text-gray-400 text-sm">
                A emoção da Fórmula 1 em miniaturas colecionáveis de alta qualidade.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 F1 Miniaturas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default F1LandingPage;