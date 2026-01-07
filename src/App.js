import React from 'react';
import Carousel from "./components/Carousel";
import OtpContainer from "./components/Otp";
import VirtualizedList from "./components/VirtualizedList";
import ProgressBar from "./components/ProgressBar";
import TodoApp from "./components/TodoApp/Todo";
import DynamicList from "./components/VirtualizedList/DynamicList";
import SearchBar from "./components/SearchBar";
import ModalConsumer from "./components/NestedModal/ModalConsumer";
import { ModalContainer } from "./components/NestedModal";
import FormComponent from "./components/DynamicForm/FormComponent";
import Toast from "./components/Toast";

function App() {
  return (
    <div className="App">
      <h2>Design System</h2>
      <Carousel />
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
      <OtpContainer />
      <ModalContainer />
      <ModalContainer>
        <ModalConsumer />
      </ModalContainer>
      <SearchBar />
      <FormComponent />
      <Toast />
    </div>
  );
}

export default App;
