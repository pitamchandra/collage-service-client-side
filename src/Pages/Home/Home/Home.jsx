import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SingleCollege from "../../../components/SingleCollege";
import { FaBuffer } from "react-icons/fa";


const Home = () => {

    const [colleges, setColleges] = useState([])

    useEffect(()=>{
        fetch('college.json')
        .then(res=> res.json())
        .then(data =>{
            setColleges(data)
        })
    },[])

    console.log(colleges)
 
    return (
        <>
            <section className="bg-gray-100 py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <form className="flex items-center max-w-3xl mx-auto">
                    <input type="text" id="searchInput" placeholder="Enter your search favorite college" className="flex-grow py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:text-rose-500"/>
                    <button type="submit" id="searchButton" className="bg-rose-500 hover:bg-sky-950 text-white py-2 px-6 rounded-r-md focus:outline-none focus:ring-2 focus:text-rose-500"> Search </button>
                </form> 
            </section>
            <Banner></Banner>
            <div className="container mx-auto">
                <Gallery></Gallery>
            </div>
            <div className="container mx-auto pb-14">
                <h3 className= "text-center text-4xl">Our <span className="text-rose-500">Colleges</span></h3>   
                <div className="divider w-1/6 m-auto mt-3 mb-10 text-rose-500"><FaBuffer className="w-16"></FaBuffer></div>            
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        colleges.slice(0,3).map(college => <SingleCollege
                            key={college.id}
                            college={college}
                        ></SingleCollege>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;