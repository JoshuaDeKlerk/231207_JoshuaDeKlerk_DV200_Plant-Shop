import '../StyleSheets/PagesCSS/SignIn.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
      const {email, password} = data
      try {
        const {data} = await axios.post('/SignIn', {
          email,
          password
        });

        if(data.error) {
          toast.error(data.error)
        } else {
          setData({ name: '', email: '', password: '' });
          navigate('/Home')
        }
      } catch (error) {
        
      }
  }

  return (
    <div className='SignIn'>
      <div className="SignInContainer">
        <div className='SignInLeft'></div>
        <div className='SignInRight'>
          <form onSubmit={loginUser} className='FormContainer'>
            <h1>Sign In</h1>
            
            <h2>Sign in to one your account</h2>

            <div className='TextFields'>
              <input type='email' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            </div>

            <div className='TextFields'>
              <input type='password' placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            </div>

            <button type='submit'>Login</button>

            <Link to={'/SignUp'} className='SignUpLink'>
              Do not have an account?
            </Link>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default SignIn;