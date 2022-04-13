
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import SongPage from './components/SongPage';

function App() {
  return (
   <BrowserRouter>
   <div className='app'>
   <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/:songId' element={<SongPage />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
