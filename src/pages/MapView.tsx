import React, { useState, useRef, useCallback } from 'react';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { MapPin, Layers, Search, Info } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

// Sample points data with more realistic coordinates for Brazil
const samplePoints = [
  { id: 1, lat: -8.054, lng: -34.881, level: 'high', area: 2.5 },
  { id: 2, lat: -8.063, lng: -34.871, level: 'medium', area: 1.8 },
  { id: 3, lat: -8.047, lng: -34.891, level: 'low', area: 0.7 },
  { id: 4, lat: -8.072, lng: -34.877, level: 'high', area: 3.2 },
  { id: 5, lat: -8.059, lng: -34.899, level: 'medium', area: 1.5 },
  { id: 6, lat: -18.9186, lng: -48.2772, level: 'low', area: 2.3 }, // Uberlândia
  { id: 7, lat: -19.7483, lng: -47.9319, level: 'medium', area: 3.1 }, // Uberaba
  { id: 8, lat: -18.6476, lng: -48.1932, level: 'high', area: 4.0 }, // Araguari
  { id: 9, lat: -23.5505, lng: -46.6333, level: 'low', area: 1.2 }, // São Paulo
  { id: 10, lat: -22.9068, lng: -43.1729, level: 'high', area: 3.9 }, // Rio de Janeiro
  { id: 11, lat: -30.0346, lng: -51.2177, level: 'medium', area: 2.1 }, // Porto Alegre
  { id: 12, lat: -25.4284, lng: -49.2733, level: 'high', area: 4.8 }, // Curitiba
  { id: 13, lat: -3.7172, lng: -38.5433, level: 'low', area: 1.1 }, // Fortaleza
  { id: 14, lat: -1.4558, lng: -48.4902, level: 'medium', area: 2.9 }, // Belém
  { id: 15, lat: -15.7942, lng: -47.8822, level: 'high', area: 3.4 }, // Brasília
  { id: 16, lat: -12.9714, lng: -38.5014, level: 'low', area: 0.9 }, // Salvador
  { id: 17, lat: -10.9472, lng: -37.0731, level: 'medium', area: 1.7 }, // Aracaju
  { id: 18, lat: -7.1195, lng: -34.845, level: 'low', area: 0.8 }, // João Pessoa
  { id: 19, lat: -9.6658, lng: -35.735, level: 'high', area: 3.5 }, // Maceió
  { id: 20, lat: -5.7945, lng: -35.211, level: 'medium', area: 2.0 }, // Natal
  { id: 21, lat: 37.7749, lng: -122.4194, level: 'low', area: 1.4 }, // San Francisco
  { id: 22, lat: 40.7128, lng: -74.006, level: 'high', area: 4.2 }, // New York
  { id: 23, lat: 34.0522, lng: -118.2437, level: 'medium', area: 2.6 }, // Los Angeles
  { id: 24, lat: 51.5074, lng: -0.1278, level: 'low', area: 0.9 }, // London
  { id: 25, lat: 48.8566, lng: 2.3522, level: 'high', area: 4.6 }, // Paris
  { id: 26, lat: 35.6895, lng: 139.6917, level: 'medium', area: 3.0 }, // Tokyo
  { id: 27, lat: 55.7558, lng: 37.6173, level: 'high', area: 4.1 }, // Moscow
  { id: 28, lat: 52.52, lng: 13.405, level: 'low', area: 1.3 }, // Berlin
  { id: 29, lat: 41.9028, lng: 12.4964, level: 'medium', area: 2.2 }, // Rome
  { id: 30, lat: 39.9042, lng: 116.4074, level: 'high', area: 5.0 }, // Beijing
  { id: 31, lat: -34.6037, lng: -58.3816, level: 'low', area: 1.6 }, // Buenos Aires
  { id: 32, lat: -33.4489, lng: -70.6693, level: 'medium', area: 2.4 }, // Santiago
  { id: 33, lat: -12.0432, lng: -77.0282, level: 'high', area: 3.6 }, // Lima
  { id: 34, lat: 19.4326, lng: -99.1332, level: 'low', area: 1.0 }, // Mexico City
  { id: 35, lat: 6.5244, lng: 3.3792, level: 'medium', area: 2.8 }, // Lagos
  { id: 36, lat: 30.0444, lng: 31.2357, level: 'high', area: 3.7 }, // Cairo
  { id: 37, lat: 1.3521, lng: 103.8198, level: 'low', area: 1.9 }, // Singapore
  { id: 38, lat: -37.8136, lng: 144.9631, level: 'medium', area: 2.7 }, // Melbourne
  { id: 39, lat: -33.8688, lng: 151.2093, level: 'high', area: 3.8 }, // Sydney
  { id: 40, lat: 43.6532, lng: -79.3832, level: 'low', area: 1.5 }, // Toronto
  { id: 41, lat: 45.4215, lng: -75.6972, level: 'medium', area: 2.5 }, // Ottawa
  { id: 42, lat: -22.3216, lng: -49.0661, level: 'low', area: 0.6 }, // Bauru
  { id: 43, lat: -21.7857, lng: -48.1774, level: 'high', area: 3.3 }, // Araraquara
  { id: 44, lat: -21.7622, lng: -43.3431, level: 'medium', area: 2.0 }, // Juiz de Fora
  { id: 45, lat: -20.3155, lng: -40.3128, level: 'low', area: 1.1 }, // Vitória
  { id: 46, lat: -16.6864, lng: -49.2643, level: 'high', area: 3.0 }, // Goiânia
  { id: 47, lat: -2.5307, lng: -44.3068, level: 'medium', area: 2.3 }, // São Luís
  { id: 48, lat: -8.0522, lng: -34.9286, level: 'low', area: 0.7 }, // Recife (variação)
  { id: 49, lat: -8.2805, lng: -35.0328, level: 'high', area: 4.4 }, // Escada/PE
  { id: 50, lat: -8.1245, lng: -34.9242, level: 'medium', area: 1.6 }, // Olinda
  { id: 51, lat: -18.9141, lng: -48.2754, level: 'medium', area: 2.4 }, // Uberlândia
{ id: 52, lat: -18.9242, lng: -48.2933, level: 'low', area: 1.3 },
{ id: 53, lat: -18.9300, lng: -48.2600, level: 'high', area: 3.1 },
{ id: 54, lat: -19.7500, lng: -47.9300, level: 'medium', area: 2.8 }, // Uberaba
{ id: 55, lat: -19.7550, lng: -47.9250, level: 'low', area: 1.2 },
{ id: 56, lat: -19.7400, lng: -47.9350, level: 'high', area: 4.1 },
{ id: 57, lat: -18.6600, lng: -48.1900, level: 'medium', area: 2.2 }, // Araguari
{ id: 58, lat: -18.6450, lng: -48.2000, level: 'low', area: 1.0 },
{ id: 59, lat: -18.6400, lng: -48.1850, level: 'high', area: 3.5 },
{ id: 60, lat: -18.9750, lng: -49.4600, level: 'medium', area: 2.6 }, // Ituiutaba
{ id: 61, lat: -18.9800, lng: -49.4700, level: 'low', area: 0.9 },
{ id: 62, lat: -18.9650, lng: -49.4500, level: 'high', area: 3.8 },
{ id: 63, lat: -18.5800, lng: -46.5200, level: 'medium', area: 2.7 }, // Patrocínio
{ id: 64, lat: -18.5900, lng: -46.5300, level: 'low', area: 1.1 },
{ id: 65, lat: -18.5700, lng: -46.5100, level: 'high', area: 4.2 },
{ id: 66, lat: -18.5850, lng: -47.3700, level: 'medium', area: 2.0 }, // Monte Carmelo
{ id: 67, lat: -18.5750, lng: -47.3600, level: 'low', area: 1.0 },
{ id: 68, lat: -18.5950, lng: -47.3800, level: 'high', area: 3.3 },
{ id: 69, lat: -19.3200, lng: -46.9400, level: 'medium', area: 2.4 }, // Araxá
{ id: 70, lat: -19.3100, lng: -46.9500, level: 'low', area: 1.4 },
{ id: 71, lat: -19.3300, lng: -46.9300, level: 'high', area: 3.7 },
{ id: 72, lat: -18.5750, lng: -49.3130, level: 'medium', area: 2.1 }, // Canápolis
{ id: 73, lat: -18.5600, lng: -49.3000, level: 'low', area: 1.1 },
{ id: 74, lat: -18.5900, lng: -49.3200, level: 'high', area: 3.4 },
{ id: 75, lat: -19.5223, lng: -48.7647, level: 'medium', area: 2.9 }, // Frutal
{ id: 76, lat: -19.5100, lng: -48.7500, level: 'low', area: 1.2 },
{ id: 77, lat: -19.5300, lng: -48.7700, level: 'high', area: 4.0 },
{ id: 78, lat: -18.1658, lng: -47.9443, level: 'medium', area: 2.5 }, // Catalão (GO)
{ id: 79, lat: -18.1500, lng: -47.9300, level: 'low', area: 1.3 },
{ id: 80, lat: -18.1800, lng: -47.9500, level: 'high', area: 3.9 },
{ id: 81, lat: -18.3400, lng: -49.2100, level: 'medium', area: 2.8 }, // Capinópolis
{ id: 82, lat: -18.3300, lng: -49.2000, level: 'low', area: 1.0 },
{ id: 83, lat: -18.3500, lng: -49.2200, level: 'high', area: 4.3 },
{ id: 84, lat: -18.8800, lng: -48.2800, level: 'medium', area: 2.6 }, // Uberlândia (outra região)
{ id: 85, lat: -18.8700, lng: -48.2900, level: 'low', area: 1.3 },
{ id: 86, lat: -18.8900, lng: -48.2700, level: 'high', area: 3.2 },
{ id: 87, lat: -18.9500, lng: -48.2400, level: 'medium', area: 2.7 },
{ id: 88, lat: -18.9400, lng: -48.2500, level: 'low', area: 1.2 },
{ id: 89, lat: -18.9600, lng: -48.2300, level: 'high', area: 4.5 },
{ id: 90, lat: -18.9200, lng: -48.3200, level: 'medium', area: 2.1 },
{ id: 91, lat: -18.9100, lng: -48.3100, level: 'low', area: 1.1 },
{ id: 92, lat: -18.9300, lng: -48.3300, level: 'high', area: 3.6 },
{ id: 93, lat: -19.7300, lng: -47.9100, level: 'medium', area: 2.9 }, // Uberaba (outra região)
{ id: 94, lat: -19.7200, lng: -47.9200, level: 'low', area: 1.5 },
{ id: 95, lat: -19.7400, lng: -47.9000, level: 'high', area: 4.0 },
{ id: 96, lat: -18.6850, lng: -48.1950, level: 'medium', area: 2.0 }, // Araguari (outra região)
{ id: 97, lat: -18.6700, lng: -48.1850, level: 'low', area: 0.9 },
{ id: 98, lat: -18.6900, lng: -48.2050, level: 'high', area: 3.7 },
{ id: 99, lat: -18.9200, lng: -48.2000, level: 'medium', area: 2.3 }, // Uberlândia novo ponto
{ id: 100, lat: -18.9300, lng: -48.2100, level: 'high', area: 3.8 },
];

