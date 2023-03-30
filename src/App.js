import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavComponent from './components/NavComponent/NavComponent'
import AboutPage from './pages/AboutPage';
import CollectionPage from './pages/CollectionPage';
import BrowsePage from './pages/BrowsePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserAreaPage from './pages/UserAreaPage';
import SingleArtistPage from './pages/SingleArtistPage';
import SingleArtworkPage from './pages/SingleArtworkPage';
import { useSelector } from 'react-redux';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {

  const {user} = useSelector((state) => state.UserReducer)

  return (
    <div className="App">
      <NavComponent></NavComponent>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/about' element={<AboutPage/>}></Route>
        <Route exact path='/collection' element={<CollectionPage/>}></Route>
        <Route exact path='/browse' element={user && user.id?<BrowsePage/> : <Navigate to="/login" replace></Navigate>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        <Route exact path='/user-area' element={user && user.id?<UserAreaPage/> : <Navigate to="/login" replace></Navigate>}></Route>
        <Route exact path='/artwork/:id' element={<SingleArtworkPage/>}></Route>
        <Route exact path='/artist/:name' element={<SingleArtistPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
