// src/App.js
import React from 'react';
import useLocalStorage from 'use-local-storage';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';

// Css
import './App.css';

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Pages/Loading';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Browse from './Pages/Browse';
import MyPlants from './Pages/MyPlants';
import AddPlant from './Pages/AddPlant';
import EditPlant from './Pages/EditPlant';
import PlantDetails from './Pages/PlantDetails'; // Import PlantDetails

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <UserContextProvider>
      <div className='App' data-theme={isDark ? 'dark' : 'light'}>
        <>
          <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
          <Router>
            <Routes>
              <Route path='/' element={<Loading isDark={isDark} setIsDark={setIsDark} />} />
              <Route path='/SignIn' element={<SignIn isDark={isDark} setIsDark={setIsDark} />} />
              <Route path='/SignUp' element={<SignUp isDark={isDark} setIsDark={setIsDark} />} />
              <Route path='/Home' element={<Home isDark={isDark} setIsDark={setIsDark} />} />
              <Route path='/MyPlants' element={<MyPlants isDark={isDark} setIsDark={setIsDark} />} />
              <Route path='/Browse' element={<Browse isDark={isDark} setIsDark={setIsDark} />} />
              <Route path='/AddPlant' element={<AddPlant isDark={isDark} setIsDark={setIsDark} />} />
              <Route path='/edit-plant/:id' element={<EditPlant isDark={isDark} setIsDark={setIsDark} />} /> {/* Ensure this matches the URL pattern */}
              <Route path='/plants/:id' element={<PlantDetails isDark={isDark} setIsDark={setIsDark} />} /> {/* Add PlantDetails route */}
            </Routes>
          </Router>
        </>
      </div>
    </UserContextProvider>
  );
}

export default App;
