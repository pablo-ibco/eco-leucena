import React from 'react';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">
            A EQUIPE TITÃS
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">
            OS PROTETORES DA NATUREZA
          </h2>
          <div className="w-32 h-1 bg-green-600 mx-auto mb-6"></div>
        </div>

        {/* Team Description */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              A equipe Titãs, carinhosamente conhecida como "os protetores da natureza", é formada por sete integrantes dedicados, criativos e apaixonados por desafios. São eles: <strong>Ana Júlia Azevedo de Oliveira</strong>, <strong>Anna Laura Rodrigues Garcia</strong>, <strong>João Marcos Izzicupo Pereira</strong>, <strong>Maria Luiza Bomfim Masson</strong>, <strong>Melissa Amaral da Silva</strong>, <strong>Pedro de Paula Moreira Melo</strong> e <strong>Valentina Werner Siqueira</strong>.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <p className="text-blue-800 text-lg">
                Todos têm entre 11 e 12 anos e são alunos do 6º ano do <strong>Colégio Copacabana</strong> (Uberlândia - Minas Gerais, Brasil).
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Nossa História</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              A história da equipe começou em 2024, quando participaram juntos pela primeira vez do <strong>TBR – Torneio Brasil de Robótica</strong>, com o projeto <strong>ICAD</strong>, que abordava o <strong>ODS 2 – Fome Zero</strong>.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
              <h4 className="text-lg font-semibold mb-3 text-green-800">Conquistas de 2024</h4>
              <ul className="list-disc pl-6 space-y-2 text-green-700">
                <li><strong>Vencedores na categoria Mérito Científico</strong> na etapa regional (outubro 2024)</li>
                <li><strong>Classificação para a etapa nacional</strong> (dezembro 2024)</li>
                <li><strong>13º lugar</strong> na categoria mais concorrida da competição nacional</li>
                <li>Disputaram com <strong>mais de 40 equipes</strong> de todo o Brasil</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Name Meaning */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Por que "Titãs"?</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              O nome "Titãs" foi escolhido por ter um significado forte e inspirador. <strong>Titãs significa gigante e forte</strong>. E a equipe se considera gigante e forte.
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
              <h4 className="text-lg font-semibold mb-3 text-yellow-800">Nosso Grito de Guerra</h4>
              <p className="text-yellow-700 text-lg font-medium text-center italic">
                "Somos fortes, somos guerreiros, nunca desistimos, somos Titãs!"
              </p>
            </div>
          </div>
        </div>

        {/* Current Project */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Projeto Atual</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">
              Nesta nova edição do TBR, a equipe segue com o mesmo entusiasmo, agora voltada para a <strong>defesa da vida terrestre</strong> com o projeto <strong>Ecoleucena</strong>, mostrando que quando o trabalho em equipe se une ao propósito de proteger a natureza, os resultados são sempre gigantes.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Nossos Integrantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AJ</span>
              </div>
              <h4 className="font-semibold text-green-800">Ana Júlia Azevedo de Oliveira</h4>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AL</span>
              </div>
              <h4 className="font-semibold text-green-800">Anna Laura Rodrigues Garcia</h4>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JM</span>
              </div>
              <h4 className="font-semibold text-green-800">João Marcos Izzicupo Pereira</h4>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">ML</span>
              </div>
              <h4 className="font-semibold text-green-800">Maria Luiza Bomfim Masson</h4>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MA</span>
              </div>
              <h4 className="font-semibold text-green-800">Melissa Amaral da Silva</h4>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">PM</span>
              </div>
              <h4 className="font-semibold text-green-800">Pedro de Paula Moreira Melo</h4>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">VS</span>
              </div>
              <h4 className="font-semibold text-green-800">Valentina Werner Siqueira</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 