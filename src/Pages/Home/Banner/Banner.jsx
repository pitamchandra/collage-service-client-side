import { FaAngleRight } from "react-icons/fa";
import './Banner.css'

const Banner = () => {
    
    return (
        <section className="flex justify-center items-center h-[calc(100vh-220px)] bg">
            <div className="text-center space-y-5">
                <h1 className="text-6xl text-white">Welcome to our website</h1>
                <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et doloremque alias velit iure facilis quos, corporis tenetur quae repudiandae.</p>
                <button className="btn bg-rose-500 text-white px-6 py-2 hover:bg-sky-900 ">Contact Now! <FaAngleRight></FaAngleRight></button>
            </div>
        </section>
    );
};

export default Banner;