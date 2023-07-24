import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = (props) => {
    const {googleLogin} = useContext(AuthContext)
    const path = props.path;
    const navigate = useNavigate()

    const handleGoogle = () =>{
         googleLogin()
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            navigate(path)
        })
        .catch(error =>{
            alert(error.message);
        })
    }
    
    return (
        <>
            <div className='my-3 flex items-center gap-5'>
                <div className="divider w-1/6 m-auto mt-3 mb-4 text-rose-500">OR</div>  
            </div>
            <div className="text-center">
                <button onClick={handleGoogle} className='btn bg-rose-500 text-white px-6 py-2 hover:bg-sky-900 mb-6'> <FaGoogle className='text-rose-500'></FaGoogle> Continue with Google</button>
            </div>
            
        </>
    );
};

export default GoogleLogin;