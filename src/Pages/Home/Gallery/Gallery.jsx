import team1 from '../../../assets/gallery/team-1.jpg'
import team2 from '../../../assets/gallery/team-2.jpg'
import team3 from '../../../assets/gallery/team-3.jpg'
import team4 from '../../../assets/gallery/team-4.jpg'
import team5 from '../../../assets/gallery/team-5.jpg'
import team6 from '../../../assets/gallery/team-6.jpg'

const Gallery = () => {
    return (
        <div className='py-14'>
            <h3 className= "text-center text-4xl mb-10">Our <span className="text-rose-500">Gallery</span></h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <img src={team1} alt="" />
                <img src={team2} alt="" />
                <img src={team3} alt="" />
                <img src={team4} alt="" />
                <img src={team5} alt="" />
                <img src={team6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;