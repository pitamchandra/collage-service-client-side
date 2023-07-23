import { FaAngleRight } from "react-icons/fa";


const Banner = () => {
    const bg = {
        background: 'url("../../../assets/gallery/banner.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '100px 0',
        
      };
    return (
        <section style={bg} className="flex justify-center items-center h-[calc(100vh-220px)]">
            <div className="text-center space-y-5">
                <h1 className="text-6xl">Welcome to our website</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet et doloremque alias velit iure facilis quos, corporis tenetur quae repudiandae.</p>
                <button className="btn bg-rose-500 text-white px-6 py-2 hover:bg-sky-900 ">Contact Now! <FaAngleRight></FaAngleRight></button>
            </div>
        </section>
    );
};

export default Banner;