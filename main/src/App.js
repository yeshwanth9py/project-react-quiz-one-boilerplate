import React,{useState} from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
// import ResultComponent from './components/ResultComponent';

function App() {
  const [home, setHome] = useState(true)
  return (
    <div className="App">
      {home && <HomeComponent prop={setHome}/>}
      {!home && <QuizComponent prop={setHome}/>}
      {/* <ResultComponent/> */}
    </div>
  );
}

export default App;

