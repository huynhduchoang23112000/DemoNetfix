
import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Contents from './components/Contents/Contents';
import MoviesDetail from './components/MoviesDetail/MoviesDetail';
import { useSelector } from 'react-redux';
function App() {
  const {MovieDetail} = useSelector(state => state.infoMovies)
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false}/>
    </div>
  );
}

export default App;
