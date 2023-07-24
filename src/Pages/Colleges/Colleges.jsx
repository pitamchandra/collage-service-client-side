import { useEffect, useState } from "react";
import SingleCollege from "../../components/SingleCollege";

import Banner from "../Home/Banner/Banner";
import { FaBuffer } from "react-icons/fa";


const Colleges = () => {
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
            <Banner></Banner>
            <div className="container mx-auto pb-14">
                <h3 className= "text-center text-4xl mt-12">Our <span className="text-rose-500">Colleges</span></h3>
                <div className="divider w-1/6 m-auto mt-3 mb-10 text-rose-500"><FaBuffer className="w-16"></FaBuffer></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        colleges.map(college => <SingleCollege
                            key={college.id}
                            college={college}
                        ></SingleCollege>)
                    }
                </div>
            </div>
        </>
    );
};

export default Colleges;