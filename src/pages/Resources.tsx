import React from 'react';
import { Book, FileText, Play, Download, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'article' | 'video' | 'document';
  thumbnail: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, type, thumbnail, link }) => {
  const getIcon = () => {
    switch (type) {
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Play className="h-5 w-5" />;
      case 'document':
        return <Download className="h-5 w-5" />;
      default:
        return <Book className="h-5 w-5" />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'article':
        return 'Artigo';
      case 'video':
        return 'Vídeo';
      case 'document':
        return 'Documento';
      default:
        return 'Recurso';
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-700';
      case 'video':
        return 'bg-red-100 text-red-700';
      case 'document':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-green-100 text-green-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-3 right-3 ${getBgColor()} px-2 py-1 rounded-full text-xs font-medium`}>
          {getLabel()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
        >
          <span className="mr-2">{getIcon()}</span>
          <span>Acessar {getLabel()}</span>
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Recursos Educativos</h1>
        <p className="text-gray-600 mb-8">
          Acesse materiais informativos sobre a Leucena, técnicas de manejo e práticas sustentáveis
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Sobre a Leucena
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Características e Benefícios da Leucena"
              description="Conheça as propriedades botânicas e os benefícios econômicos e ambientais da Leucena para sistemas agroflorestais."
              type="article"
              thumbnail="https://images.pexels.com/photos/1083895/pexels-photo-1083895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#caracteristicas"
            />
            <ResourceCard
              title="História e Distribuição da Leucena no Brasil"
              description="Entenda como a Leucena foi introduzida no Brasil e seu impacto em diferentes regiões do país."
              type="document"
              thumbnail="https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#historia"
            />
            <ResourceCard
              title="Leucena: Amiga ou Invasora?"
              description="Um debate sobre os benefícios e os riscos potenciais da Leucena para ecossistemas nativos."
              type="video"
              thumbnail="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#debate"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Técnicas de Manejo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Guia Completo de Poda da Leucena"
              description="Aprenda as melhores técnicas para realizar podas que maximizam os benefícios da Leucena e controlam seu crescimento."
              type="document"
              thumbnail="https://images.pexels.com/photos/5048531/pexels-photo-5048531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#poda"
            />
            <ResourceCard
              title="Produção de Ração Animal com Leucena"
              description="Tutorial passo a passo para processar folhas de Leucena e produzir ração de alta qualidade para diferentes tipos de animais."
              type="video"
              thumbnail="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#racao"
            />
            <ResourceCard
              title="Compostagem e Produção de Adubo Orgânico"
              description="Métodos eficientes para transformar resíduos de Leucena em composto rico em nutrientes para hortas e lavouras."
              type="article"
              thumbnail="https://images.pexels.com/photos/4058226/pexels-photo-4058226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#compostagem"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Reflorestamento e Sustentabilidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Espécies Nativas para Reflorestamento"
              description="Catálogo de espécies nativas recomendadas para substituir gradualmente a Leucena em projetos de reflorestamento."
              type="document"
              thumbnail="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#especies"
            />
            <ResourceCard
              title="Sistemas Agroflorestais com Leucena"
              description="Como integrar a Leucena em sistemas produtivos diversificados que beneficiam o meio ambiente e geram renda."
              type="video"
              thumbnail="https://images.pexels.com/photos/2363605/pexels-photo-2363605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#saf"
            />
            <ResourceCard
              title="Biodiversidade e Controle Ecológico"
              description="Estratégias para manejar a Leucena enquanto promove a biodiversidade local e o equilíbrio ecológico."
              type="article"
              thumbnail="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#biodiversidade"
            />
          </div>
        </div>

        {/* Detailed Article Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800" id="caracteristicas">
              Características e Benefícios da Leucena
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                A Leucena (Leucaena leucocephala) é uma leguminosa arbórea pertencente à família Fabaceae, 
                nativa da América Central. Caracteriza-se por seu rápido crescimento, podendo atingir até 
                20 metros de altura em condições favoráveis, embora comumente alcance de 5 a 10 metros.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Características Botânicas</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Folhas bipinadas com folíolos pequenos e numerosos</li>
                <li>Flores brancas em inflorescências globosas</li>
                <li>Vagens achatadas contendo 15-30 sementes</li>
                <li>Sistema radicular profundo e extenso</li>
                <li>Alta capacidade de rebrota após poda</li>
                <li>Tolerância à seca e adaptação a solos diversos</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Benefícios Econômicos e Ambientais</h3>
              <p className="mb-4">
                A Leucena oferece diversos benefícios quando manejada adequadamente:
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-green-800">1. Forragem de Alta Qualidade</h4>
              <p className="mb-3">
                As folhas da Leucena contêm entre 20-30% de proteína bruta, além de minerais e vitaminas essenciais 
                para a nutrição animal. É considerada uma excelente opção para alimentação de ruminantes, podendo 
                substituir parcialmente rações comerciais e reduzir custos de produção.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-green-800">2. Recuperação de Solos</h4>
              <p className="mb-3">
                Como leguminosa, a Leucena estabelece simbiose com bactérias fixadoras de nitrogênio, enriquecendo 
                naturalmente o solo. Suas raízes profundas também ajudam a descompactar o solo e recuperar nutrientes 
                de camadas mais profundas.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-green-800">3. Controle de Erosão</h4>
              <p className="mb-3">
                O sistema radicular extenso e a cobertura vegetal proporcionada pela Leucena são eficientes no controle 
                da erosão, especialmente em áreas de encosta ou degradadas.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-green-800">4. Produção de Biomassa</h4>
              <p className="mb-3">
                A alta produção de biomassa (10-30 toneladas de matéria seca por hectare/ano) torna a Leucena uma 
                excelente fonte de matéria orgânica para compostagem, cobertura morta e adubação verde.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-green-800">5. Fonte de Energia</h4>
              <p className="mb-3">
                A madeira da Leucena possui alto poder calorífico (4.600 kcal/kg), sendo ideal para lenha, carvão e 
                geração de energia de biomassa. Seu rápido crescimento permite ciclos curtos de colheita.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Considerações Importantes</h3>
              <p className="mb-4">
                Apesar dos benefícios, é essencial manejar adequadamente a Leucena para evitar seu comportamento invasor 
                em alguns ecossistemas. O manejo controlado, incluindo podas regulares e integração com outras espécies, 
                permite aproveitar seus benefícios enquanto minimiza riscos ecológicos.
              </p>
              
              <div className="bg-green-50 p-4 rounded-md border border-green-100 mt-6">
                <h4 className="font-medium text-green-800 mb-2">Nota Técnica</h4>
                <p className="text-sm">
                  A Leucena contém mimosina, um aminoácido que pode ser tóxico para animais não-ruminantes quando 
                  consumido em grandes quantidades. Por isso, seu uso na alimentação de suínos, aves e equinos deve 
                  ser limitado e realizado com orientação técnica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Biblioteca de Downloads</h2>
          <p className="text-gray-700 mb-6">
            Acesse nossa coleção de materiais técnicos, cartilhas e guias práticos para download gratuito:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#manual" className="flex items-center bg-white p-4 rounded-md border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Download className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Manual do Produtor: Manejo da Leucena</h3>
                <p className="text-sm text-gray-600">PDF - 4.2 MB</p>
              </div>
            </a>
            
            <a href="#cartilha" className="flex items-center bg-white p-4 rounded-md border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Download className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Cartilha de Reflorestamento</h3>
                <p className="text-sm text-gray-600">PDF - 3.8 MB</p>
              </div>
            </a>
            
            <a href="#planilha" className="flex items-center bg-white p-4 rounded-md border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Download className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Planilha de Cálculo para Ração Animal</h3>
                <p className="text-sm text-gray-600">Excel - 1.2 MB</p>
              </div>
            </a>
            
            <a href="#infografico" className="flex items-center bg-white p-4 rounded-md border border-gray-200 hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Download className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Infográfico: Ciclo de Manejo Sustentável</h3>
                <p className="text-sm text-gray-600">PDF - 2.5 MB</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;