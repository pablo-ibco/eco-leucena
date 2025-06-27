import React from 'react';
import { ArrowRight, Leaf, MapPin, Scaling as Seedling, Book, TowerControl as GameController, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}> = ({ title, description, icon, to }) => {
  return (
    <Link 
      to={to}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border-l-4 border-green-600"
    >
      <div className="text-green-700 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="mt-4 flex items-center text-green-700 font-medium">
        <span>Saiba mais</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </Link>
  );
};

const SoilTypeCard: React.FC<{
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}> = ({ title, description, details, icon }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-green-100 hover:border-green-300 transition-colors">
      <div className="flex items-start mb-3">
        <div className="bg-green-100 rounded-full p-2 mr-3 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <p className="text-xs text-green-700">{details}</p>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Gerencie a Leucena de Forma Sustentável
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-100">
              Identifique, aprenda a manejar e aproveite todos os benefícios da Leucena enquanto protege o meio ambiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/mapa" 
                className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
              >
                Explorar Mapa
              </Link>
              <Link 
                to="/manejo" 
                className="bg-white hover:bg-green-100 text-green-800 py-3 px-6 rounded-md font-medium transition-colors duration-300"
              >
                Técnicas de Manejo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Recursos Principais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Mapa Inteligente" 
              description="Identifique rapidamente áreas com excesso de Leucena e acompanhe o manejo ao longo do tempo."
              icon={<MapPin className="h-10 w-10" />}
              to="/mapa"
            />
            <FeatureCard 
              title="Técnicas de Manejo" 
              description="Aprenda a fazer podas corretas e utilizar a Leucena para produção de ração, feno e adubo."
              icon={<Leaf className="h-10 w-10" />}
              to="/manejo"
            />
            <FeatureCard 
              title="Calculadora de Reflorestamento" 
              description="Calcule a quantidade de mudas e espécies nativas necessárias para recuperar áreas degradadas."
              icon={<Seedling className="h-10 w-10" />}
              to="/reflorestamento"
            />
            <FeatureCard 
              title="Recursos Educativos" 
              description="Acesse informações detalhadas sobre a Leucena, suas características e benefícios para o meio ambiente."
              icon={<Book className="h-10 w-10" />}
              to="/recursos"
            />
            <FeatureCard 
              title="Eco Game" 
              description="Aprenda de forma divertida como manejar a Leucena e cuidar do meio ambiente através de um jogo educativo."
              icon={<GameController className="h-10 w-10" />}
              to="/jogo"
            />
          </div>
        </div>
      </section>

      {/* About Leucena Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://i0.wp.com/arquiflora.rio/wp-content/uploads/2019/08/EI-leucaena-leucocephala.png?fit=700%2C400&ssl=1" 
                alt="Leucaena leucocephala - árvore com folhas bipinadas características e flores brancas globosas" 
                className="rounded-lg shadow-md object-cover w-full h-[400px]"
              />
              <p className="text-xs text-gray-500 mt-2 text-center">
                Leucaena leucocephala com suas características folhas bipinadas e flores brancas
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Sobre a Leucena
              </h2>
              <p className="text-gray-600 mb-6">
                A Leucena (Leucaena leucocephala) se adapta a vários tipos de solo, mas ela cresce especialmente bem em:
              </p>
              
              {/* Soil Types Grid */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <Leaf className="h-5 w-5 mr-2" />
                  Tipos de solo preferidos pela Leucena:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <SoilTypeCard
                    title="1. Solo arenoso-argiloso"
                    description="Mistura de areia e argila, bem drenado."
                    details="Ideal para o crescimento rápido da Leucena."
                    icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                  />
                  <SoilTypeCard
                    title="2. Solo bem drenado com pH entre 5,5 e 8,5"
                    description="A Leucena tolera solos levemente ácidos a alcalinos."
                    details="Faixa de pH ideal para desenvolvimento ótimo."
                    icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                  />
                  <SoilTypeCard
                    title="3. Solo fértil ou corrigido"
                    description="Cresce ainda melhor em solos com matéria orgânica."
                    details="Adubação natural potencializa o crescimento."
                    icon={<CheckCircle className="h-5 w-5 text-green-600" />}
                  />
                  <SoilTypeCard
                    title="4. Regiões degradadas"
                    description="Muito invasiva em solos pobres e áreas abandonadas."
                    details="Especialmente em beiras de estradas, margens de rios e pastagens degradadas."
                    icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
                  />
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Importante:</h4>
                    <p className="text-amber-700 text-sm">
                      Apesar de ser resistente, a Leucena não gosta de solos encharcados ou muito compactados, 
                      e prefere climas quentes com períodos secos, como o Cerrado.
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                to="/recursos" 
                className="text-green-700 font-medium flex items-center hover:text-green-800 transition-colors"
              >
                Conheça mais sobre a Leucena
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Comece a manejar a Leucena de forma sustentável hoje
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-green-100">
            Explore nossos recursos, aprenda técnicas eficientes e contribua para a preservação do meio ambiente.
          </p>
          <Link 
            to="/mapa" 
            className="bg-white text-green-700 hover:bg-green-100 py-3 px-8 rounded-md font-medium inline-block transition-colors duration-300"
          >
            Começar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;