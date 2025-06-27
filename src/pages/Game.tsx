import React, { useState, useEffect } from 'react';
import { TowerControl as GameController, RefreshCw, Award, Leaf } from 'lucide-react';

// Define game elements
type PlantType = 'leucena' | 'native' | 'empty';
type GameTile = {
  id: number;
  type: PlantType;
  health: number;
  age: number;
};

const Game: React.FC = () => {
  const boardSize = 5;
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState(1);
  const [gameBoard, setGameBoard] = useState<GameTile[]>([]);
  const [selectedTile, setSelectedTile] = useState<number | null>(null);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [message, setMessage] = useState('Gerencie a Leucena e promova o reflorestamento sustentável!');

  // Initialize game board
  const initializeGame = () => {
    const initialBoard: GameTile[] = [];
    
    // Create board tiles
    for (let i = 0; i < boardSize * boardSize; i++) {
      // Random initial state
      const randomValue = Math.random();
      let type: PlantType = 'empty';
      
      if (randomValue < 0.5) {
        type = 'leucena';
      } else if (randomValue < 0.6) {
        type = 'native';
      }
      
      initialBoard.push({
        id: i,
        type,
        health: type === 'empty' ? 0 : 100,
        age: type === 'empty' ? 0 : Math.floor(Math.random() * 3) + 1,
      });
    }
    
    setGameBoard(initialBoard);
    setScore(0);
    setTurn(1);
    setSelectedTile(null);
    setGameStatus('playing');
    setMessage('Gerencie a Leucena e promova o reflorestamento sustentável!');
  };

  // Initialize game on component mount
  useEffect(() => {
    initializeGame();
  }, []);

  // Check win/lose conditions after each turn
  useEffect(() => {
    if (gameStatus !== 'playing') return;
    
    // Count plant types
    const leucenaCount = gameBoard.filter(tile => tile.type === 'leucena').length;
    const nativeCount = gameBoard.filter(tile => tile.type === 'native').length;
    
    // Win condition: More natives than leucena and at least 30% of board is native
    if (nativeCount > leucenaCount && nativeCount >= Math.floor(boardSize * boardSize * 0.3)) {
      setGameStatus('won');
      setMessage('Parabéns! Você criou um ecossistema equilibrado!');
    }
    
    // Lose condition: Too much leucena (over 80% of the board)
    if (leucenaCount >= Math.floor(boardSize * boardSize * 0.8)) {
      setGameStatus('lost');
      setMessage('A Leucena dominou o ambiente! Tente novamente com mais equilíbrio.');
    }
    
    // Update score
    setScore(nativeCount * 10 - leucenaCount * 2);
  }, [gameBoard, turn, gameStatus]);

  // Process game turn
  const advanceTurn = () => {
    if (gameStatus !== 'playing') return;
    
    // Deep copy of the board
    const newBoard = JSON.parse(JSON.stringify(gameBoard)) as GameTile[];
    
    // Process natural growth and spread
    newBoard.forEach((tile, index) => {
      // Age all plants
      if (tile.type !== 'empty') {
        tile.age += 1;
      }
      
      // Leucena spreads to adjacent empty tiles (randomly)
      if (tile.type === 'leucena' && tile.age >= 3 && Math.random() < 0.3) {
        const adjacentTiles = getAdjacentTiles(index);
        const emptyAdjacent = adjacentTiles.filter(adjIndex => 
          newBoard[adjIndex].type === 'empty'
        );
        
        if (emptyAdjacent.length > 0) {
          const targetIndex = emptyAdjacent[Math.floor(Math.random() * emptyAdjacent.length)];
          newBoard[targetIndex].type = 'leucena';
          newBoard[targetIndex].health = 50;
          newBoard[targetIndex].age = 1;
        }
      }
      
      // Native plants occasionally spread (less aggressively than leucena)
      if (tile.type === 'native' && tile.age >= 5 && Math.random() < 0.2) {
        const adjacentTiles = getAdjacentTiles(index);
        const emptyAdjacent = adjacentTiles.filter(adjIndex => 
          newBoard[adjIndex].type === 'empty'
        );
        
        if (emptyAdjacent.length > 0) {
          const targetIndex = emptyAdjacent[Math.floor(Math.random() * emptyAdjacent.length)];
          newBoard[targetIndex].type = 'native';
          newBoard[targetIndex].health = 50;
          newBoard[targetIndex].age = 1;
        }
      }
    });
    
    setGameBoard(newBoard);
    setTurn(turn + 1);
    setSelectedTile(null);
  };

  // Get adjacent tile indices (up, right, down, left)
  const getAdjacentTiles = (index: number) => {
    const adjacentIndices: number[] = [];
    const row = Math.floor(index / boardSize);
    const col = index % boardSize;
    
    // Up
    if (row > 0) {
      adjacentIndices.push(index - boardSize);
    }
    
    // Right
    if (col < boardSize - 1) {
      adjacentIndices.push(index + 1);
    }
    
    // Down
    if (row < boardSize - 1) {
      adjacentIndices.push(index + boardSize);
    }
    
    // Left
    if (col > 0) {
      adjacentIndices.push(index - 1);
    }
    
    return adjacentIndices;
  };

  // Handle tile click
  const handleTileClick = (index: number) => {
    if (gameStatus !== 'playing') return;
    
    setSelectedTile(index);
  };

  // Handle action on selected tile
  const handleAction = (action: 'prune' | 'remove' | 'plant') => {
    if (selectedTile === null || gameStatus !== 'playing') return;
    
    const newBoard = [...gameBoard];
    const tile = newBoard[selectedTile];
    
    switch (action) {
      case 'prune':
        // Prune leucena (reduces age and health)
        if (tile.type === 'leucena') {
          tile.age = Math.max(1, tile.age - 1);
          tile.health = Math.max(50, tile.health - 20);
          setMessage('Leucena podada com sucesso!');
        }
        break;
      
      case 'remove':
        // Remove plant (turn to empty)
        if (tile.type !== 'empty') {
          tile.type = 'empty';
          tile.health = 0;
          tile.age = 0;
          setMessage(
            tile.type === 'leucena' 
              ? 'Leucena removida, utilize a biomassa de forma sustentável!' 
              : 'Planta nativa removida!'
          );
        }
        break;
      
      case 'plant':
        // Plant native species in empty tile
        if (tile.type === 'empty') {
          tile.type = 'native';
          tile.health = 100;
          tile.age = 1;
          setMessage('Espécie nativa plantada com sucesso!');
        }
        break;
    }
    
    setGameBoard(newBoard);
    setSelectedTile(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-green-800 text-white p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <GameController className="h-6 w-6 mr-2" />
                <h1 className="text-xl font-bold">Eco Game: Manejo da Leucena</h1>
              </div>
              
              <div className="flex space-x-4">
                <div className="bg-green-700 px-3 py-1 rounded">
                  <span className="text-sm">Pontos: </span>
                  <span className="font-bold">{score}</span>
                </div>
                <div className="bg-green-700 px-3 py-1 rounded">
                  <span className="text-sm">Turno: </span>
                  <span className="font-bold">{turn}</span>
                </div>
                <button 
                  onClick={initializeGame}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded flex items-center"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  <span>Reiniciar</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="text-center mb-4">
              <p className={`text-lg font-medium ${
                gameStatus === 'won' ? 'text-green-600' : 
                gameStatus === 'lost' ? 'text-red-600' : 
                'text-gray-700'
              }`}>
                {message}
              </p>
            </div>
            
            {/* Game Board */}
            <div 
              className="grid gap-2 mx-auto mb-6"
              style={{ 
                gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
                maxWidth: '500px'
              }}
            >
              {gameBoard.map((tile, index) => (
                <div 
                  key={tile.id}
                  onClick={() => handleTileClick(index)}
                  className={`aspect-square rounded-md flex items-center justify-center cursor-pointer relative ${
                    selectedTile === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{
                    backgroundColor: 
                      tile.type === 'leucena' ? '#f0e6d2' : 
                      tile.type === 'native' ? '#d1e7dd' : 
                      '#f8f9fa'
                  }}
                >
                  {tile.type === 'leucena' && (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="text-amber-700\" style={{ fontSize: `${Math.min(24, 14 + tile.age * 2)}px` }}>
                        <Leaf />
                      </div>
                      <span className="text-xs mt-1">L{tile.age}</span>
                    </div>
                  )}
                  
                  {tile.type === 'native' && (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="text-green-700" style={{ fontSize: `${Math.min(24, 14 + tile.age * 1.5)}px` }}>
                        <Leaf />
                      </div>
                      <span className="text-xs mt-1">N{tile.age}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Actions Panel */}
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Ações</h3>
              
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => handleAction('prune')}
                  disabled={!selectedTile || gameBoard[selectedTile || 0].type !== 'leucena' || gameStatus !== 'playing'}
                  className={`py-2 px-3 rounded flex flex-col items-center ${
                    selectedTile && gameBoard[selectedTile].type === 'leucena' && gameStatus === 'playing'
                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Scissors className="h-5 w-5 mb-1" />
                  <span className="text-sm">Podar Leucena</span>
                </button>
                
                <button 
                  onClick={() => handleAction('remove')}
                  disabled={!selectedTile || gameBoard[selectedTile || 0].type === 'empty' || gameStatus !== 'playing'}
                  className={`py-2 px-3 rounded flex flex-col items-center ${
                    selectedTile && gameBoard[selectedTile].type !== 'empty' && gameStatus === 'playing'
                      ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Tractor className="h-5 w-5 mb-1" />
                  <span className="text-sm">Remover Planta</span>
                </button>
                
                <button 
                  onClick={() => handleAction('plant')}
                  disabled={!selectedTile || gameBoard[selectedTile || 0].type !== 'empty' || gameStatus !== 'playing'}
                  className={`py-2 px-3 rounded flex flex-col items-center ${
                    selectedTile && gameBoard[selectedTile].type === 'empty' && gameStatus === 'playing'
                      ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Seedling className="h-5 w-5 mb-1" />
                  <span className="text-sm">Plantar Nativa</span>
                </button>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={advanceTurn}
                  disabled={gameStatus !== 'playing'}
                  className={`py-2 px-4 rounded-md ${
                    gameStatus === 'playing'
                      ? 'bg-green-700 text-white hover:bg-green-800' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Próximo Turno
                </button>
              </div>
            </div>
            
            {gameStatus !== 'playing' && (
              <div className={`mt-4 p-4 rounded-md ${
                gameStatus === 'won' ? 'bg-green-50 border border-green-200' : 
                'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center justify-center mb-3">
                  {gameStatus === 'won' ? (
                    <Award className="h-8 w-8 text-green-600 mr-2" />
                  ) : (
                    <AlertTriangle className="h-8 w-8 text-red-600 mr-2" />
                  )}
                  <h3 className={`text-xl font-bold ${
                    gameStatus === 'won' ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {gameStatus === 'won' ? 'Você Venceu!' : 'Fim de Jogo'}
                  </h3>
                </div>
                
                <p className="text-center mb-4">
                  {gameStatus === 'won' 
                    ? 'Você criou um ecossistema equilibrado e sustentável!' 
                    : 'A Leucena dominou o ambiente. Tente utilizar mais técnicas de manejo.'}
                </p>
                
                <div className="text-center">
                  <button 
                    onClick={initializeGame}
                    className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md"
                  >
                    Jogar Novamente
                  </button>
                </div>
              </div>
            )}
            
            {/* Game Instructions */}
            <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Como Jogar:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Clique em um quadrado para selecioná-lo</li>
                <li>• Use as ações para gerenciar a Leucena e plantar espécies nativas</li>
                <li>• A Leucena (L) se espalha rapidamente se não for controlada</li>
                <li>• As espécies nativas (N) crescem mais lentamente, mas são essenciais para o equilíbrio</li>
                <li>• O número ao lado de cada planta indica sua idade</li>
                <li>• Vença criando um ambiente com mais plantas nativas do que Leucena</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing icons for the game component
const Scissors: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);

const Tractor: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4h9l1 7"/>
    <path d="M4 11V4"/>
    <path d="M8 10V4"/>
    <path d="M18 18v-7l-6-7"/>
    <path d="M10 18v-7"/>
    <circle cx="7" cy="18" r="3"/>
    <circle cx="17" cy="18" r="3"/>
    <path d="M14 18h1"/>
  </svg>
);

const Seedling: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3"/>
    <path d="M12 14a6 6 0 0 1 6-6h3v2a6 6 0 0 1-6 6h-3"/>
    <path d="M12 10v10"/>
  </svg>
);

const AlertTriangle: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

export default Game;