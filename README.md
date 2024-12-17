## Overview

This application provides users with:
- Real-time currency exchange rates from a reliable API
- Ability to view a comprehensive list of currency rates
- Feature to mark currencies as favorites for quick access
- Dark/Light theme support


## Technical Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **State Management**: Zustand
- **Navigation**: Expo Router (file-based routing)
- **UI Components**: Custom themed components
- **API Integration**: Fetch API with type-safe responses

## Architecture & Design

### App Structure

```
app/
├── (tabs)/
│   ├── index.tsx       # Home screen with all rates
│   ├── favorites.tsx   # Favorites screen
│   └── _layout.tsx     # Tab navigation layout
├── components/
│   ├── CurrencyList.tsx
│   ├── FavoriteCurrencyList.tsx
│   ├── ThemedText.tsx
│   └── ThemedView.tsx
└── lib/
    └── store/
        └── currencyStore.ts  # Zustand store for state management
        api/
        ├── index.ts    # Fetch utility functions
        └── currencyApi.ts    # Fetch API for currency rates
        types/
        └── currency.ts    # Type definitions for currency rates
```

### Key Components

- **HomeScreen**: Displays all available currency rates with real-time updates
- **FavoritesScreen**: Shows user-selected favorite currencies
- **CurrencyList**: Reusable component for displaying currency rates

### State Management

The app uses Zustand for state management, offering:
- Centralized store for currency rates and favorites
- Persistent storage for favorite currencies
- Type-safe state updates
- Efficient re-rendering with minimal boilerplate

### API Integration

Currency rates are fetched from an external API with:
- Type-safe responses
- Error handling
- Rate limiting consideration
- Last update timestamp tracking

## Implementation Details

### Offline Support

The app implements basic offline support through:
- Caching of last fetched rates
- Persistent storage of favorite currencies
- Graceful degradation when offline

### Performance Optimizations

- Memoized currency calculations
- Efficient list rendering with FlatList
- Minimal re-renders through proper state management

### Additional Features

- Pull-to-refresh functionality
- Error states and loading indicators
