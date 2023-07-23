import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {

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
        </>
    );
};

export default Home;