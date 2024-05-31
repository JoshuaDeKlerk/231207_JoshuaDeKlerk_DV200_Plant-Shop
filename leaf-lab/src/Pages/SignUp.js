import '../StyleSheets/PagesCSS/SignUp.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('/SignUp', {
        name, email, password
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Sign up successful. Welcome!');
        navigate('/SignIn');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='SignUp'>
      <div className="SignUpContainer">
        <div className="SignUpLeft">
          <form onSubmit={registerUser} className='FormContainer'>
            <h1>Sign Up</h1>

            <h2>Sign up to explore our site</h2>

            <div className="TextFields">
              <input type='text' placeholder='Name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
            </div>
            
            <div className="TextFields">
              <input type='email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            </div>
            
            <div className="TextFields">
              <input type='password' placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            </div>

            <button type='submit'>Submit</button>

            <Link to={'/SignIn'} className='SignInLink'>
              Already have account?
            </Link>
          </form>
        </div>
        <div className="SignUpRight"></div>
      </div>
      
    </div>
  );
}

export default SignUp;