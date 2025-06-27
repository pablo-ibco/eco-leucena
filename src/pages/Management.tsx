import React, { useState } from 'react';
import { Scissors, Wheat, Tractor, BatteryFull, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface TechniqueProps {
  title: string;
  description: string;
  steps: string[];
  benefits: string[];
  icon: React.ReactNode;
  imageUrl: string;
}

const Technique: React.FC<TechniqueProps> = ({ 
  title, description, steps, benefits, icon, imageUrl 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 border border-gray-200">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-4 pt-0 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <p className="text-gray-600 mb-4">{description}</p>
              
              <h4 className="font-semibold text-green-800 mb-2">Passo a passo:</h4>
              <ol className="mb-4 space-y-2">
                {steps.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              
              <h4 className="font-semibold text-green-800 mb-2">Benefícios:</h4>
              <ul className="space-y-1">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* <div>
              <img 
                src={imageUrl} 
                alt={title} 
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="mt-4 flex justify-end">
                <a 
                  href="#" 
                  className="text-green-700 flex items-center hover:text-green-800 transition-colors"
                >
                  <span>Ver guia detalhado</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

const Management: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Técnicas de Manejo da Leucena</h1>
        <p className="text-gray-600 mb-8">
          Aprenda métodos eficientes para manejar a Leucena e aproveitar todos os seus benefícios
        </p>
        
        <div className="mb-8">
          <Technique 
            title="Poda Sustentável" 
            description="A poda correta da Leucena permite controlar seu crescimento enquanto aproveita sua biomassa para diversos fins. É importante seguir as técnicas adequadas para não danificar a planta e maximizar sua produtividade."
            steps={[
              "Identifique os galhos maduros com mais de 1,5 cm de diâmetro.",
              "Realize o corte em ângulo de 45° para evitar acúmulo de água e doenças.",
              "Deixe pelo menos 1/3 da copa para garantir a recuperação da planta.",
              "Organize o material podado para posterior processamento.",
              "Aplique selante natural nas áreas de corte para prevenir doenças."
            ]}
            benefits={[
              "Controle do crescimento excessivo",
              "Estimula brotações novas e vigorosas",
              "Permite usar a biomassa para múltiplos fins",
              "Mantém a saúde da planta a longo prazo"
            ]}
            icon={<Scissors className="h-6 w-6 text-green-700" />}
            imageUrl="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          
          <Technique 
            title="Produção de Ração e Feno" 
            description="As folhas da Leucena são ricas em proteínas e nutrientes, tornando-as excelentes para alimentação animal. O processamento adequado permite criar ração e feno de alta qualidade para gado, caprinos e outros animais."
            steps={[
              "Colha folhas e galhos jovens nos períodos de maior valor nutricional.",
              "Seque o material à sombra por 2-3 dias até atingir 15% de umidade.",
              "Triture as folhas secas para fazer farinha ou mantenha-as inteiras para feno.",
              "Armazene em local seco e protegido da umidade.",
              "Para ração completa, misture com outros ingredientes como milho e minerais."
            ]}
            benefits={[
              "Alta concentração proteica (até 25%)",
              "Rico em vitaminas e minerais essenciais",
              "Baixo custo de produção",
              "Reduz a necessidade de insumos externos",
              "Melhora a conversão alimentar dos animais"
            ]}
            icon={<Wheat className="h-6 w-6 text-green-700" />}
            imageUrl="https://images.pexels.com/photos/5528881/pexels-photo-5528881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          
          <Technique 
            title="Compostagem e Adubação" 
            description="Os resíduos da Leucena são excelentes para compostagem, produzindo adubo orgânico rico em nitrogênio. Seu sistema radicular também ajuda a fixar nitrogênio no solo, melhorando sua fertilidade naturalmente."
            steps={[
              "Separe galhos e folhas não utilizados para alimentação animal.",
              "Monte pilhas alternando camadas de Leucena (rica em nitrogênio) com materiais ricos em carbono.",
              "Mantenha a umidade adequada e revire a pilha periodicamente.",
              "Após 3-4 meses, o composto estará pronto para uso.",
              "Aplique o composto em hortas, pomares ou lavouras."
            ]}
            benefits={[
              "Adubo rico em nitrogênio e outros nutrientes",
              "Melhora a estrutura e fertilidade do solo",
              "Reduz a necessidade de fertilizantes químicos",
              "Promove a ciclagem de nutrientes",
              "Contribui para a sustentabilidade da propriedade"
            ]}
            icon={<Tractor className="h-6 w-6 text-green-700" />}
            imageUrl="https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          
          <Technique 
            title="Produção de Energia" 
            description="A madeira da Leucena tem alto poder calorífico e pode ser utilizada para produção de lenha, carvão e biomassa para geração de energia. É uma alternativa renovável e sustentável quando manejada corretamente."
            steps={[
              "Selecione árvores maduras com mais de 3 anos para colheita.",
              "Realize o corte rente ao solo para estimular rebrota.",
              "Seque a madeira adequadamente antes de usar como combustível.",
              "Para carvão, utilize fornos eficientes que reduzam as emissões.",
              "Mantenha um sistema de rotação para garantir o suprimento constante."
            ]}
            benefits={[
              "Fonte renovável de energia",
              "Alto poder calorífico (4.600 kcal/kg)",
              "Rápido crescimento e regeneração",
              "Reduz a pressão sobre florestas nativas",
              "Potencial para geração de renda extra"
            ]}
            icon={<BatteryFull className="h-6 w-6 text-green-700" />}
            imageUrl="https://images.pexels.com/photos/5418690/pexels-photo-5418690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h2 className="text-xl font-semibold mb-3 text-green-800">Dicas Importantes:</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-green-700 text-white flex items-center justify-center text-xs mt-0.5 mr-2">
                ✓
              </div>
              <span className="text-gray-700">
                Sempre combine diferentes técnicas de manejo para maximizar os benefícios e controlar o crescimento da Leucena.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-green-700 text-white flex items-center justify-center text-xs mt-0.5 mr-2">
                ✓
              </div>
              <span className="text-gray-700">
                Evite o corte total de todas as árvores de uma área ao mesmo tempo, prefira um sistema de rotação.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-green-700 text-white flex items-center justify-center text-xs mt-0.5 mr-2">
                ✓
              </div>
              <span className="text-gray-700">
                Utilize equipamentos adequados e bem afiados para facilitar o corte e reduzir danos às plantas.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-green-700 text-white flex items-center justify-center text-xs mt-0.5 mr-2">
                ✓
              </div>
              <span className="text-gray-700">
                Integre o manejo da Leucena com outras práticas agrícolas sustentáveis para aumentar a produtividade da propriedade.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Management;