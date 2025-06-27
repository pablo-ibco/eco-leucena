import React from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
        >
          <span className="mr-2"><FileText className="h-5 w-5" /></span>
          <span>Acessar artigo</span>
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
              link="/artigos/caracteristicas-beneficios"
            />
            <ResourceCard
              title="História e Distribuição da Leucena no Brasil"
              description="Entenda como a Leucena foi introduzida no Brasil e seu impacto em diferentes regiões do país."
              link="/artigos/historia-distribuicao"
            />
            <ResourceCard
              title="Leucena: Amiga ou Invasora?"
              description="Um debate sobre os benefícios e os riscos potenciais da Leucena para ecossistemas nativos."
              link="/artigos/amiga-ou-invasora"
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
              link="/artigos/guia-poda"
            />
            <ResourceCard
              title="Produção de Ração Animal com Leucena"
              description="Tutorial passo a passo para processar folhas de Leucena e produzir ração de alta qualidade para diferentes tipos de animais."
              link="/artigos/producao-racao-animal"
            />
            <ResourceCard
              title="Compostagem e Produção de Adubo Orgânico"
              description="Métodos eficientes para transformar resíduos de Leucena em composto rico em nutrientes para hortas e lavouras."
              link="/artigos/compostagem-adubo-organico"
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
              link="/artigos/especies-nativas-reflorestamento"
            />
            <ResourceCard
              title="Sistemas Agroflorestais com Leucena"
              description="Como integrar a Leucena em sistemas produtivos diversificados que beneficiam o meio ambiente e geram renda."
              link="/artigos/sistemas-agroflorestais"
            />
            <ResourceCard
              title="Biodiversidade e Controle Ecológico"
              description="Estratégias para manejar a Leucena enquanto promove a biodiversidade local e o equilíbrio ecológico."
              link="/artigos/biodiversidade-controle-ecologico"
            />
          </div>
        </div>

        {/* Download Section */}
        {/* <div className="bg-green-50 rounded-lg p-6 border border-green-200">
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
        </div> */}
      </div>
    </div>
  );
};

export default Resources;