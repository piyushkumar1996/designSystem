import Carousel from "./components/Carousel";
import OtpContainer from "./components/Otp";
import VirtualizedList from "./components/VirtualizedList";
import ProgressBar from "./components/ProgressBar";
import TodoApp from "./components/TodoApp/Todo";
import DynamicList from "./components/VirtualizedList/DynamicList";

function App() {
  return (
    <div className="App">
      <h2>Design System</h2>
      <Carousel />
      <OtpContainer />
      <VirtualizedList />
      <DynamicList />
      <ProgressBar
        progressValue={90}
        label={"File upload progress"}
        heading="Progress Bar"
        min={0}
        max={100}
      />
      <TodoApp />
    </div>
  );
}

export default App;