const MapView: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<typeof samplePoints[0] | null>(null);
  const [popupInfo, setPopupInfo] = useState<typeof samplePoints[0] | null>(null);
  const mapRef = useRef(null);

  const onMarkerClick = useCallback((point: typeof samplePoints[0]) => {
    setSelectedPoint(point);
    setPopupInfo(point);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Map Controls */}
          <div className="bg-green-800 text-white p-4 flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-xl font-bold mb-4 sm:mb-0">Mapa de Ocorrência de Leucena</h1>
            <div className="flex items-center space-x-4">
            </div>
          </div>

          {/* Map Container */}
          <div className="relative h-[500px]">
            <Map
              ref={mapRef}
              mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
              initialViewState={{
                longitude: -34.881,
                latitude: -8.054,
                zoom: 12
              }}
              style={{ width: '100%', height: '100%' }}
              mapStyle="mapbox://styles/mapbox/streets-v12"
            >
              <NavigationControl position="top-right" />
              
              {samplePoints.map(point => (
                <Marker
                  key={point.id}
                  longitude={point.lng}
                  latitude={point.lat}
                  anchor="bottom"
                  onClick={e => {
                    e.originalEvent.stopPropagation();
                    onMarkerClick(point);
                  }}
                >
                  <div className={`cursor-pointer transition-transform hover:scale-110 ${
                    point.level === 'high' ? 'text-red-500' :
                    point.level === 'medium' ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>
                    <MapPin className="h-6 w-6" />
                  </div>
                </Marker>
              ))}

              {popupInfo && (
                <Popup
                  anchor="top"
                  longitude={popupInfo.lng}
                  latitude={popupInfo.lat}
                  onClose={() => setPopupInfo(null)}
                >
                  <div className="p-2">
                    <h3 className="font-medium">Ponto {popupInfo.id}</h3>
                    <p className="text-sm">Área: {popupInfo.area} hectares</p>
                    <p className="text-sm">
                      Nível: <span className={
                        popupInfo.level === 'high' ? 'text-red-600 font-medium' :
                        popupInfo.level === 'medium' ? 'text-yellow-600 font-medium' :
                        'text-green-600 font-medium'
                      }>
                        {popupInfo.level === 'high' ? 'Alto' :
                         popupInfo.level === 'medium' ? 'Médio' : 'Baixo'}
                      </span>
                    </p>
                  </div>
                </Popup>
              )}
            </Map>

            {/* Map Legend */}
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-md">
              <h3 className="font-semibold text-sm mb-2">Legenda</h3>
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-xs">Alta concentração</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-xs">Média concentração</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-xs">Baixa concentração</span>
                </div>
              </div>
            </div>
          </div>

          {/* Points List */}
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Áreas Identificadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {samplePoints.map(point => (
                <div 
                  key={point.id}
                  className={`border rounded-md p-4 cursor-pointer transition-colors ${
                    selectedPoint?.id === point.id 
                      ? 'border-green-600 bg-green-50' 
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedPoint(point)}
                >
                  <div className="flex items-start">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        point.level === 'high' ? 'bg-red-100 text-red-600' :
                        point.level === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}
                    >
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ponto {point.id}</h3>
                      <p className="text-sm text-gray-600">
                        Coordenadas: {point.lat.toFixed(3)}, {point.lng.toFixed(3)}
                      </p>
                      <p className="text-sm text-gray-600">
                        Área: {point.area} hectares
                      </p>
                      <p className="text-sm">
                        Nível: {' '}
                        <span className={
                          point.level === 'high' ? 'text-red-600 font-medium' :
                          point.level === 'medium' ? 'text-yellow-600 font-medium' :
                          'text-green-600 font-medium'
                        }>
                          {point.level === 'high' ? 'Alto' : 
                           point.level === 'medium' ? 'Médio' : 'Baixo'}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Point Details */}
          {selectedPoint && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center mb-3">
                <Info className="h-5 w-5 text-green-700 mr-2" />
                <h3 className="text-lg font-semibold">Detalhes do Ponto {selectedPoint.id}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2">
                    <span className="font-medium">Coordenadas:</span>{' '}
                    {selectedPoint.lat.toFixed(5)}, {selectedPoint.lng.toFixed(5)}
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Área:</span> {selectedPoint.area} hectares
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Nível de concentração:</span>{' '}
                    <span className={
                      selectedPoint.level === 'high' ? 'text-red-600 font-medium' :
                      selectedPoint.level === 'medium' ? 'text-yellow-600 font-medium' :
                      'text-green-600 font-medium'
                    }>
                      {selectedPoint.level === 'high' ? 'Alto' : 
                       selectedPoint.level === 'medium' ? 'Médio' : 'Baixo'}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Recomendações:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {selectedPoint.level === 'high' && (
                      <>
                        <li>• Realizar poda imediata para controle da população</li>
                        <li>• Considerar utilização para produção de feno e ração animal</li>
                        <li>• Iniciar plantio de espécies nativas para diversificação</li>
                      </>
                    )}
                    {selectedPoint.level === 'medium' && (
                      <>
                        <li>• Monitorar crescimento e planejar poda nos próximos 2-3 meses</li>
                        <li>• Utilizar biomassa para compostagem e adubação</li>
                        <li>• Introduzir gradualmente espécies nativas complementares</li>
                      </>
                    )}
                    {selectedPoint.level === 'low' && (
                      <>
                        <li>• Manter monitoramento trimestral da área</li>
                        <li>• Usar como fonte de nitrogênio para o solo</li>
                        <li>• Preservar exemplares para benefícios ecológicos</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded transition-colors"
                  onClick={() => window.location.href = '/manejo'}
                >
                  Ver Técnicas de Manejo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapView;