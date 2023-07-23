import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const li = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-rose-500 mx-3 text-xl" : "mx-3 text-xl"}>Home</NavLink>
        <NavLink to="/college" className={({ isActive }) => isActive ? "text-rose-500 mx-3 text-xl" : "mx-3 text-xl hover:text-rose-500"}>Colleges</NavLink>
        <NavLink to="/admission" className={({ isActive }) => isActive ? "text-rose-500 mx-3 text-xl" : "mx-3 text-xl hover:text-rose-500"}>Admission</NavLink>
        <NavLink to="/myCollege" className={({ isActive }) => isActive ? "text-rose-500 mx-3 text-xl" : "mx-3 text-xl hover:text-rose-500"}>My College</NavLink>
    </>

    return (
        <div className="bg-white shadow py-4">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                    </div>
                    <Link to={'/'} className="text-3xl">College <span className="text-rose-500">Services</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {li}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><button className="btn bg-rose-500 text-white px-6 py-2 hover:bg-sky-900 ">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;