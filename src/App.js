
import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Contents from './components/Contents/Contents';
import { useSelector } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
    </div>
  );
}

export default App;
