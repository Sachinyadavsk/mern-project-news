import React, { useState } from 'react';
import { Button } from "../components/ui/button.jsx"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from '../components/ui/sonner.jsx';
import { toast } from 'sonner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/AuthSlice.js';

const Login = () => {
  const { loading } = useSelector(Store => Store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showpassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post('https://mern-project-news-backend.onrender.com/api/v1/user/login', input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      })
      if (res.data.success) {
        navigate('/')
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex h-screen md:pt-14 md:h-[760px]">

      <div className="flex justify-center items-center flex-1 px-4 md:px-0">
        <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">Login to your account</h1>
            </CardTitle>
            <p className="mt-2 text-sm font-serif text-center dark:text-gray-300">Enter your email below to login to your account</p>
          </CardHeader>
          <CardContent>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className="">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" value={input.email} onChange={handleChange} placeholder='Enter the email address' className="dark:border-gray-600 dark:bg-gray-900" />
              </div>
              <div className="relative">
                <Label htmlFor="password">Password</Label>
                <Input type={showpassword ? "text" : "password"} value={input.password} onChange={handleChange} name="password" id="password" placeholder='Enter your password' className="dark:border-gray-600 dark:bg-gray-900" />
                <button type='button' onClick={() => { setShowPassword(!showpassword) }} className="absolute right-3 top-6 text-gray-500">
                  {showpassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <Button type="submit" className="w-full">
                {loading ? (
                  <>
                  <Loader2 className='mr-2 w-4 h-4 animate-spin'/>
                  Please wait...
                  </>
                ) : ("Login")}
              </Button>
              <p className='text-center text-gray-600 dark:text-gray-300'>Don't have an account <span className='underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-100'><Link to={'/signup'}>Sign Up</Link></span></p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login