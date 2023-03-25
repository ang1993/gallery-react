import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavComponent from './components/NavComponent/NavComponent'
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SingleArtistPage from './pages/SingleArtistPage';
import SingleArtworkPage from './pages/SingleArtworkPage';

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/about' element={<AboutPage/>}></Route>
        <Route exact path='/browse' element={<GalleryPage/>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        <Route exact path='/artwork/:id' element={<SingleArtworkPage/>}></Route>
        <Route exact path='/artist/:name' element={<SingleArtistPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
