import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Camera, RotateCcw, Download, Leaf, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

interface SoilAnalysis {
  soilType: 'arenoso' | 'argiloso' | 'humoso' | 'calcário';
  leucenaDensity: 'baixa' | 'média' | 'alta';
  recommendations: string[];
  phLevel: number;
  nitrogenLevel: 'baixo' | 'médio' | 'alto';
  organicMatter: 'baixa' | 'média' | 'alta';
}

const SoilAnalyzer: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<SoilAnalysis | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isLoadingCamera, setIsLoadingCamera] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Cleanup camera on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Simulated soil analysis function
  const analyzeSoil = useCallback((imageData: string): Promise<SoilAnalysis> => {
    return new Promise((resolve) => {
      // Simulate analysis delay
      setTimeout(() => {
        // Simulate different soil types based on random factors
        const soilTypes: SoilAnalysis['soilType'][] = ['arenoso', 'argiloso', 'humoso', 'calcário'];
        const densities: SoilAnalysis['leucenaDensity'][] = ['baixa', 'média', 'alta'];
        const nitrogenLevels: SoilAnalysis['nitrogenLevel'][] = ['baixo', 'médio', 'alto'];
        const organicMatters: SoilAnalysis['organicMatter'][] = ['baixa', 'média', 'alta'];
        
        const randomSoilType = soilTypes[Math.floor(Math.random() * soilTypes.length)];
        const randomDensity = densities[Math.floor(Math.random() * densities.length)];
        const randomNitrogen = nitrogenLevels[Math.floor(Math.random() * nitrogenLevels.length)];
        const randomOrganic = organicMatters[Math.floor(Math.random() * organicMatters.length)];
        
        const phLevel = Math.random() * 3 + 5; // pH between 5-8
        
        let recommendations: string[] = [];
        
        // Generate recommendations based on soil type
        switch (randomSoilType) {
          case 'arenoso':
            recommendations = [
              'Adicionar matéria orgânica para melhorar retenção de água',
              'Aplicar adubo verde com leguminosas',
              'Considerar irrigação mais frequente',
              'Plantar leucena em consórcio com outras espécies'
            ];
            break;
          case 'argiloso':
            recommendations = [
              'Melhorar drenagem do solo',
              'Adicionar areia para melhorar aeração',
              'Aplicar calcário se necessário',
              'Leucena pode ajudar na descompactação'
            ];
            break;
          case 'humoso':
            recommendations = [
              'Solo ideal para leucena',
              'Manter cobertura vegetal',
              'Monitorar pH regularmente',
              'Aproveitar alta fertilidade natural'
            ];
            break;
          case 'calcário':
            recommendations = [
              'Verificar pH antes do plantio',
              'Considerar espécies tolerantes ao calcário',
              'Aplicar matéria orgânica',
              'Monitorar disponibilidade de nutrientes'
            ];
            break;
        }
        
        resolve({
          soilType: randomSoilType,
          leucenaDensity: randomDensity,
          recommendations,
          phLevel: parseFloat(phLevel.toFixed(1)),
          nitrogenLevel: randomNitrogen,
          organicMatter: randomOrganic
        });
      }, 3000); // 3 second delay to simulate analysis
    });
  }, []);

  const startCamera = async () => {
    setIsLoadingCamera(true);
    setCameraError(null);
    setCameraReady(false);
    
    try {
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Câmera não suportada neste navegador');
      }

      // Try to get camera access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
        setIsLoadingCamera(false);
        
        // Wait for video to load and be ready
        videoRef.current.onloadedmetadata = () => {
          if (videoRef.current) {
            videoRef.current.play().then(() => {
              setCameraReady(true);
            }).catch((error) => {
              console.error('Erro ao reproduzir vídeo:', error);
              setCameraError('Erro ao iniciar a câmera');
            });
          }
        };

        videoRef.current.onerror = () => {
          setCameraError('Erro ao carregar o vídeo da câmera');
          setIsLoadingCamera(false);
        };
      }
    } catch (error: any) {
      console.error('Erro ao acessar câmera:', error);
      setIsLoadingCamera(false);
      
      let errorMessage = 'Erro ao acessar a câmera';
      
      if (error.name === 'NotAllowedError') {
        errorMessage = 'Permissão de câmera negada. Por favor, permita o acesso à câmera.';
      } else if (error.name === 'NotFoundError') {
        errorMessage = 'Nenhuma câmera encontrada no dispositivo.';
      } else if (error.name === 'NotSupportedError') {
        errorMessage = 'Câmera não suportada neste navegador.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setCameraError(errorMessage);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setShowCamera(false);
    setCameraError(null);
    setCameraReady(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current && cameraReady) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context && video.videoWidth > 0 && video.videoHeight > 0) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        const imageData = canvas.toDataURL('image/jpeg', 0.8);
        setCapturedImage(imageData);
        stopCamera();
        
        // Start analysis
        setIsAnalyzing(true);
        analyzeSoil(imageData).then((result) => {
          setAnalysis(result);
          setIsAnalyzing(false);
        });
      } else {
        alert('Erro ao capturar foto. Aguarde a câmera carregar completamente.');
      }
    } else {
      alert('Câmera não está pronta. Aguarde um momento.');
    }
  };

  const resetAnalysis = () => {
    setAnalysis(null);
    setCapturedImage(null);
    stopCamera();
    setIsAnalyzing(false);
  };

  const getSoilTypeColor = (type: string) => {
    switch (type) {
      case 'arenoso': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'argiloso': return 'bg-red-100 text-red-800 border-red-200';
      case 'humoso': return 'bg-green-100 text-green-800 border-green-200';
      case 'calcário': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getDensityColor = (density: string) => {
    switch (density) {
      case 'baixa': return 'bg-green-100 text-green-800 border-green-200';
      case 'média': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'alta': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Simulador de Análise de Solo</h1>
        <p className="text-gray-600 mb-8">
          Tire uma foto do solo para receber uma análise simulada e recomendações para o plantio de leucena
        </p>

        {/* Camera Section */}
        {!capturedImage && !showCamera && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Camera className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Capturar Foto do Solo</h2>
            <p className="text-gray-600 mb-6">
              Posicione a câmera sobre uma amostra de solo para análise
            </p>
            <button
              onClick={startCamera}
              disabled={isLoadingCamera}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingCamera ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Carregando...
                </>
              ) : (
                <>
                  <Camera className="h-5 w-5 mr-2" />
                  Abrir Câmera
                </>
              )}
            </button>
            
            {cameraError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{cameraError}</p>
                <div className="mt-3 space-y-2">
                  <button
                    onClick={startCamera}
                    className="text-red-600 hover:text-red-800 text-sm underline mr-4"
                  >
                    Tentar novamente
                  </button>
                  <button
                    onClick={() => {
                      // Simulate photo capture for testing
                      const mockImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGI1YTMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNpbXVsYcOnw6NvIGRlIFNvbG88L3RleHQ+PC9zdmc+';
                      setCapturedImage(mockImage);
                      setIsAnalyzing(true);
                      analyzeSoil(mockImage).then((result) => {
                        setAnalysis(result);
                        setIsAnalyzing(false);
                      });
                    }}
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    Testar Simulação
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Camera View */}
        {showCamera && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Câmera</h2>
              <button
                onClick={stopCamera}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full max-w-md mx-auto rounded-lg border border-gray-300"
                style={{ transform: 'scaleX(-1)' }} // Mirror the video
              />
              <canvas ref={canvasRef} className="hidden" />
              
              {!cameraReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <div className="text-white text-center">
                    <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p>Carregando câmera...</p>
                  </div>
                </div>
              )}
              
              <div className="mt-4 text-center">
                <button
                  onClick={capturePhoto}
                  disabled={!cameraReady}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {cameraReady ? 'Capturar Foto' : 'Aguarde...'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Captured Image */}
        {capturedImage && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Foto Capturada</h2>
            <div className="text-center">
              <img
                src={capturedImage}
                alt="Solo capturado"
                className="max-w-md mx-auto rounded-lg border border-gray-300 mb-4"
              />
              <button
                onClick={resetAnalysis}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center mx-auto"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Nova Análise
              </button>
            </div>
          </div>
        )}

        {/* Analysis Loading */}
        {isAnalyzing && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Analisando Solo...</h2>
            <p className="text-gray-600">Processando imagem e gerando recomendações</p>
          </div>
        )}

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-6">
            {/* Soil Type */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <Leaf className="h-5 w-5 mr-2 text-green-600" />
                Tipo de Solo
              </h3>
              <div className={`inline-block px-4 py-2 rounded-full border ${getSoilTypeColor(analysis.soilType)}`}>
                <span className="capitalize font-medium">{analysis.soilType}</span>
              </div>
            </div>

            {/* Leucena Density */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                Densidade de Leucena
              </h3>
              <div className={`inline-block px-4 py-2 rounded-full border ${getDensityColor(analysis.leucenaDensity)}`}>
                <span className="capitalize font-medium">{analysis.leucenaDensity}</span>
              </div>
            </div>

            {/* Soil Properties */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Propriedades do Solo</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">pH</h4>
                  <p className="text-2xl font-bold text-blue-600">{analysis.phLevel}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">Nitrogênio</h4>
                  <p className="text-lg font-semibold text-green-600 capitalize">{analysis.nitrogenLevel}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">Matéria Orgânica</h4>
                  <p className="text-lg font-semibold text-yellow-600 capitalize">{analysis.organicMatter}</p>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Recomendações
              </h3>
              <ul className="space-y-3">
                {analysis.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-800 mb-1">Aviso Importante</h4>
                  <p className="text-yellow-700 text-sm">
                    Esta é uma simulação educacional. Para análises reais de solo, consulte um profissional 
                    qualificado e realize testes laboratoriais apropriados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoilAnalyzer; 