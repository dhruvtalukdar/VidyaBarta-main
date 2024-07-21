import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../../contexts/ContextProvider';



const SigninForm = () => {
  const {user, loginUser} = useStateContext()
  const navigate = useNavigate()

  const loginForm = useRef(null)

  useEffect(() => {
    if (user){
      navigate('/')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value
    
    const userInfo = {email, password}

    loginUser(userInfo)
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} ref={loginForm}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email" 
              name="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password" 
              name="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            value="Login"
            className="w-full bg-indigo-500 text-white p-3 rounded hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
