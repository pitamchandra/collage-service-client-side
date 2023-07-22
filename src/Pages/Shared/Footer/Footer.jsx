import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="p-10 bg-sky-950">
            <footer className="footer container mx-auto text-base-content text-white">
                <div>
                    <span className="footer-title">Top Colleges</span> 
                    <Link to="#">Harvard University</Link>
                    <Link to="#">University of Cambridge</Link>
                    <Link to="#">Stanford University</Link>
                    <Link to="#">Massachusetts Institute of Technology</Link>
                    <Link to="#">Oxford University</Link>
                    <Link to="#">University of Toronto</Link>
                </div> 
                <div>
                    <span className="footer-title">Quick Links</span> 
                    <Link to="/">Home</Link>
                    <Link to="/college">Colleges</Link>
                    <Link to="/admission">Admission</Link>
                    <Link to="/myCollege">My college</Link>
                </div> 
                <div>
                    <span className="footer-title">Social Links</span> 
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://facebook.com" className="w-12 h-12 bg-black text-rose-500 hover:text-sky-950 hover:bg-rose-500 flex justify-center items-center mr-5"><FaFacebookF className="w-5 h-5"></FaFacebookF></Link>
                        <Link to="https://twitter.com/" className="w-12 h-12 bg-black text-rose-500 hover:text-sky-950 hover:bg-rose-500 flex justify-center items-center mr-5"><FaTwitter className="w-5 h-5"></FaTwitter></Link>
                        <Link to="https://www.instagram.com/" className="w-12 h-12 bg-black text-rose-500 hover:text-sky-950 hover:bg-rose-500 flex justify-center items-center mr-5"><FaInstagram className="w-5 h-5"></FaInstagram></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;