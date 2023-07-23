import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Login = () => {

    const {login} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const path = location?.state?.pathname || '/';

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const inputRef = useRef(null)


    const handleSubmit= event =>{
        event.preventDefault()
        const form = event.target;
        if(emailError){
          form.email.focus()
          return;
        }
        else if(passwordError){
          form.password.focus()
          return;
        }
        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            
            navigate(path)
        })
        .catch(error =>{
            console.log(error);
            
        })
      }
    
      const handleEmail = event =>{
        const emailInput = event.target.value;
        setEmail(emailInput)
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
          setEmailError('please type a valid email')
        }else{
          setEmailError('')
        }
      }
    
      const handlePassword = event =>{
        const passwordInput = event.target.value;
        setPassword(passwordInput)
        if(passwordInput.length < 6){
          setPasswordError('password must be at least 6 characters')
        }
        else{
          setPasswordError('')
        }
      }
    
      
    return (
        <div className="container mx-auto px-3 md:px-0 ">
            <form onSubmit={handleSubmit} className="md:w-1/4 mx-auto my-10 border-2 shadow shadow-violet-500 border-violet-500 p-4 rounded">
              <h3 className="text-xl text-rose-500 font-semibold mb-3">Please login</h3>
              <div className="relative z-0 w-full mb-4 group">
                <input type="text" ref={inputRef} name="email" id="email" value={email} onChange={handleEmail} className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer ${email ? emailError ? 'border-rose-500 text-rose-400' : 'border-green-500 text-green-500' : 'border-gray-300 text-gray-900 focus:border-blue-600'}`} placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                {
                  emailError && <span className="error">{emailError}</span>
                }
              </div>
              <div className="relative z-0 w-full mb-4 group">
                <input type={showPass ? 'text' : 'password'} name="password" id="password" value={password} onChange={handlePassword} className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer ${password ? passwordError ? 'border-rose-500 text-rose-400' : 'border-green-500 text-green-500' : 'border-gray-300 text-gray-900 focus:border-blue-600'}`} placeholder=" " required />
                <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                {
                  passwordError && <span className="error">{passwordError}</span>
                }
              </div>
              <div className="flex justify-between mb-6" >
                <div className="flex items-center h-5">
                  <input id="checkbox" type="checkbox" value="" onClick={() =>setShowPass(!showPass)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                  <label  htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password</label>
                </div>
              </div>
              <input type="submit" value="login" className="btn bg-rose-500 text-white px-7 py-2 hover:bg-sky-900 duration-500 mb-5" />
              <p>Don&apos;t have an account? <Link to='/register' state={location?.state} className="text-error ">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;