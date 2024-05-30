import React, {useState, useEffect} from 'react';
import useLocalStorage from "use-local-storage";
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

// Css
import './App.css';

// Loader
import HashLoader from "react-spinners/HashLoader";

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Pages/Loading';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, [])

  return (
    <>
    <div className='App' data-theme={isDark ? "dark" : "light"}>

      {
        loading ? 

        <HashLoader
        size={200}
        color={"#45523E"}
        loading={loading} 
        />
      
        :
        <>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        <Router>
          <Routes>
            <Route path="/" element={<Loading isDark={isDark} setIsDark={setIsDark} />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </Router>
        </>
      }
    </div>
    </>
  );
}

export default App;
