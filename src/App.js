import Carousel from './components/Carousel';
import VirtualizedList from './components/VirtualizedList';
import DynamicList from './components/VirtualizedList/DynamicList';

function App() {
  return (
    <div className="App">
      <h2>Design System</h2>
      <Carousel />
      <VirtualizedList />
      <DynamicList />
    </div>
  );
}

export default App;
