import {useEffect, useState} from "react";
import Tours from "./Tours.jsx";
import Loading from "./Loading.jsx";
import tour from "./Tour.jsx";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(false);
    const removeTour = (id)=>{
        const newTours = tours.filter((tour)=> tour.id !==id);
        setTours(newTours);
    }


    const fetchTours = async () => {
        setLoading(true);
        try {
            let tours = await fetch(url).then(r => r.json());
            setTours(tours);
            setLoading(false);
        } catch (error) {

        }
        setLoading(false);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (<main><Loading/></main>)
    }

    if(tours.length === 0){
        return (<main>
            <div className="title">
                <h2>No tours left</h2>
                <button type='button' className="btn" style={{marginTop:'2rem'}} onClick={fetchTours}>
                    refreshs
                </button>
            </div>
        </main>)
    }

    return (
        <main className="main">
            <Tours tours={tours} removeTour={removeTour}/>
        </main>)
};
export default App;
