import { useEffect, useState } from "react";
import BestCard from "./BestCard/BestCard";


const Best = () => {
    const [arts, setArts] = useState([])
    
    useEffect(() => {
        fetch(`https://a10-server-opal.vercel.app/best`)
            .then(res => res.json())
            .then(data => {
                setArts(data)

            })
    }, [])

    return (
        <div className="my-4">
            <h2 className="text-center my-2 text-3xl">Best of the Month</h2>
            {
                arts.map(art => {

                    return (<BestCard art={art} key={art._id}></BestCard>)
                })
            }
        </div>
    );
};

export default Best;