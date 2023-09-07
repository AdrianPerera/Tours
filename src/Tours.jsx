import React, {useEffect, useState} from 'react';
import Tour from "./Tour.jsx";
import Loading from "./Loading.jsx";

const Tours = ({url}) => {

    const [tours, setTours] = useState([])
    const [loading ,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchTours();
    }, [])

    async function fetchTours() {
        let tours = await fetch(url).then(r => r.json());
        console.log(tours);
        setTours(tours);
        setLoading(false);
    }

    return (
        <section>
            <div className="tours">
                {loading && <Loading/>
                }
                {tours?.map((tour => {
                        return <Tour key={tour.id} {...tour}/>
                    }
                ))
                }
            </div>
        </section>

    );
};

export default Tours;
