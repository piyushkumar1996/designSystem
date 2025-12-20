# Design System

A React component library featuring reusable UI components built with CSS Modules.

## Components

### Carousel
An image carousel component with navigation buttons, dots indicator, and auto-slide functionality.

**Usage:**
```jsx
import Carousel from './components/Carousel';

<Carousel />
```

### VirtualizedList
A virtualized list component for efficiently rendering large lists with static item heights.

**Usage:**
```jsx
import VirtualizedList from './components/VirtualizedList';

<VirtualizedList />
```

### DynamicList
A virtualized list component that handles dynamic item heights using binary search for optimal performance.

**Usage:**
```jsx
import DynamicList from './components/VirtualizedList/DynamicList';

<DynamicList />
```

## Installation

```bash
npm install
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Styling

This project uses **CSS Modules** for component styling. All styles are scoped to their respective components using `.module.css` files.

## Tech Stack

- React 19.2.3
- CSS Modules
