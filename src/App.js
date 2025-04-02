import logo from './logo.svg';
import './App.css';
import AddFaculties from './components/AddFaculties';
import AddStudent from './components/AddStudent';
import DeleteFaculty from './components/DeleteFaculty';
import Navbar from './components/Navbar';
import SearchFaculty from './components/SearchFaculty';
import SearchStudent from './components/SearchStudent';
import ViewallFaculties from './components/ViewallFaculties';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     

    <BrowserRouter>
    
      <Routes>

      <Route path='/' element={<AddFaculties />}/>
      <Route path='/addstud' element={<AddStudent />}/>
      <Route path='/delete' element={<DeleteFaculty />}/>
      <Route path='/searchfac' element={<SearchFaculty />}/>
      <Route path='/searchstud' element={<SearchStudent />}/>
      <Route path='/viewall' element={<ViewallFaculties />}/>
      

      </Routes>
    
    </BrowserRouter>


    </div>
  );
}

export default App;
