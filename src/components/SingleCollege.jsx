import { Link } from "react-router-dom";


const SingleCollege = ({college}) => {
    const {id, collegeName, image, sports, researchHistory, events, admissionDates} = college;
    return (
        <div className="h-100">
            <img className="w-full h-96" src={image} alt="" />
            <div className="p-5 border border-rose-500 border-t-0">
                <h3 className="text-2xl mb-3  text-black">{collegeName}</h3>
                <p><strong>Admission: </strong>{admissionDates}</p>
                <p><strong>Events: </strong>{sports.map((lala, index)=> <div className="ml-6" key={index}>{index+1}. { lala } <br/></div> )}</p>
                <p><strong>Sports: </strong>{events.map((lala, index)=> <div className="ml-6" key={index}>{index+1}. { lala } <br/></div> )}</p>
                <p><strong>Research History: </strong>{researchHistory}</p>
                <Link to={`/collegeDetails/${id}`}><button className="btn bg-rose-500 text-white px-6 py-2 hover:bg-sky-900 mt-4">view details</button></Link>
            </div>
        </div>
    );
};

export default SingleCollege;