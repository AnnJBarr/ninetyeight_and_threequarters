import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import RemainingTasks from './components/RemainingTasks';
import TasksArea from './components/TasksArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <RemainingTasks count = {6}/>
      <TasksArea />
      <Footer />

    </div>
  );
}

export default App;
