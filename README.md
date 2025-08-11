# Asset Management System

A modern React-based asset management system built for the Tractian challenge. This application provides an intuitive interface for visualizing and managing company assets, locations, and components in a hierarchical tree structure.

## 🚀 Features

- **Hierarchical Asset Visualization**: Tree-based display of company locations, assets, and components
- **Advanced Filtering**: Filter assets by critical status and energy sensors
- **Search Functionality**: Quick search through all assets and locations
- **Asset Details Panel**: Detailed view of selected assets with sensor information
- **Responsive Design**: Modern UI that works across different screen sizes
- **Real-time Data**: Built with React Query for efficient data fetching and caching

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Linting**: ESLint with TypeScript support

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **Yarn** or **npm** package manager

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tractian-challenge
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
yarn dev
# or
npm run dev
```

The application will start on `http://localhost:5173` (or the next available port).

### Production Build

```bash
yarn build
# or
npm run build
```

### Preview Production Build

```bash
yarn preview
# or
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AssetDetails/   # Asset information display
│   ├── FiltersButtonBar/ # Filter controls
│   ├── Navigation/     # Navigation component
│   ├── Search/         # Search functionality
│   ├── Tree/           # Tree visualization
│   └── TreeContainer/  # Tree container with logic
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── router/             # Routing configuration
├── services/           # API services
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎯 Usage

1. **Navigate to the application** - The main page displays a company's asset structure
2. **Use filters** - Toggle between critical status and energy sensor filters
3. **Search assets** - Use the search bar to quickly find specific assets
4. **Explore the tree** - Click on tree nodes to expand/collapse and view details
5. **View asset details** - Select any asset to see detailed information in the right panel

## 🎥 Demo

<!-- TODO: Add video demo here -->

_Video demonstration will be added here showing the application in action._

## 🔮 Future Improvements

### Planned Features

- [ ] **User Authentication**: Login system with role-based access control
- [ ] **Real-time Updates**: WebSocket integration for live asset status updates
- [ ] **Advanced Analytics**: Asset performance metrics and trend analysis
- [ ] **Mobile App**: React Native version for mobile devices
- [ ] **Export Functionality**: PDF/Excel export of asset reports
- [ ] **Notification System**: Alerts for critical asset status changes

### Technical Enhancements

- [ ] **Performance Optimization**: Virtual scrolling for large asset trees with virtualization support for deep nesting levels
- [ ] **Testing**: Comprehensive unit and integration tests with proper error boundary testing
- [ ] **Accessibility**: WCAG compliance improvements and better screen reader support
- [ ] **Internationalization**: Multi-language support for global asset management
- [ ] **PWA Features**: Offline capability and app-like experience

### What I Would Improve With More Time

- [ ] **Dark Mode Support**: Implement a complete dark/light theme system with user preference persistence
- [ ] **Tree Virtualization**: Add virtualization support when the tree component has too many levels or nodes to prevent performance issues
- [ ] **Enhanced Error Handling**: Improve error boundaries, user-friendly error messages, and graceful degradation for failed API calls
- [ ] **Better State Management**: Implement more robust state management patterns for complex asset hierarchies
- [ ] **Performance Monitoring**: Add performance metrics and monitoring for large asset trees
- [ ] **Accessibility Improvements**: Better keyboard navigation, focus management, and ARIA labels for the tree component

## 🐛 Troubleshooting

### Common Issues

**Port already in use**

```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9
```

**Dependencies issues**

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
