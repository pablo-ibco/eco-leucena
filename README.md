# 🌱 Eco Leucena

Uma aplicação web interativa focada em ecologia, reflorestação e gestão ambiental, desenvolvida com React, TypeScript e tecnologias modernas.

## 🚀 Funcionalidades

- **Mapa Interativo**: Visualização de áreas de reflorestação usando Mapbox GL
- **Sistema de Gestão**: Ferramentas para gerenciamento de projetos ambientais
- **Jogo Educativo**: Experiência gamificada para conscientização ambiental
- **Recursos**: Biblioteca de informações sobre ecologia e sustentabilidade
- **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilização**: Tailwind CSS
- **Mapas**: Mapbox GL + React Map GL
- **Roteamento**: React Router DOM
- **Ícones**: Lucide React
- **Linting**: ESLint

## 📋 Pré-requisitos

- Node.js (versão 18.18.0 ou superior)
- npm ou yarn

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd eco-leucena
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 📁 Estrutura do Projeto

```
eco-leucena/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── utils/         # Utilitários e helpers
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Ponto de entrada
├── public/            # Arquivos estáticos
├── package.json       # Dependências e scripts
└── README.md         # Este arquivo
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção
- `npm run lint` - Executa o linter

## 🌍 Páginas da Aplicação

- **Home**: Página inicial com visão geral do projeto
- **MapView**: Visualização interativa de mapas
- **Reforestation**: Informações sobre reflorestação
- **Management**: Ferramentas de gestão ambiental
- **Game**: Jogo educativo sobre ecologia
- **Resources**: Biblioteca de recursos ambientais

## 🔧 Configuração

### Variáveis de Ambiente

1. **Copie o arquivo de exemplo**:
   ```bash
   cp env.example .env
   ```

2. **Configure suas variáveis**:
   O arquivo `.env` já está configurado com o token do Mapbox. Se precisar de um novo token, obtenha um em [mapbox.com](https://www.mapbox.com/).

### Mapbox

Para usar os mapas, você precisará de um token do Mapbox. O token já está configurado no arquivo `env.example`. Se precisar de um novo token, obtenha um em [mapbox.com](https://www.mapbox.com/).

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Autores

- **Eco Leucena Team** - *Desenvolvimento inicial*

## 🙏 Agradecimentos

- Mapbox pela plataforma de mapas
- React e Vite pelas ferramentas de desenvolvimento
- Comunidade open source por todas as bibliotecas utilizadas

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor abra uma issue no repositório.

---

**Eco Leucena** - Conectando pessoas com a natureza através da tecnologia 🌿 